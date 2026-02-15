"use client";

import { useState, useMemo, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { questions } from "@/data/questions";
import { QuestionCard } from "@/components/QuestionCard";
import { LiquidCard } from "@/components/LiquidCard";
import Link from "next/link";

const years = [2026, 2025, 2024, 2023, 2022];

import { useQuiz } from "@/context/QuizContext";

import { useRouter } from "next/navigation";

function YearlyPageContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const initialYear = searchParams.get("year")
        ? parseInt(searchParams.get("year")!)
        : null;

    const [selectedYear, setSelectedYear] = useState<number | null>(initialYear);
    const [marksFilter, setMarksFilter] = useState<number | null>(null);
    const [typeFilter, setTypeFilter] = useState<string | null>(null);
    const [examTypeFilter, setExamTypeFilter] = useState<'Main' | 'Compartment' | 'Sample' | null>(null);
    const [statusFilter, setStatusFilter] = useState<'attempted' | null>(null);
    const [showBookmarksOnly, setShowBookmarksOnly] = useState(false);

    const { bookmarks, stats } = useQuiz();

    const filteredQuestions = useMemo(() => {
        return questions.filter((q) => {
            if (showBookmarksOnly && !bookmarks.has(q.id)) return false;
            if (selectedYear && q.year !== selectedYear) return false;

            // Simple Status Filter Logic
            if (statusFilter === 'attempted') {
                const stat = stats[q.id];
                if (!stat?.attempted) return false;
            }

            // Logic for Exam Type
            if (examTypeFilter) {
                const lowerSource = q.source.toLowerCase();
                const isCompartment = lowerSource.includes("compartment");
                const isSample = lowerSource.includes("sample");

                if (examTypeFilter === 'Compartment' && !isCompartment) return false;
                if (examTypeFilter === 'Sample' && !isSample) return false;
                if (examTypeFilter === 'Main' && (isCompartment || isSample)) return false;
            }

            // Logic for Type Filter
            if (typeFilter) {
                if (typeFilter === "Very Long") {
                    if (q.marks !== 5) return false;
                } else if (typeFilter === "Long") {
                    if ((q.marks !== 3 && q.marks !== 4) || q.type === "Case Study") return false;
                } else {
                    if (q.type !== typeFilter) return false;
                }
            } else {
                if (marksFilter && q.marks !== marksFilter) return false;
            }
            return true;
        });
    }, [selectedYear, marksFilter, typeFilter, examTypeFilter, showBookmarksOnly, statusFilter, bookmarks, stats]);

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
                    Chapter-wise questions with solutions • Years 2022–2026
                </p>
            </motion.div>

            {/* Take Test Cards */}
            <div className="max-w-6xl mx-auto mb-8">
                <p className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-purple-300/50 mb-3">Take Full Test (With Solutions)</p>
                <div className="flex flex-col gap-4">
                    {/* Main Board Exams */}
                    <div className="flex gap-3 overflow-x-auto pb-2">
                        {[2025, 2024, 2023].map((year, i) => (
                            <Link key={`${year}-main`} href={`/test?year=${year}&type=Main`}>
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
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-gray-900 dark:text-white">{year} Board Exam</span>
                                        <span className="text-[9px] text-purple-600/60 dark:text-purple-300/50">Full Length Test</span>
                                    </div>
                                    <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-purple-300">
                                        3hr
                                    </span>
                                </motion.div>
                            </Link>
                        ))}
                    </div>

                    {/* Compartment Exams */}
                    <div className="flex gap-3 overflow-x-auto pb-2">
                        {[2025, 2024, 2023].map((year, i) => (
                            <Link key={`${year}-comp`} href={`/test?year=${year}&type=Compartment`}>
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: (i + 3) * 0.1 }}
                                    whileHover={{ scale: 1.03 }}
                                    className="flex-shrink-0 px-5 py-3 rounded-xl backdrop-blur-sm bg-amber-50/50 dark:bg-amber-500/5 border border-amber-200/50 dark:border-amber-400/10 hover:border-amber-400/30 transition-all duration-500 flex items-center gap-3 cursor-pointer"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-600 dark:text-amber-400/90">
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                    </svg>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-gray-900 dark:text-white">{year} Compartment</span>
                                        <span className="text-[9px] text-amber-600/60 dark:text-amber-400/50">Practice Test</span>
                                    </div>
                                    <span className={`text-[9px] px-1.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-300`}>
                                        3hr
                                    </span>
                                </motion.div>
                            </Link>
                        ))}
                    </div>

                    {/* Sample Papers */}
                    <div className="flex gap-3 overflow-x-auto pb-2">
                        {[2026, 2025, 2024, 2023].map((year, i) => (
                            <Link key={`${year}-sample`} href={`/test?year=${year}&type=Sample`}>
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: (i + 6) * 0.1 }}
                                    whileHover={{ scale: 1.03 }}
                                    className="flex-shrink-0 px-5 py-3 rounded-xl backdrop-blur-sm bg-blue-50/50 dark:bg-blue-500/5 border border-blue-200/50 dark:border-blue-400/10 hover:border-blue-400/30 transition-all duration-500 flex items-center gap-3 cursor-pointer"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-600 dark:text-blue-400/90">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                        <polyline points="14 2 14 8 20 8"></polyline>
                                        <line x1="16" y1="13" x2="8" y2="13"></line>
                                        <line x1="16" y1="17" x2="8" y2="17"></line>
                                        <polyline points="10 9 9 9 8 9"></polyline>
                                    </svg>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-gray-900 dark:text-white">{year} Sample Paper</span>
                                        <span className="text-[9px] text-blue-600/60 dark:text-blue-400/50">Official SQP</span>
                                    </div>
                                    <span className={`text-[9px] px-1.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-300`}>
                                        3hr
                                    </span>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
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
                                } ${year === 2026 ? "animate-pulse-glow" : ""}`}
                        >
                            {year}
                            {year === 2026 && (
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

                    <div className="flex items-center gap-1.5 rounded-xl bg-gray-100 dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06] px-3 py-2">
                        <span className="text-[11px] text-gray-500 dark:text-purple-300/80 mr-1">Exam:</span>
                        {["Main", "Compartment", "Sample"].map((e) => (
                            <button
                                key={e}
                                onClick={() => setExamTypeFilter(e === examTypeFilter ? null : e as any)}
                                className={`text-[11px] px-2 py-0.5 rounded-full transition-all ${examTypeFilter === e
                                    ? "bg-fuchsia-500/20 text-fuchsia-700 dark:text-white"
                                    : "bg-white dark:bg-white/[0.04] text-gray-500 dark:text-purple-300/80 hover:text-gray-900 dark:hover:text-white"
                                    }`}
                            >
                                {e}
                            </button>
                        ))}
                    </div>

                    {/* Status Filters Display (Optional, or integrated into clear all) */}
                    {statusFilter && (
                        <div className="flex items-center gap-1.5 rounded-xl bg-purple-500/10 border border-purple-500/20 px-3 py-2">
                            <span className="text-[11px] text-purple-700 dark:text-purple-300">
                                Showing: <span className="font-bold uppercase">{statusFilter}</span>
                            </span>
                            <button onClick={() => setStatusFilter(null)} className="ml-1 text-purple-500 hover:text-purple-700">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                        </div>
                    )}


                    {(marksFilter || typeFilter || selectedYear || statusFilter || examTypeFilter) && (
                        <button
                            onClick={() => {
                                setMarksFilter(null);
                                setTypeFilter(null);
                                setSelectedYear(null);
                                setStatusFilter(null);
                                setExamTypeFilter(null);
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
                <div onClick={() => setStatusFilter(prev => prev === 'attempted' ? null : 'attempted')}>
                    <LiquidCard className={`!rounded-xl cursor-pointer transition-all ${statusFilter === 'attempted' ? 'ring-2 ring-purple-500/50' : 'hover:ring-1 hover:ring-purple-500/30'}`}>
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 px-5 py-4">
                            {/* Left: Quick Counts */}
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-2 px-2 py-1 rounded-lg">
                                        <div className="p-1 rounded bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                                        </div>
                                        <span className="text-xs font-medium text-gray-900 dark:text-white">
                                            {Object.values(stats).filter(s => s.correct).length}
                                        </span>
                                        <span className="text-[10px] text-gray-400 dark:text-purple-300/40 uppercase tracking-wide">Correct</span>
                                    </div>

                                    <div className="w-px h-4 bg-white/10 mx-1" />

                                    <div className="flex items-center gap-1 text-xs text-gray-400 dark:text-purple-300/40 transition-colors">
                                        <span>/ {Object.values(stats).filter(s => s.attempted).length} Attempted</span>
                                    </div>
                                </div>

                                <div className="text-[10px] text-gray-400 dark:text-purple-300/50 flex gap-2 mt-1">
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
                            <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
                                <button
                                    onClick={() => setShowBookmarksOnly(!showBookmarksOnly)}
                                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all text-xs font-medium ${showBookmarksOnly
                                        ? "bg-blue-100 dark:bg-blue-500/10 border-blue-300 dark:border-blue-500/30 text-blue-700 dark:text-blue-300"
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
            </div>

            {/* Questions */}
            <div className="max-w-6xl mx-auto space-y-3">
                <AnimatePresence mode="popLayout">
                    {filteredQuestions.map((q, i) => (
                        <QuestionCard
                            key={q.id}
                            question={q}
                            index={i}
                            onClick={() => router.push(`/test?year=${q.year}&questionId=${q.id}&mode=practice`)}
                        />
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
