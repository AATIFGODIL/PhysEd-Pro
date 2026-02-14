"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import type { Question } from "@/data/questions";
import { useQuiz } from "@/context/QuizContext";

interface QuestionCardProps {
    question: Question;
    index: number;
}

export function QuestionCard({ question, index }: QuestionCardProps) {
    const router = useRouter();
    const [showAnswer, setShowAnswer] = useState(false);

    const { bookmarks, toggleBookmark, stats, updateQuestionStat } = useQuiz();
    const isBookmarked = bookmarks.has(question.id);
    const questionStat = stats[question.id];

    // Timer logic
    const [elapsed, setElapsed] = useState(questionStat?.timeSpent || 0);
    const [timerRunning, setTimerRunning] = useState(false);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    // Sync elapsed with stats when component mounts or stats change
    useEffect(() => {
        if (questionStat?.timeSpent !== undefined) {
            setElapsed(questionStat.timeSpent);
        }
    }, [questionStat?.timeSpent]);

    // Timer interval
    useEffect(() => {
        if (timerRunning) {
            intervalRef.current = setInterval(() => {
                setElapsed((t) => {
                    const newTime = t + 1;
                    // Auto-update stats every 5 seconds or just keep local?
                    // Let's keep local and update on pause/unmount/finish to reduce writes
                    return newTime;
                });
            }, 1000);
        } else {
            if (intervalRef.current) clearInterval(intervalRef.current);
            // Update stats when timer stops
            if (elapsed > 0) {
                updateQuestionStat(question.id, { timeSpent: elapsed });
            }
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [timerRunning, question.id, updateQuestionStat]); // Removed elapsed dependency to avoid loop, handled in setter

    // Save time when unmounting if running
    useEffect(() => {
        return () => {
            if (timerRunning) {
                updateQuestionStat(question.id, { timeSpent: elapsed });
            }
        }
    }, [timerRunning, elapsed, question.id, updateQuestionStat]);


    const formatTime = (s: number) => {
        const m = Math.floor(s / 60);
        const sec = s % 60;
        return `${m.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
    };

    const toggleTimer = (e: React.MouseEvent) => {
        e.stopPropagation();
        setTimerRunning(!timerRunning);
    };

    const resetTimer = (e: React.MouseEvent) => {
        e.stopPropagation();
        setTimerRunning(false);
        setElapsed(0);
        updateQuestionStat(question.id, { timeSpent: 0 });
    };

    // Parse options if available (legacy support) or use array
    const options = useMemo(() => {
        if (question.options) return question.options;
        // ... (legacy parsing existing in component, or we can just assume new data has options)
        return question.options;
    }, [question.options]);

    const questionType = useMemo(() => {
        if (question.type === "Case Study") return "Case Study";
        if (question.marks === 5) return "Very Long";
        if (question.marks === 3 || question.marks === 4) return "Long";
        return question.type;
    }, [question]);

    const typeColor: Record<string, string> = {
        MCQ: "bg-emerald-500/20 text-white",
        Short: "bg-blue-500/20 text-white",
        Long: "bg-amber-500/20 text-white",
        "Very Long": "bg-orange-500/20 text-white",
        "Case Study": "bg-rose-500/20 text-white",
    };

    const handleCardClick = () => {
        router.push(`/test?year=${question.year}&answers=true`);
    };

    // Determine card styling based on status
    const getStatusStyles = () => {
        if (!questionStat?.attempted) {
            if (isBookmarked) {
                return "bg-blue-500/[0.03] border-blue-400/20 hover:border-blue-400/40 dark:bg-blue-400/[0.03]";
            }
            return "bg-gray-100 dark:bg-white/[0.03] border-gray-200 dark:border-white/[0.08] hover:border-purple-500/30 dark:hover:border-purple-400/20";
        }

        // Subjective questions (Non-MCQ) get very slight yellow hint
        if (question.type !== "MCQ") {
            return "bg-amber-500/[0.03] border-amber-500/20 hover:border-amber-500/40";
        }

        if (questionStat.correct) return "bg-emerald-500/[0.08] border-emerald-500/30 hover:border-emerald-500/50";
        return "bg-red-500/[0.08] border-red-500/30 hover:border-red-500/50";
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onClick={handleCardClick}
            className={`relative rounded-2xl backdrop-blur-[24px] border overflow-hidden cursor-pointer transition-colors ${getStatusStyles()}`}
        >
            <div className="p-5">
                {/* Header badges + actions */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-purple-500/10 dark:bg-purple-500/20 text-purple-700 dark:text-white">
                        {question.year}
                    </span>
                    <span
                        className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${typeColor[questionType] || "bg-purple-500/20 text-white"}`}
                    >
                        {questionType}
                    </span>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-fuchsia-500/10 dark:bg-fuchsia-500/15 text-fuchsia-700 dark:text-white">
                        {question.marks} {question.marks === 1 ? "Mark" : "Marks"}
                    </span>
                    <span className="text-[10px] text-purple-600/50 dark:text-purple-300/50 ml-auto hidden md:inline">
                        {question.chapter}
                    </span>

                    {/* Timer */}
                    <div className="flex items-center gap-1.5 ml-2" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                if (!timerRunning && elapsed > 0) { setElapsed(0); return; }
                                setTimerRunning(!timerRunning);
                            }}
                            className="flex items-center gap-1 text-[10px] px-2 py-1 rounded-full bg-gray-200 dark:bg-white/[0.04] border border-gray-300 dark:border-white/[0.06] text-purple-600/70 dark:text-purple-300/70 hover:text-purple-800 dark:hover:text-purple-300/90 transition-colors"
                        >
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                            <span className={timerRunning ? "animate-timer-pulse text-emerald-600 dark:text-emerald-400" : ""}>
                                {formatTime(elapsed)}
                            </span>
                        </button>
                        {elapsed > 0 && !timerRunning && (
                            <button
                                onClick={(e) => { e.stopPropagation(); setElapsed(0); }}
                                className="text-[9px] px-1.5 py-0.5 rounded text-purple-500/60 dark:text-purple-300/60 hover:text-purple-700 dark:hover:text-purple-300/80"
                            >
                                ↺
                            </button>
                        )}
                    </div>

                    {/* Bookmark */}
                    <button
                        onClick={(e) => { e.stopPropagation(); toggleBookmark(question.id); }}
                        className={`p-1.5 rounded-lg transition-all ${isBookmarked ? "text-blue-500 dark:text-blue-400 bg-blue-500/10" : "text-purple-400/50 dark:text-purple-300/50 hover:text-blue-500/60 dark:hover:text-blue-400/60"}`}
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill={isBookmarked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                        </svg>
                    </button>
                </div>

                {/* Question number + text */}
                <div className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-purple-500/10 dark:bg-purple-500/15 flex items-center justify-center text-sm font-semibold text-purple-700 dark:text-white">
                        {index + 1}
                    </span>
                    <p className="text-sm text-gray-900 dark:text-white leading-relaxed flex-1">
                        {question.question}
                    </p>
                </div>

                {question.imageUrl && (
                    <div className="mt-4 mb-2 ml-10 rounded-xl overflow-hidden border border-gray-200 dark:border-white/[0.1] bg-gray-50 dark:bg-white/[0.02]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={question.imageUrl}
                            alt="Question Image"
                            className="w-full h-auto max-h-[300px] object-contain mx-auto"
                        />
                    </div>
                )}



                {/* Topic tag */}
                <div className="mt-3 ml-10">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-700 dark:text-purple-300/90 border border-indigo-400/10">
                        {question.topic}
                    </span>
                </div>

                {/* Show/Hide answer button */}
                <div className="mt-4 ml-10" onClick={(e) => e.stopPropagation()}>
                    <button
                        onClick={(e) => { e.stopPropagation(); setShowAnswer(!showAnswer); }}
                        className="text-xs font-medium text-purple-600 dark:text-purple-300 hover:text-purple-900 dark:hover:text-white transition-colors flex items-center gap-1.5"
                    >
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`transition-transform duration-300 ${showAnswer ? "rotate-180" : ""}`}
                        >
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                        {showAnswer ? "Hide Answer" : "Show Answer"}
                    </button>
                </div>

                {/* Answer */}
                <AnimatePresence>
                    {showAnswer && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="mt-3 ml-10 p-4 rounded-xl bg-purple-500/[0.04] border border-purple-400/10">
                                <p className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400/70 mb-2 uppercase tracking-wider">
                                    Answer & Solution
                                </p>
                                <p className="text-sm text-gray-800 dark:text-white leading-relaxed whitespace-pre-line">
                                    {question.answer}
                                </p>
                                <p className="text-[10px] text-purple-400/50 dark:text-purple-300/50 mt-3">
                                    Source: {question.source}
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}
