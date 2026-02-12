"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import type { Question } from "@/data/questions";

interface QuestionCardProps {
    question: Question;
    index: number;
}

function useBookmarks() {
    const [bookmarks, setBookmarks] = useState<Set<string>>(new Set());

    useEffect(() => {
        const saved = localStorage.getItem("physed-bookmarks");
        if (saved) setBookmarks(new Set(JSON.parse(saved)));
    }, []);

    const toggle = useCallback((id: string) => {
        setBookmarks((prev) => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            localStorage.setItem("physed-bookmarks", JSON.stringify([...next]));
            return next;
        });
    }, []);

    return { bookmarks, toggle };
}

export function QuestionCard({ question, index }: QuestionCardProps) {
    const router = useRouter();
    const [showAnswer, setShowAnswer] = useState(false);
    const [elapsed, setElapsed] = useState(0);
    const [timerRunning, setTimerRunning] = useState(false);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const { bookmarks, toggle } = useBookmarks();
    const isBookmarked = bookmarks.has(question.id);

    useEffect(() => {
        if (timerRunning) {
            intervalRef.current = setInterval(() => setElapsed((t) => t + 1), 1000);
        } else if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    }, [timerRunning]);

    const formatTime = (s: number) => {
        const m = Math.floor(s / 60);
        const sec = s % 60;
        return `${m.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
    };

    const typeColor: Record<string, string> = {
        MCQ: "bg-emerald-500/20 text-white",
        Short: "bg-blue-500/20 text-white",
        Long: "bg-amber-500/20 text-white",
        "Case Study": "bg-rose-500/20 text-white",
    };

    const handleCardClick = () => {
        router.push(`/test?year=${question.year}&answers=true`);
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 20, stiffness: 100, delay: index * 0.03 }}
            onClick={handleCardClick}
            className="relative rounded-2xl backdrop-blur-[24px] bg-white/[0.03] border border-white/[0.08] overflow-hidden cursor-pointer hover:border-purple-400/20 transition-colors"
        >
            <div className="p-5">
                {/* Header badges + actions */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-purple-500/20 text-white">
                        {question.year}
                    </span>
                    <span
                        className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${typeColor[question.type] || "bg-purple-500/20 text-white"}`}
                    >
                        {question.type}
                    </span>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-fuchsia-500/15 text-white">
                        {question.marks} {question.marks === 1 ? "Mark" : "Marks"}
                    </span>
                    <span className="text-[10px] text-purple-300/50 ml-auto hidden md:inline">
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
                            className="flex items-center gap-1 text-[10px] px-2 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-purple-300/70 hover:text-purple-300/90 transition-colors"
                        >
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                            <span className={timerRunning ? "animate-timer-pulse text-emerald-400" : ""}>
                                {formatTime(elapsed)}
                            </span>
                        </button>
                        {elapsed > 0 && !timerRunning && (
                            <button
                                onClick={(e) => { e.stopPropagation(); setElapsed(0); }}
                                className="text-[9px] px-1.5 py-0.5 rounded text-purple-300/60 hover:text-purple-300/80"
                            >
                                ↺
                            </button>
                        )}
                    </div>

                    {/* Bookmark */}
                    <button
                        onClick={(e) => { e.stopPropagation(); toggle(question.id); }}
                        className={`p-1.5 rounded-lg transition-all ${isBookmarked ? "text-amber-400 bg-amber-400/10" : "text-purple-300/50 hover:text-amber-400/60"}`}
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill={isBookmarked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                        </svg>
                    </button>
                </div>

                {/* Question number + text */}
                <div className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-purple-500/15 flex items-center justify-center text-sm font-semibold text-white">
                        {index + 1}
                    </span>
                    <p className="text-sm text-white leading-relaxed flex-1">
                        {question.question}
                    </p>
                </div>

                {/* Topic tag */}
                <div className="mt-3 ml-10">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/10 text-purple-300/90 border border-indigo-400/10">
                        {question.topic}
                    </span>
                </div>

                {/* Show/Hide answer button */}
                <div className="mt-4 ml-10" onClick={(e) => e.stopPropagation()}>
                    <button
                        onClick={(e) => { e.stopPropagation(); setShowAnswer(!showAnswer); }}
                        className="text-xs font-medium text-purple-300 hover:text-white transition-colors flex items-center gap-1.5"
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
                                <p className="text-[11px] font-semibold text-emerald-400/70 mb-2 uppercase tracking-wider">
                                    Answer & Solution
                                </p>
                                <p className="text-sm text-white leading-relaxed whitespace-pre-line">
                                    {question.answer}
                                </p>
                                <p className="text-[10px] text-purple-300/50 mt-3">
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
