"use client";

import { motion } from "framer-motion";
import { LiquidCard } from "@/components/LiquidCard";
import { questions } from "@/data/questions";

export default function PDFPage() {

    // Updated to include 2022-2025 as requested
    const pdfCards = [
        { year: 2025, badge: "Latest", badgeColor: "bg-fuchsia-500/20 text-fuchsia-300" },
        { year: 2024, badge: null, badgeColor: "" },
        { year: 2023, badge: null, badgeColor: "" },
        { year: 2022, badge: null, badgeColor: "" },
    ];

    const handleDownload = (year: number) => {
        // Construct the filename based on the pattern in public folder
        // Files are named "PE 2022 Paper.pdf", "PE 2023 Paper.pdf", etc.
        const fileName = `PE ${year} Paper.pdf`;
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
                    const yearQs = questions.filter((q) => q.year === card.year);
                    // Minimal stats as these are just static files now, but we can still show metadata if available
                    // If 2022 is not in questions.ts, this might show 0 questions.
                    // Assuming existing data covers 2022? Yes, viewer worked for it.

                    return (
                        <motion.div
                            key={card.year}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 + 0.3 }}
                        >
                            <LiquidCard glowing={card.year === 2025} className="h-full">
                                <div className="p-6 flex flex-col items-center text-center h-full justify-between">
                                    <div>
                                        {/* Year */}
                                        <div className="flex flex-col items-center gap-2 mb-4">
                                            <span className="text-3xl font-bold text-gray-900 dark:text-white">{card.year}</span>
                                            {card.badge && (
                                                <span className={`text-[9px] uppercase tracking-wider px-2 py-1 rounded-full ${card.badgeColor} animate-pulse`}>
                                                    {card.badge}
                                                </span>
                                            )}
                                        </div>

                                        <p className="text-[10px] text-gray-400 dark:text-purple-300/60 mb-6">
                                            Official Board Paper
                                        </p>
                                    </div>

                                    {/* Download button */}
                                    <button
                                        onClick={() => handleDownload(card.year)}
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
