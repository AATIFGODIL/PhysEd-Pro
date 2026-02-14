"use client";

import { useState, useMemo, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { questions, chapters } from "@/data/questions";
import { QuestionCard } from "@/components/QuestionCard";

function ChaptersContent() {
    const searchParams = useSearchParams();
    const initialChapter = searchParams.get("chapter") || null;

    const [selectedChapter, setSelectedChapter] = useState<string | null>(
        initialChapter
    );
    const [yearFilter, setYearFilter] = useState<number | null>(null);
    const [marksFilter, setMarksFilter] = useState<number | null>(null);

    const filteredQuestions = useMemo(() => {
        return questions.filter((q) => {
            if (selectedChapter && q.chapter !== selectedChapter) return false;
            if (yearFilter && q.year !== yearFilter) return false;
            if (marksFilter && q.marks !== marksFilter) return false;
            return true;
        });
    }, [selectedChapter, yearFilter, marksFilter]);

    const topics = useMemo(() => {
        if (!selectedChapter) return [];
        const topicSet = new Set(
            questions
                .filter((q) => q.chapter === selectedChapter)
                .map((q) => q.topic)
        );
        return Array.from(topicSet);
    }, [selectedChapter]);

    return (
        <div className="min-h-screen flex">
            {/* Sidebar */}
            <motion.aside
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", damping: 20, stiffness: 100 }}
                className="hidden lg:block w-72 flex-shrink-0 sticky top-0 h-screen overflow-y-auto border-r border-gray-200 dark:border-white/[0.04]"
            >
                <div className="p-5">
                    <h2 className="text-xs uppercase tracking-[0.2em] bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-700 dark:from-purple-300 dark:via-fuchsia-300 dark:to-purple-400 bg-clip-text text-transparent mb-5">
                        Chapters
                    </h2>

                    <div className="space-y-1">
                        <button
                            onClick={() => setSelectedChapter(null)}
                            className={`w-full text-left px-3 py-2.5 rounded-xl text-xs transition-all border ${selectedChapter === null
                                ? "bg-purple-100 dark:bg-purple-500/10 text-purple-900 dark:text-white border-purple-200 dark:border-purple-400/15"
                                : "text-gray-600 dark:text-purple-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/[0.03] border-transparent"
                                }`}
                        >
                            All Chapters
                        </button>
                        {chapters.map((ch, i) => {
                            const count = questions.filter((q) => q.chapter === ch).length;
                            return (
                                <button
                                    key={ch}
                                    onClick={() => setSelectedChapter(ch === selectedChapter ? null : ch)}
                                    className={`w-full text-left px-3 py-2.5 rounded-xl text-xs transition-all flex items-center justify-between border ${selectedChapter === ch
                                        ? "bg-purple-100 dark:bg-purple-500/10 text-purple-900 dark:text-white border-purple-200 dark:border-purple-400/15"
                                        : "text-gray-600 dark:text-purple-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/[0.03] border-transparent"
                                        }`}
                                >
                                    <span className="flex items-center gap-2 min-w-0">
                                        <span className="flex-shrink-0 w-5 h-5 rounded-md bg-purple-100 dark:bg-purple-500/10 text-[10px] flex items-center justify-center bg-gradient-to-r from-purple-600 to-fuchsia-600 dark:from-purple-300 dark:to-fuchsia-300 bg-clip-text text-transparent font-semibold">
                                            {i + 1}
                                        </span>
                                        <span className="truncate">{ch}</span>
                                    </span>
                                    <span className="text-[10px] text-gray-400 dark:text-purple-300/70 flex-shrink-0 ml-2 font-medium">
                                        {count}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {selectedChapter && topics.length > 0 && (
                        <div className="mt-6">
                            <h3 className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-purple-300/40 mb-3">
                                Topics
                            </h3>
                            <div className="flex flex-wrap gap-1.5">
                                {topics.map((topic) => (
                                    <span
                                        key={topic}
                                        className="text-[9px] px-2 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/8 text-indigo-700 dark:text-purple-300/80 border border-indigo-100 dark:border-indigo-400/8"
                                    >
                                        {topic}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </motion.aside>

            {/* Main content */}
            <div className="flex-1 px-4 md:px-6 pt-8">
                <div className="lg:hidden mb-6">
                    <select
                        value={selectedChapter || ""}
                        onChange={(e) => setSelectedChapter(e.target.value || null)}
                        className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06] text-gray-900 dark:text-purple-300 text-sm outline-none focus:border-purple-400/20"
                    >
                        <option value="">All Chapters</option>
                        {chapters.map((ch) => (
                            <option key={ch} value={ch}>
                                {ch}
                            </option>
                        ))}
                    </select>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6"
                >
                    <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                        {selectedChapter || "All Chapters"}
                    </h1>
                    <p className="text-[11px] text-gray-500 dark:text-purple-300/50 mt-1">
                        {filteredQuestions.length} questions found
                    </p>
                </motion.div>

                <div className="flex flex-wrap gap-2 mb-6">
                    <div className="flex items-center gap-1.5 rounded-xl bg-gray-100 dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06] px-3 py-2">
                        <span className="text-[11px] text-gray-500 dark:text-purple-300/50">Year:</span>
                        {[2025, 2024, 2023, 2022].map((y) => (
                            <button
                                key={y}
                                onClick={() => setYearFilter(y === yearFilter ? null : y)}
                                className={`text-[11px] px-2 py-0.5 rounded-full transition-all ${yearFilter === y
                                    ? "bg-purple-500/20 text-purple-700 dark:text-white"
                                    : "bg-white dark:bg-white/[0.04] text-gray-500 dark:text-purple-300/50 hover:text-gray-900 dark:hover:text-purple-300/70"
                                    }`}
                            >
                                {y}
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center gap-1.5 rounded-xl bg-gray-100 dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06] px-3 py-2">
                        <span className="text-[11px] text-gray-500 dark:text-purple-300/50">Marks:</span>
                        {[1, 2, 3, 4, 5].map((m) => (
                            <button
                                key={m}
                                onClick={() => setMarksFilter(m === marksFilter ? null : m)}
                                className={`text-[11px] px-2 py-0.5 rounded-full transition-all ${marksFilter === m
                                    ? "bg-fuchsia-100 dark:bg-fuchsia-500/20 text-fuchsia-700 dark:text-white"
                                    : "bg-white dark:bg-white/[0.04] text-gray-500 dark:text-purple-300/50 hover:text-gray-900 dark:hover:text-purple-300/70"
                                    }`}
                            >
                                {m}M
                            </button>
                        ))}
                    </div>
                </div>

                <div className="space-y-3 pb-16">
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
        </div>
    );
}

export default function ChaptersPage() {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen flex items-center justify-center">
                    <p className="text-purple-300/50 text-sm">Loading...</p>
                </div>
            }
        >
            <ChaptersContent />
        </Suspense>
    );
}
