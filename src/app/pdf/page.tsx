"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { LiquidCard } from "@/components/LiquidCard";
import { questions } from "@/data/questions";

type GeneratingState = Record<number, boolean>;

function generatePDF(year: number) {
    // Dynamic import to avoid SSR issues
    return import("jspdf").then(({ default: jsPDF }) => {
        const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
        const pageWidth = doc.internal.pageSize.getWidth(); // ~210mm
        const pageHeight = doc.internal.pageSize.getHeight(); // ~297mm
        const margin = 20;
        const contentWidth = pageWidth - margin * 2;
        let y = margin;

        const yearQuestions = questions.filter((q) => q.year === year);
        
        // Define standard structure usually followed
        const mcqs = yearQuestions.filter((q) => q.type === "MCQ");
        const shorts2 = yearQuestions.filter((q) => q.type === "Short" && q.marks === 2);
        const shorts3 = yearQuestions.filter((q) => q.type === "Short" && q.marks === 3);
        const caseStudies = yearQuestions.filter((q) => q.type === "Case Study");
        const longs = yearQuestions.filter((q) => q.type === "Long");

        const checkPage = (needed: number) => {
            if (y + needed > pageHeight - margin) {
                doc.addPage();
                y = margin;
            }
        };

        const setFont = (type: "normal" | "bold" | "italic" | "bolditalic" = "normal", size = 10) => {
            doc.setFont("times", type);
            doc.setFontSize(size);
            doc.setTextColor(0, 0, 0); // Always black
        };

        // ────────── FRONT PAGE / HEADER ──────────
        
        // Top instruction
        setFont("bold", 10);
        doc.text("Roll No.", margin, y + 5);
        doc.rect(margin + 16, y, 60, 8); // Roll no box
        
        doc.setFontSize(9);
        doc.text("Q.P. Code 75/1/1", pageWidth - margin, y + 5, { align: "right" });
        y += 15;

        // Centered Header
        setFont("bold", 11);
        doc.text("CANDIDATES MUST WRITE THE Q.P. CODE", pageWidth / 2, y, { align: "center" });
        y += 5;
        doc.text("ON THE TITLE PAGE OF THE ANSWER-BOOK", pageWidth / 2, y, { align: "center" });
        y += 12;

        setFont("bold", 16);
        doc.text("PHYSICAL EDUCATION (048)", pageWidth / 2, y, { align: "center" });
        y += 7;

        setFont("bold", 12);
        doc.text("CLASS XII", pageWidth / 2, y, { align: "center" });
        y += 10;

        // Time / Marks
        setFont("bold", 10);
        doc.text("Time Allowed: 3 Hours", margin, y);
        doc.text("Maximum Marks: 70", pageWidth - margin, y, { align: "right" });
        y += 8;

        // Line separator
        doc.setLineWidth(0.5);
        doc.line(margin, y, pageWidth - margin, y);
        y += 6;

        // General Instructions
        setFont("bold", 10);
        doc.text("General Instructions:", margin, y);
        y += 5;
        
        setFont("normal", 9);
        const instructions = [
            "1. The question paper contains 5 sections: A, B, C, D and E.",
            "2. Section A has 18 MCQ questions carrying 1 mark each.",
            "3. Section B has 5 questions carrying 2 marks each.",
            "4. Section C has 5 questions carrying 3 marks each.",
            "5. Section D has 3 Case Study questions carrying 4 marks each.",
            "6. Section E has 3 questions carrying 5 marks each.",
            "7. All questions are compulsory."
        ];
        
        instructions.forEach(inst => {
            doc.text(inst, margin, y);
            y += 5;
        });

        y += 5;
        doc.setLineWidth(0.5);
        doc.line(margin, y, pageWidth - margin, y);
        y += 8;

        // ────────── RENDER SECTIONS ──────────

        const renderSection = (title: string, qs: typeof yearQuestions) => {
            if (qs.length === 0) return;

            checkPage(20);
            
            // Section Header
            setFont("bold", 11);
            doc.text(title.toUpperCase(), pageWidth / 2, y, { align: "center" });
            y += 8;

            qs.forEach((q, i) => {
                checkPage(30);
                
                // Question Number
                setFont("bold", 10);
                
                // Determine absolute question number logic if needed, but relative per section or global?
                // Usually global. Let's find index in total list or just use q.id logic if it was numeric.
                // For now, simpler to find index in the yearQuestions array.
                const absoluteIndex = yearQuestions.findIndex(yq => yq.id === q.id) + 1;
                
                doc.text(`${absoluteIndex}.`, margin, y);

                // Question Text
                setFont("normal", 10);
                // Indent text slightly
                const qTextX = margin + 8;
                const qTextWidth = contentWidth - 15; // Space for marks on right?
                
                const lines = doc.splitTextToSize(q.question, qTextWidth);
                doc.text(lines, qTextX, y);
                
                // Draw Marks aligned to right of the first line or bottom?
                // CBSE usually puts marks in brackets at the end of the line or right aligned.
                // Let's go with right aligned on the first line.
                setFont("bold", 10);
                const marksStr = `[${q.marks}]`;
                doc.text(marksStr, pageWidth - margin, y, { align: "right" });

                y += lines.length * 5 + 3;
            });
            
            y += 5; // Extra spacing between sections
        };

        renderSection("Section A", mcqs);
        renderSection("Section B", shorts2);
        renderSection("Section C", shorts3);
        renderSection("Section D", caseStudies);
        renderSection("Section E", longs);

        // ────────── MARKING SCHEME ──────────
        
        doc.addPage();
        y = margin;

        setFont("bold", 14);
        doc.text("MARKING SCHEME", pageWidth / 2, y, { align: "center" });
        y += 7;
        setFont("bold", 12);
        doc.text("PHYSICAL EDUCATION (048)", pageWidth / 2, y, { align: "center" });
        y += 7;
        doc.text(`CLASS XII (${year})`, pageWidth / 2, y, { align: "center" });
        y += 15;

        // Render Answer Keys
        const renderAnswers = (qs: typeof yearQuestions) => {
            qs.forEach((q) => {
                const absoluteIndex = yearQuestions.findIndex(yq => yq.id === q.id) + 1;
                
                checkPage(25);

                // Q No.
                setFont("bold", 10);
                doc.text(`${absoluteIndex}.`, margin, y);

                // Answer styling: Value points usually bulleted or plain text.
                setFont("normal", 10);
                const ansX = margin + 8;
                
                // Clean up answer text
                let cleanAns = q.answer.replace(/\(A\)/gi, "").replace(/\(B\)/gi, "").replace(/\(C\)/gi, "").replace(/\(D\)/gi, "").trim();
                // If MCQ, keep the option label if present in original, but user said "exact style".
                // Actually CBSE MS usually says: "(a) Option Text" or just "Option Text".
                // My data has "(D) Maintenance of field". I should print it as is mostly.
                
                if (q.type === "MCQ") {
                    cleanAns = q.answer; // Keep (A), (B) etc for MCQs
                }

                const lines = doc.splitTextToSize(cleanAns, contentWidth - 15);
                doc.text(lines, ansX, y);

                // Marks split
                setFont("bold", 10);
                doc.text(`${q.marks}`, pageWidth - margin, y, { align: "right" });

                y += lines.length * 5 + 2;
                
                // Add separator line lightly
                doc.setDrawColor(200);
                doc.setLineWidth(0.1);
                doc.line(margin + 5, y, pageWidth - margin - 5, y);
                y += 4;
            });
        };
        
        renderAnswers(yearQuestions);

        doc.save(`CBSE_PE_Paper_${year}.pdf`);
    });
}

export default function PDFPage() {
    const [generating, setGenerating] = useState<GeneratingState>({});

    const handleDownload = async (year: number) => {
        setGenerating((prev) => ({ ...prev, [year]: true }));
        try {
            await generatePDF(year);
        } catch (err) {
            console.error("PDF generation failed:", err);
        } finally {
            setGenerating((prev) => ({ ...prev, [year]: false }));
        }
    };

    const pdfCards = [
        { year: 2025, badge: "Latest", badgeColor: "bg-fuchsia-500/20 text-fuchsia-300" },
        { year: 2024, badge: null, badgeColor: "" },
        { year: 2023, badge: null, badgeColor: "" },
    ];

    return (
        <div className="min-h-screen px-4 md:px-6 pt-8 pb-24">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto mb-10 text-center"
            >
                <motion.p
                    initial={{ opacity: 0, letterSpacing: "0.5em" }}
                    animate={{ opacity: 1, letterSpacing: "0.3em" }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-[10px] uppercase tracking-[0.3em] text-purple-300/70 mb-3"
                >
                    Download & Practice
                </motion.p>
                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-300 via-fuchsia-300 to-purple-400 bg-clip-text text-transparent mb-3">
                    Question Papers
                </h1>
                <p className="text-purple-300/80 text-sm max-w-md mx-auto font-light">
                    Full CBSE board papers with questions, answers & marking schemes — download as PDF
                </p>
            </motion.div>

            {/* PDF Cards */}
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
                {pdfCards.map((card, i) => {
                    const yearQs = questions.filter((q) => q.year === card.year);
                    const totalMarks = yearQs.reduce((s, q) => s + q.marks, 0);
                    const isGenerating = generating[card.year];

                    return (
                        <motion.div
                            key={card.year}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 + 0.3 }}
                        >
                            <LiquidCard glowing={card.year === 2025} className="h-full">
                                <div className="p-6 flex flex-col items-center text-center">
                                    {/* Year */}
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-3xl font-bold text-white">{card.year}</span>
                                        {card.badge && (
                                            <span className={`text-[9px] uppercase tracking-wider px-2 py-1 rounded-full ${card.badgeColor} animate-pulse`}>
                                                {card.badge}
                                            </span>
                                        )}
                                    </div>

                                    {/* Stats */}
                                    <p className="text-[11px] text-purple-300/80 mb-1">
                                        {yearQs.length} questions • {totalMarks} marks
                                    </p>
                                    <p className="text-[10px] text-purple-300/60 mb-5">
                                        3 Hours • All Sections
                                    </p>

                                    {/* Breakdown pills */}
                                    <div className="flex flex-wrap gap-1.5 justify-center mb-5">
                                        {["MCQ", "Short", "Long", "Case Study"].map((type) => {
                                            const count = yearQs.filter((q) => q.type === type).length;
                                            if (count === 0) return null;
                                            return (
                                                <span
                                                    key={type}
                                                    className="text-[9px] px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300/90"
                                                >
                                                    {count} {type}
                                                </span>
                                            );
                                        })}
                                    </div>

                                    {/* Contents list */}
                                    <div className="w-full space-y-1.5 mb-5 text-left">
                                        <div className="flex items-center gap-2 text-[10px] text-purple-300/70">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-400/60"><polyline points="20 6 9 17 4 12" /></svg>
                                            Questions with full paper format
                                        </div>
                                        <div className="flex items-center gap-2 text-[10px] text-purple-300/70">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-400/60"><polyline points="20 6 9 17 4 12" /></svg>
                                            Detailed answer key
                                        </div>
                                        <div className="flex items-center gap-2 text-[10px] text-purple-300/70">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-400/60"><polyline points="20 6 9 17 4 12" /></svg>
                                            Marking scheme per question
                                        </div>
                                    </div>

                                    {/* Download button */}
                                    <button
                                        onClick={() => handleDownload(card.year)}
                                        disabled={isGenerating}
                                        className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 border border-purple-400/20 hover:border-purple-400/40 hover:from-purple-500/30 hover:to-fuchsia-500/30 text-white text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                                    >
                                        {isGenerating ? (
                                            <>
                                                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                                </svg>
                                                Generating...
                                            </>
                                        ) : (
                                            <>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                                                    <polyline points="7 10 12 15 17 10" />
                                                    <line x1="12" y1="15" x2="12" y2="3" />
                                                </svg>
                                                Download PDF
                                            </>
                                        )}
                                    </button>
                                </div>
                            </LiquidCard>
                        </motion.div>
                    );
                })}
            </div>

            {/* Info note */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="max-w-4xl mx-auto mt-10 text-center"
            >
                <p className="text-[10px] text-purple-300/50">
                    PDFs are generated locally in your browser • No data is sent to any server
                </p>
            </motion.div>
        </div>
    );
}
