"use client";

import { useState, useMemo, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { questions } from "@/data/questions";
import { QuestionCard } from "@/components/QuestionCard";
import { LiquidCard } from "@/components/LiquidCard";
import Link from "next/link";

const years = [2025, 2024, 2023, 2022];

function YearlyPageContent() {
    const searchParams = useSearchParams();
    const initialYear = searchParams.get("year")
        ? parseInt(searchParams.get("year")!)
        : null;

    const [selectedYear, setSelectedYear] = useState<number | null>(initialYear);
    const [marksFilter, setMarksFilter] = useState<number | null>(null);
    const [typeFilter, setTypeFilter] = useState<string | null>(null);

    const filteredQuestions = useMemo(() => {
        return questions.filter((q) => {
            if (selectedYear && q.year !== selectedYear) return false;
            if (marksFilter && q.marks !== marksFilter) return false;
            if (typeFilter && q.type !== typeFilter) return false;
            return true;
        });
    }, [selectedYear, marksFilter, typeFilter]);

    return (
        <div className="min-h-screen px-4 md:px-6 pt-8">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-6xl mx-auto mb-8"
            >
                <h1 className="text-2xl font-bold text-white mb-1">
                    Previous Year Questions
                </h1>
                <p className="text-xs text-purple-300/60">
                    Chapter-wise questions with solutions • Years 2022–2025
                </p>
            </motion.div>

            {/* Take Test Cards */}
            <div className="max-w-6xl mx-auto mb-8">
                <p className="text-[10px] uppercase tracking-wider text-purple-300/50 mb-3">Take Full Test (3 Hours, With Solutions)</p>
                <div className="flex gap-3 overflow-x-auto pb-2">
                    {[2025, 2024, 2023].map((year, i) => (
                        <Link key={year} href={`/test?year=${year}`}>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.03 }}
                                className="flex-shrink-0 px-5 py-3 rounded-xl backdrop-blur-sm bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10 border border-purple-400/15 hover:border-purple-400/30 transition-all flex items-center gap-3 cursor-pointer"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-300/90">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                                <span className="text-sm font-medium text-white">{year} Test</span>
                                <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-amber-500/10 text-purple-300">
                                    3hr
                                </span>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Download PDF Cards */}
            <div className="max-w-6xl mx-auto mb-8">
                <p className="text-[10px] uppercase tracking-wider text-purple-300/50 mb-3">Download Papers (Questions + Answers + Marking Scheme)</p>
                <div className="flex gap-3 overflow-x-auto pb-2">
                    {[2025, 2024, 2023].map((year, i) => (
                        <Link key={year} href="/pdf">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.03 }}
                                className="flex-shrink-0 px-5 py-3 rounded-xl backdrop-blur-sm bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10 border border-purple-400/15 hover:border-purple-400/30 transition-all flex items-center gap-3 cursor-pointer"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-300/90">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                    <polyline points="14 2 14 8 20 8" />
                                    <path d="M12 18v-6" />
                                    <path d="M9 15l3 3 3-3" />
                                </svg>
                                <span className="text-sm font-medium text-white">{year} PDF</span>
                                <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-purple-300">
                                    PDF
                                </span>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Year selector */}
            <div className="max-w-6xl mx-auto mb-6">
                <div className="flex gap-2 overflow-x-auto pb-2">
                    <button
                        onClick={() => setSelectedYear(null)}
                        className={`flex-shrink-0 px-4 py-2.5 rounded-xl text-sm font-medium transition-all border ${selectedYear === null
                            ? "bg-purple-500/15 border-purple-400/25 text-white"
                            : "bg-white/[0.03] border-white/[0.06] text-purple-300/60 hover:border-white/[0.12]"
                            }`}
                    >
                        All Years
                    </button>
                    {years.map((year) => (
                        <button
                            key={year}
                            onClick={() => setSelectedYear(year === selectedYear ? null : year)}
                            className={`relative flex-shrink-0 px-4 py-2.5 rounded-xl text-sm font-medium transition-all border ${selectedYear === year
                                ? "bg-purple-500/15 border-purple-400/25 text-white"
                                : "bg-white/[0.03] border-white/[0.06] text-purple-300/60 hover:border-white/[0.12]"
                                } ${year === 2025 ? "animate-pulse-glow" : ""}`}
                        >
                            {year}
                            {year === 2025 && (
                                <span className="absolute -top-1.5 -right-1.5 text-[8px] px-1.5 py-0.5 rounded-full bg-fuchsia-500/25 text-white">
                                    NEW
                                </span>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Filter bar */}
            <div className="max-w-6xl mx-auto mb-6">
                <div className="flex flex-wrap gap-2">
                    <div className="flex items-center gap-1.5 rounded-xl bg-white/[0.03] border border-white/[0.06] px-3 py-2">
                        <span className="text-[11px] text-purple-300/80 mr-1">Marks:</span>
                        {[1, 2, 3, 4, 5].map((m) => (
                            <button
                                key={m}
                                onClick={() => setMarksFilter(m === marksFilter ? null : m)}
                                className={`text-[11px] px-2 py-0.5 rounded-full transition-all ${marksFilter === m
                                    ? "bg-fuchsia-500/20 text-white"
                                    : "bg-white/[0.04] text-purple-300/80 hover:text-white"
                                    }`}
                            >
                                {m}M
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-1.5 rounded-xl bg-white/[0.03] border border-white/[0.06] px-3 py-2">
                        <span className="text-[11px] text-purple-300/80 mr-1">Type:</span>
                        {["MCQ", "Short", "Long", "Case Study"].map((t) => (
                            <button
                                key={t}
                                onClick={() => setTypeFilter(t === typeFilter ? null : t)}
                                className={`text-[11px] px-2 py-0.5 rounded-full transition-all ${typeFilter === t
                                    ? "bg-purple-500/20 text-white"
                                    : "bg-white/[0.04] text-purple-300/80 hover:text-white"
                                    }`}
                            >
                                {t}
                            </button>
                        ))}
                    </div>

                    {(marksFilter || typeFilter || selectedYear) && (
                        <button
                            onClick={() => {
                                setMarksFilter(null);
                                setTypeFilter(null);
                                setSelectedYear(null);
                            }}
                            className="text-[11px] px-3 py-2 rounded-xl bg-red-500/8 text-purple-300/90 hover:bg-red-500/15 transition-colors"
                        >
                            Clear All
                        </button>
                    )}
                </div>
            </div>

            {/* Stats */}
            <div className="max-w-6xl mx-auto mb-6">
                <LiquidCard className="!rounded-xl">
                    <div className="flex items-center gap-6 px-5 py-3">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-400" />
                            <span className="text-[11px] text-purple-300/70">
                                {filteredQuestions.length} questions
                            </span>
                        </div>
                        <div className="text-[11px] text-purple-300/50">
                            MCQ: {filteredQuestions.filter((q) => q.type === "MCQ").length} •
                            Short: {filteredQuestions.filter((q) => q.type === "Short").length} •
                            Long: {filteredQuestions.filter((q) => q.type === "Long").length} •
                            Case Study: {filteredQuestions.filter((q) => q.type === "Case Study").length}
                        </div>
                    </div>
                </LiquidCard>
            </div>

            {/* Questions */}
            <div className="max-w-6xl mx-auto space-y-3">
                <AnimatePresence mode="popLayout">
                    {filteredQuestions.map((q, i) => (
                        <QuestionCard key={q.id} question={q} index={i} />
                    ))}
                </AnimatePresence>

                {filteredQuestions.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <p className="text-purple-300/50 text-sm">
                            No questions match the selected filters.
                        </p>
                    </motion.div>
                )}
            </div>
        </div>
    );
}

export default function YearlyPage() {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen flex items-center justify-center">
                    <p className="text-purple-300/50 text-sm">Loading...</p>
                </div>
            }
        >
            <YearlyPageContent />
        </Suspense>
    );
}
