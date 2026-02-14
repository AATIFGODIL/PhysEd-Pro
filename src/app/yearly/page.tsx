"use client";

import { useState, useMemo, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { questions } from "@/data/questions";
import { QuestionCard } from "@/components/QuestionCard";
import { LiquidCard } from "@/components/LiquidCard";
import Link from "next/link";

const years = [2025, 2024, 2023, 2022];

import { useQuiz } from "@/context/QuizContext";

function YearlyPageContent() {
    const searchParams = useSearchParams();
    const initialYear = searchParams.get("year")
        ? parseInt(searchParams.get("year")!)
        : null;

    const [selectedYear, setSelectedYear] = useState<number | null>(initialYear);
    const [marksFilter, setMarksFilter] = useState<number | null>(null);
    const [typeFilter, setTypeFilter] = useState<string | null>(null);
    const [showBookmarksOnly, setShowBookmarksOnly] = useState(false);

    const { bookmarks, stats } = useQuiz();

    const filteredQuestions = useMemo(() => {
        return questions.filter((q) => {
            if (showBookmarksOnly && !bookmarks.has(q.id)) return false;
            if (selectedYear && q.year !== selectedYear) return false;

            // Logic for Type Filter
            if (typeFilter) {
                if (typeFilter === "Very Long") {
                    if (q.marks !== 5) return false;
                } else if (typeFilter === "Long") {
                    // Long is 3 or 4 marks, but NOT Case Study (which has its own type in data usually, but let's be safe)
                    if ((q.marks !== 3 && q.marks !== 4) || q.type === "Case Study") return false;
                } else {
                    // MCQ, Short, Case Study
                    if (q.type !== typeFilter) return false;
                }
            } else {
                if (marksFilter && q.marks !== marksFilter) return false;
            }
            return true;
        });
    }, [selectedYear, marksFilter, typeFilter, showBookmarksOnly, bookmarks]);

    return (
        <div className="min-h-screen px-4 md:px-6 pt-8">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-6xl mx-auto mb-8"
            >
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    Previous Year Questions
                </h1>
                <p className="text-xs text-purple-600/60 dark:text-purple-300/60">
                    Chapter-wise questions with solutions • Years 2022–2025
                </p>
            </motion.div>

            {/* Take Test Cards */}
            <div className="max-w-6xl mx-auto mb-8">
                <p className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-purple-300/50 mb-3">Take Full Test (3 Hours, With Solutions)</p>
                <div className="flex gap-3 overflow-x-auto pb-2">
                    {[2025, 2024, 2023].map((year, i) => (
                        <Link key={year} href={`/test?year=${year}`}>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.03 }}
                                className="flex-shrink-0 px-5 py-3 rounded-xl backdrop-blur-sm bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-400/15 hover:border-purple-400/30 transition-all duration-500 flex items-center gap-3 cursor-pointer"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-600 dark:text-purple-300/90">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                                <span className="text-sm font-medium text-gray-900 dark:text-white">{year} Test</span>
                                <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-purple-300">
                                    3hr
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
                            ? "bg-purple-500/15 border-purple-400/25 text-purple-700 dark:text-white"
                            : "bg-gray-100 dark:bg-white/[0.03] border-gray-200 dark:border-white/[0.06] text-gray-500 dark:text-purple-300/60 hover:border-gray-300 dark:hover:border-white/[0.12]"
                            }`}
                    >
                        All Years
                    </button>
                    {years.map((year) => (
                        <button
                            key={year}
                            onClick={() => setSelectedYear(year === selectedYear ? null : year)}
                            className={`relative flex-shrink-0 px-4 py-2.5 rounded-xl text-sm font-medium transition-all border ${selectedYear === year
                                ? "bg-purple-500/15 border-purple-400/25 text-purple-700 dark:text-white"
                                : "bg-gray-100 dark:bg-white/[0.03] border-gray-200 dark:border-white/[0.06] text-gray-500 dark:text-purple-300/60 hover:border-gray-300 dark:hover:border-white/[0.12]"
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


                    <div className="flex items-center gap-1.5 rounded-xl bg-gray-100 dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06] px-3 py-2">
                        <span className="text-[11px] text-gray-500 dark:text-purple-300/80 mr-1">Type:</span>
                        {["MCQ", "Short", "Long", "Very Long", "Case Study"].map((t) => (
                            <button
                                key={t}
                                onClick={() => setTypeFilter(t === typeFilter ? null : t)}
                                className={`text-[11px] px-2 py-0.5 rounded-full transition-all ${typeFilter === t
                                    ? "bg-purple-500/20 text-purple-700 dark:text-white"
                                    : "bg-white dark:bg-white/[0.04] text-gray-500 dark:text-purple-300/80 hover:text-gray-900 dark:hover:text-white"
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
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 px-5 py-4">
                        {/* Left: Quick Counts */}
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <div className="p-1.5 rounded bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                                <span className="text-xs font-medium text-gray-900 dark:text-white">
                                    {Object.values(stats).filter(s => s.correct).length} Correct
                                </span>
                                <span className="text-[10px] text-gray-400 dark:text-purple-300/40">/ {Object.values(stats).filter(s => s.attempted).length} Attempted</span>
                            </div>
                            <div className="text-[10px] text-gray-400 dark:text-purple-300/50 flex gap-2">
                                <span>Avg Time: {
                                    (() => {
                                        const attempted = Object.values(stats).filter(s => s.timeSpent > 0);
                                        if (attempted.length === 0) return "0s";
                                        const total = attempted.reduce((acc, curr) => acc + curr.timeSpent, 0);
                                        return Math.round(total / attempted.length) + "s";
                                    })()
                                }</span>
                            </div>
                        </div>

                        {/* Right: Filters */}
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setShowBookmarksOnly(!showBookmarksOnly)}
                                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all text-xs font-medium ${showBookmarksOnly
                                    ? "bg-amber-100 dark:bg-amber-500/10 border-amber-300 dark:border-amber-500/30 text-amber-700 dark:text-amber-300"
                                    : "bg-white dark:bg-white/[0.04] border-gray-200 dark:border-white/[0.08] text-gray-500 dark:text-purple-300/70 hover:text-gray-900 dark:hover:text-white"}`}
                            >
                                <svg width="12" height="12" viewBox="0 0 24 24" fill={showBookmarksOnly ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                </svg>
                                Bookmarked ({bookmarks.size})
                            </button>
                            <div className="text-[11px] text-gray-400 dark:text-purple-300/50">
                                {filteredQuestions.length} Questions
                            </div>
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
