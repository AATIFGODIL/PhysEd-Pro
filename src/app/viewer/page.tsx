"use client";

import { motion } from "framer-motion";
import { questions } from "@/data/questions";
import { useMemo } from "react";

const years = [2025, 2024, 2023, 2022];

export default function SolutionsPage() {
    const yearData = useMemo(() => {
        return years.map((year) => {
            const yearQs = questions.filter((q) => q.year === year);
            const mcqs = yearQs.filter((q) => q.type === "MCQ");
            const shorts = yearQs.filter((q) => q.marks === 2);
            const mediums = yearQs.filter((q) => q.marks === 3);
            const cases = yearQs.filter((q) => q.type === "Case Study");
            const longs = yearQs.filter((q) => q.marks === 5);
            return { year, total: yearQs.length, mcqs, shorts, mediums, cases, longs, all: yearQs };
        });
    }, []);

    return (
        <div className="min-h-screen px-4 md:px-6 pt-8">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-5xl mx-auto mb-10"
            >
                <h1 className="text-2xl font-bold text-white mb-1">
                    Solution Papers
                </h1>
                <p className="text-xs text-purple-300/60">
                    Complete marking schemes & solutions for CBSE PE papers 2022–2025
                </p>
            </motion.div>

            <div className="max-w-5xl mx-auto space-y-6">
                {yearData.map(({ year, total, mcqs, shorts, mediums, cases, longs, all }, yi) => (
                    <motion.div
                        key={year}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: yi * 0.1 }}
                        className={`rounded-2xl bg-white/[0.02] border border-white/[0.06] overflow-hidden ${year === 2025 ? "animate-pulse-glow" : ""}`}
                    >
                        {/* Year header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.04]">
                            <div className="flex items-center gap-3">
                                <span className="text-2xl font-bold text-white">{year}</span>
                                {year === 2025 && (
                                    <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-fuchsia-500/20 text-white animate-pulse">
                                        Latest
                                    </span>
                                )}
                                <span className="text-xs text-purple-300/50">{total} questions</span>
                            </div>
                            <div className="flex gap-2">
                                <span className="text-[10px] px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300">
                                    📄 Marking Scheme
                                </span>
                                <span className="text-[10px] px-2.5 py-1 rounded-full bg-emerald-500/10 text-purple-300">
                                    ✓ Solutions Available
                                </span>
                            </div>
                        </div>

                        {/* Section breakdown */}
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-white/[0.02]">
                            {[
                                { label: "MCQs (1M)", count: mcqs.length, color: "text-white" },
                                { label: "Short (2M)", count: shorts.length, color: "text-white" },
                                { label: "Medium (3M)", count: mediums.length, color: "text-white" },
                                { label: "Case Study (4M)", count: cases.length, color: "text-white" },
                                { label: "Long (5M)", count: longs.length, color: "text-white" },
                            ].map((sec) => (
                                <div key={sec.label} className="p-4 bg-black text-center">
                                    <p className={`text-lg font-bold ${sec.color}`}>{sec.count}</p>
                                    <p className="text-[10px] text-purple-300/50">{sec.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* All Q&A in this paper */}
                        <div className="p-6 space-y-4 max-h-[500px] overflow-y-auto">
                            {all.map((q, i) => (
                                <div key={q.id} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                                    <div className="flex items-start gap-3">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-md bg-purple-500/15 text-[10px] font-medium text-white flex items-center justify-center">
                                            {i + 1}
                                        </span>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-[9px] px-2 py-0.5 rounded-full bg-fuchsia-500/10 text-white">
                                                    {q.marks}M • {q.type}
                                                </span>
                                                <span className="text-[9px] text-purple-300/50 truncate">{q.chapter}</span>
                                            </div>
                                            <p className="text-xs text-white leading-relaxed mb-3">
                                                {q.question}
                                            </p>
                                            <div className="p-3 rounded-lg bg-emerald-500/[0.03] border border-emerald-400/10">
                                                <p className="text-[9px] font-semibold text-emerald-400/60 mb-1 uppercase tracking-wider">
                                                    Answer / Marking Scheme
                                                </p>
                                                <p className="text-xs text-purple-300/90 leading-relaxed whitespace-pre-line">
                                                    {q.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
