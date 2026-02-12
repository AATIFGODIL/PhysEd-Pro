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
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        const margin = 20;
        const contentWidth = pageWidth - margin * 2;
        let y = margin;

        const yearQuestions = questions.filter((q) => q.year === year);
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

        const drawLine = () => {
            doc.setDrawColor(200, 200, 200);
            doc.line(margin, y, pageWidth - margin, y);
            y += 4;
        };

        // ────────── Title Page ──────────
        doc.setFillColor(15, 15, 20);
        doc.rect(0, 0, pageWidth, pageHeight, "F");

        doc.setTextColor(180, 130, 255);
        doc.setFontSize(36);
        doc.setFont("helvetica", "bold");
        doc.text("PhysEd Pro", pageWidth / 2, 80, { align: "center" });

        doc.setTextColor(255, 255, 255);
        doc.setFontSize(14);
        doc.setFont("helvetica", "normal");
        doc.text("CBSE Class XII — Physical Education", pageWidth / 2, 95, { align: "center" });

        doc.setFontSize(48);
        doc.setFont("helvetica", "bold");
        doc.text(String(year), pageWidth / 2, 130, { align: "center" });

        doc.setFontSize(11);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(180, 180, 180);
        doc.text("Board Examination Paper", pageWidth / 2, 145, { align: "center" });
        doc.text("with Answers & Marking Scheme", pageWidth / 2, 153, { align: "center" });

        doc.setFontSize(10);
        doc.setTextColor(140, 140, 140);
        doc.text(`Total Questions: ${yearQuestions.length}`, pageWidth / 2, 175, { align: "center" });
        doc.text("Time Allowed: 3 Hours | Maximum Marks: 70", pageWidth / 2, 183, { align: "center" });

        // ────────── Questions Section ──────────
        doc.addPage();
        doc.setFillColor(255, 255, 255);
        doc.rect(0, 0, pageWidth, pageHeight, "F");
        y = margin;

        doc.setTextColor(80, 40, 160);
        doc.setFontSize(18);
        doc.setFont("helvetica", "bold");
        doc.text("QUESTION PAPER", pageWidth / 2, y, { align: "center" });
        y += 10;

        doc.setTextColor(100, 100, 100);
        doc.setFontSize(9);
        doc.setFont("helvetica", "normal");
        doc.text("Time Allowed: 3 Hours | Maximum Marks: 70", pageWidth / 2, y, { align: "center" });
        y += 10;
        drawLine();

        const renderSection = (title: string, qs: typeof yearQuestions, marksLabel: string) => {
            if (qs.length === 0) return;

            checkPage(20);
            doc.setTextColor(80, 40, 160);
            doc.setFontSize(13);
            doc.setFont("helvetica", "bold");
            doc.text(title, margin, y);
            y += 4;

            doc.setTextColor(120, 120, 120);
            doc.setFontSize(9);
            doc.setFont("helvetica", "italic");
            doc.text(marksLabel, margin, y);
            y += 7;

            qs.forEach((q, i) => {
                checkPage(25);
                doc.setTextColor(40, 40, 40);
                doc.setFontSize(10);
                doc.setFont("helvetica", "bold");
                const qNum = `Q${i + 1}.`;
                doc.text(qNum, margin, y);

                doc.setFont("helvetica", "normal");
                const lines = doc.splitTextToSize(q.question, contentWidth - 12);
                doc.text(lines, margin + 12, y);
                y += lines.length * 5 + 2;

                doc.setFontSize(8);
                doc.setTextColor(130, 130, 130);
                doc.text(`[${q.marks} Mark${q.marks > 1 ? "s" : ""}] • ${q.chapter}`, margin + 12, y);
                y += 8;
            });
        };

        renderSection("Section A — Multiple Choice Questions", mcqs, `${mcqs.length} questions × 1 mark = ${mcqs.length} marks`);
        renderSection("Section B — Short Answer Questions (2 Marks)", shorts2, `${shorts2.length} questions × 2 marks = ${shorts2.length * 2} marks`);
        renderSection("Section C — Short Answer Questions (3 Marks)", shorts3, `${shorts3.length} questions × 3 marks = ${shorts3.length * 3} marks`);
        renderSection("Section D — Case Study Questions (4 Marks)", caseStudies, `${caseStudies.length} questions × 4 marks = ${caseStudies.length * 4} marks`);
        renderSection("Section E — Long Answer Questions (5 Marks)", longs, `${longs.length} questions × 5 marks = ${longs.length * 5} marks`);

        // ────────── Answer Key & Marking Scheme ──────────
        doc.addPage();
        y = margin;

        doc.setTextColor(80, 40, 160);
        doc.setFontSize(18);
        doc.setFont("helvetica", "bold");
        doc.text("ANSWER KEY & MARKING SCHEME", pageWidth / 2, y, { align: "center" });
        y += 12;
        drawLine();

        const renderAnswerSection = (title: string, qs: typeof yearQuestions) => {
            if (qs.length === 0) return;

            checkPage(15);
            doc.setTextColor(80, 40, 160);
            doc.setFontSize(12);
            doc.setFont("helvetica", "bold");
            doc.text(title, margin, y);
            y += 8;

            qs.forEach((q, i) => {
                checkPage(30);

                doc.setTextColor(40, 40, 40);
                doc.setFontSize(10);
                doc.setFont("helvetica", "bold");
                doc.text(`Q${i + 1}. [${q.marks}M]`, margin, y);
                y += 5;

                doc.setFont("helvetica", "normal");
                doc.setFontSize(9);
                doc.setTextColor(60, 60, 60);
                const questionLines = doc.splitTextToSize(q.question, contentWidth - 5);
                doc.text(questionLines, margin + 5, y);
                y += questionLines.length * 4 + 3;

                doc.setTextColor(20, 100, 50);
                doc.setFont("helvetica", "bold");
                doc.setFontSize(9);
                doc.text("Answer:", margin + 5, y);
                y += 4;

                doc.setFont("helvetica", "normal");
                doc.setTextColor(30, 30, 30);
                const answerText = q.answer.replace(/\\n/g, "\n");
                const answerLines = doc.splitTextToSize(answerText, contentWidth - 10);
                doc.text(answerLines, margin + 10, y);
                y += answerLines.length * 4 + 3;

                // Marking note
                doc.setFontSize(8);
                doc.setTextColor(150, 100, 50);
                doc.setFont("helvetica", "italic");
                if (q.type === "MCQ") {
                    doc.text(`Award ${q.marks} mark for correct option.`, margin + 10, y);
                } else if (q.marks === 2) {
                    doc.text(`Award 1 mark for each valid point (max ${q.marks}).`, margin + 10, y);
                } else if (q.marks === 3) {
                    doc.text(`Award 1 mark per point explained with example (max ${q.marks}).`, margin + 10, y);
                } else if (q.marks === 4) {
                    doc.text(`Award 1 mark per sub-part answered correctly (max ${q.marks}).`, margin + 10, y);
                } else {
                    doc.text(`Award marks for procedure/definition (2M) + points/explanation (3M) = ${q.marks}M total.`, margin + 10, y);
                }
                y += 6;

                doc.setDrawColor(230, 230, 230);
                doc.line(margin + 5, y, pageWidth - margin - 5, y);
                y += 5;
            });
        };

        renderAnswerSection("Section A — MCQ Answers", mcqs);
        renderAnswerSection("Section B — Short Answers (2M)", shorts2);
        renderAnswerSection("Section C — Short Answers (3M)", shorts3);
        renderAnswerSection("Section D — Case Study Answers (4M)", caseStudies);
        renderAnswerSection("Section E — Long Answers (5M)", longs);

        // Footer on last page
        checkPage(15);
        y += 5;
        drawLine();
        doc.setTextColor(150, 150, 150);
        doc.setFontSize(8);
        doc.setFont("helvetica", "italic");
        doc.text("Generated by PhysEd Pro • CBSE Class XII Physical Education Archive", pageWidth / 2, y, { align: "center" });

        doc.save(`PhysEd_Pro_${year}_CBSE_Paper.pdf`);
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
