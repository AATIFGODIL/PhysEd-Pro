"use client";

import { motion } from "framer-motion";
import { LiquidCard } from "@/components/LiquidCard";
import { questions } from "@/data/questions";

export default function PDFPage() {

    // Updated to include 2022-2026 as requested
    const pdfCards = [
        // 2026
        { year: 2026, type: "Sample", badge: "New Pattern", badgeColor: "bg-blue-500/20 text-gray-900 dark:text-blue-300" },

        // 2025
        { year: 2025, type: "Main", badge: "Latest Board", badgeColor: "bg-fuchsia-500/20 text-gray-900 dark:text-fuchsia-300" },
        { year: 2025, type: "Compartment", badge: "Final", badgeColor: "bg-purple-500/20 text-gray-900 dark:text-purple-300" },
        { year: 2025, type: "Sample", badge: "SQP", badgeColor: "bg-blue-500/20 text-gray-900 dark:text-blue-300" },

        // 2024
        { year: 2024, type: "Main", badge: null, badgeColor: "" },
        { year: 2024, type: "Compartment", badge: "MCQs", badgeColor: "bg-amber-500/20 text-gray-900 dark:text-amber-300" },
        { year: 2024, type: "Sample", badge: "SQP", badgeColor: "bg-blue-500/20 text-gray-900 dark:text-blue-300" },

        // 2023
        { year: 2023, type: "Main", badge: null, badgeColor: "" },
        { year: 2023, type: "Compartment", badge: null, badgeColor: "" },
        { year: 2023, type: "Sample", badge: "SQP", badgeColor: "bg-blue-500/20 text-gray-900 dark:text-blue-300" },

        // 2022
        { year: 2022, type: "Main", badge: null, badgeColor: "" },
    ];

    const handleDownload = (year: number, type: string) => {
        // Construct the filename based on the pattern in public folder
        let fileName = "";
        if (type === "Compartment") {
            fileName = `PE C ${year}.pdf`;
        } else if (type === "Sample") {
            // "PE SQP 26.pdf", "PE SQP 25.pdf" etc. -> Last 2 digits of year
            const shortYear = year.toString().slice(-2);
            fileName = `PE SQP ${shortYear}.pdf`;
        } else {
            fileName = `PE ${year} Paper.pdf`;
        }

        const link = document.createElement("a");
        link.href = `/${fileName}`; // Path relative to public folder
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

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
                    className="text-[10px] uppercase tracking-[0.3em] text-gray-500 dark:text-purple-300/70 mb-3"
                >
                    Download & Practice
                </motion.p>
                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-600 dark:from-purple-300 dark:via-fuchsia-300 dark:to-purple-400 bg-clip-text text-transparent mb-3">
                    Question Papers
                </h1>
                <p className="text-gray-500 dark:text-purple-300/80 text-sm max-w-md mx-auto font-light">
                    Official CBSE Board Papers (2022-2025) available for direct download.
                </p>
            </motion.div>

            {/* PDF Cards */}
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {pdfCards.map((card, i) => {
                    return (
                        <motion.div
                            key={`${card.year}-${card.type}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 + 0.3 }}
                        >
                            <LiquidCard glowing={card.badge === "Latest" || card.badge === "New"} className="h-full">
                                <div className="p-6 flex flex-col items-center text-center h-full justify-between">
                                    <div className="w-full">
                                        {/* Year */}
                                        <div className="flex flex-col items-center gap-2 mb-4">
                                            <span className="text-3xl font-bold text-gray-900 dark:text-white">{card.year}</span>
                                            <div className="flex flex-wrap justify-center items-center gap-1.5 min-h-[24px]">
                                                <span className={`text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full inline-flex items-center justify-center ${card.type === "Compartment" ? "bg-amber-500/10 text-amber-600 dark:text-amber-400" :
                                                    card.type === "Sample" ? "bg-blue-500/10 text-blue-600 dark:text-blue-400" :
                                                        "bg-purple-500/10 text-purple-600 dark:text-purple-300"
                                                    }`}>
                                                    {card.type} Exam
                                                </span>
                                                {card.badge && (
                                                    <span className={`text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full inline-flex items-center justify-center ${card.badgeColor} animate-pulse font-medium`}>
                                                        {card.badge}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <p className="text-[10px] text-gray-400 dark:text-purple-300/60 mb-6 italic">
                                            CBSE Official Paper
                                        </p>
                                    </div>

                                    {/* Download button */}
                                    <button
                                        onClick={() => handleDownload(card.year, card.type)}
                                        className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10 dark:from-purple-500/20 dark:to-fuchsia-500/20 border border-purple-500/20 dark:border-purple-400/20 hover:border-purple-500/40 dark:hover:border-purple-400/40 text-purple-700 dark:text-white text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 group"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:scale-110 transition-transform text-purple-600 dark:text-white">
                                            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                                            <polyline points="7 10 12 15 17 10" />
                                            <line x1="12" y1="15" x2="12" y2="3" />
                                        </svg>
                                        Download PDF
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
                <p className="text-[10px] text-gray-400 dark:text-purple-300/50">
                    Direct download links to official question papers.
                </p>
            </motion.div>
        </div>
    );
}
