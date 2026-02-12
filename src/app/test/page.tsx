"use client";

import { useState, useMemo, useEffect, Suspense, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";
import { questions } from "@/data/questions";

type QuestionStatus = "not-seen" | "seen" | "attempted" | "correct" | "wrong";

function TestPageContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const year = parseInt(searchParams.get("year") || "2025");
    const showAnswers = searchParams.get("answers") === "true";

    const [currentIndex, setCurrentIndex] = useState(0);
    const [started, setStarted] = useState(showAnswers);
    const [timeLeft, setTimeLeft] = useState(3 * 60 * 60);
    const [showAnswer, setShowAnswer] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [statusMap, setStatusMap] = useState<Record<number, QuestionStatus>>({});
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const yearQuestions = useMemo(
        () => questions.filter((q) => q.year === year),
        [year]
    );

    const currentQ = yearQuestions[currentIndex];

    // Hooks must be before any returns

    const currentChapter = currentQ?.chapter || "Physics";
    const totalMarks = yearQuestions.reduce((s, q) => s + q.marks, 0);

    useEffect(() => {
        if (!started || !currentQ) return;
        setStatusMap((prev) => {
            if (prev[currentIndex]) return prev;
            return { ...prev, [currentIndex]: "seen" };
        });
    }, [currentIndex, started, currentQ]);

    useEffect(() => {
        if (!started || showAnswers) return;
        const interval = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, [started, showAnswers]);

    const formatTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    };

    const goTo = useCallback((idx: number) => {
        if (idx >= 0 && idx < yearQuestions.length) {
            setCurrentIndex(idx);
            setShowAnswer(showAnswers);
            setSelectedOption(null);
        }
    }, [yearQuestions.length, showAnswers]);

    const handleSelectOption = (opt: string) => {
        setSelectedOption(opt);
        setStatusMap((prev) => ({ ...prev, [currentIndex]: "attempted" }));
    };

    const handleClearResponse = () => {
        setSelectedOption(null);
        setStatusMap((prev) => ({ ...prev, [currentIndex]: "seen" }));
    };

    const counts = useMemo(() => {
        const c = { correct: 0, wrong: 0, attempted: 0, seen: 0, notSeen: 0 };
        for (let i = 0; i < yearQuestions.length; i++) {
            const s = statusMap[i] || "not-seen";
            if (s === "correct") c.correct++;
            else if (s === "wrong") c.wrong++;
            else if (s === "attempted") c.attempted++;
            else if (s === "seen") c.seen++;
            else c.notSeen++;
        }
        return c;
    }, [statusMap, yearQuestions.length]);

    const getStatusColor = (status: QuestionStatus) => {
        switch (status) {
            case "correct": return "bg-emerald-500 text-white";
            case "wrong": return "bg-red-500 text-white";
            case "attempted": return "bg-blue-500 text-white";
            case "seen": return "bg-amber-500 text-white";
            default: return "bg-white/[0.06] text-purple-300/80";
        }
    };

    // Parse MCQ options from question text - MOVED UP
    const mcqOptions = useMemo(() => {
        if (!currentQ || currentQ.type !== "MCQ") return null;
        const text = currentQ.question;
        const patterns = [
            /\(a\)\s*(.*?)\s*\(b\)\s*(.*?)\s*\(c\)\s*(.*?)\s*\(d\)\s*(.*)/is,
            /\ba\)\s*(.*?)\s*b\)\s*(.*?)\s*c\)\s*(.*?)\s*d\)\s*(.*)/is,
            /\bA\.\s*(.*?)\s*B\.\s*(.*?)\s*C\.\s*(.*?)\s*D\.\s*(.*)/is,
        ];
        for (const pattern of patterns) {
            const match = text.match(pattern);
            if (match) {
                return [
                    { label: "A", text: match[1].trim() },
                    { label: "B", text: match[2].trim() },
                    { label: "C", text: match[3].trim() },
                    { label: "D", text: match[4].trim() },
                ];
            }
        }
        return null;
    }, [currentQ]);

    // Extract question stem - MOVED UP
    const questionStem = useMemo(() => {
        if (!mcqOptions || !currentQ || currentQ.type !== "MCQ") return currentQ?.question;
        const text = currentQ.question;
        const optStart = text.search(/\(a\)|^a\)|A\./im);
        return optStart > 0 ? text.substring(0, optStart).trim() : text;
    }, [currentQ, mcqOptions]);


    if (!started) {
        const sections = [
            { type: "MCQ", count: yearQuestions.filter(q => q.type === "MCQ").length },
            { type: "Short Answer", count: yearQuestions.filter(q => q.type === "Short").length },
            { type: "Case Study", count: yearQuestions.filter(q => q.type === "Case Study").length },
            { type: "Long Answer", count: yearQuestions.filter(q => q.type === "Long").length },
        ].filter(s => s.count > 0);

        return (
            <div className="min-h-screen flex items-center justify-center px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-md w-full"
                >
                    <div className="rounded-2xl backdrop-blur-[24px] bg-white/[0.04] border border-white/[0.08] p-8 text-center">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-purple-300/70 mb-3">
                            CBSE Board Examination
                        </p>
                        <h1 className="text-4xl font-bold text-white mb-2">{year}</h1>
                        <p className="text-sm text-purple-300/80 mb-1">Physical Education — Class XII</p>
                        <p className="text-xs text-purple-300/60 mb-8">
                            {yearQuestions.length} questions • {totalMarks} marks • 3 hours
                        </p>

                        <div className="space-y-2 mb-8 text-left">
                            {sections.map((sec) => (
                                <div
                                    key={sec.type}
                                    className="flex items-center justify-between text-[11px] px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06]"
                                >
                                    <span className="text-purple-300/90">{sec.type}</span>
                                    <span className="text-purple-300/60">{sec.count} Q</span>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => setStarted(true)}
                            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-500/30 to-fuchsia-500/30 border border-purple-400/25 hover:border-purple-400/50 text-white font-medium text-sm transition-all hover:scale-[1.02]"
                        >
                            Start Test
                        </button>
                        <button
                            onClick={() => router.back()}
                            className="w-full mt-3 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-purple-300/70 text-xs transition-all hover:text-purple-300/90"
                        >
                            Go Back
                        </button>
                    </div>
                </motion.div>
            </div>
        );
    }

    if (!currentQ) return null;

    return (
        <div className="min-h-screen flex flex-col">
            {/* Top Header Bar */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
                <button
                    onClick={() => router.back()}
                    className="text-purple-300/80 hover:text-white transition-colors"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 12H5" /><polyline points="12 19 5 12 12 5" />
                    </svg>
                </button>
                <h1 className="text-sm font-semibold text-white flex-1 truncate">
                    {currentChapter}
                </h1>
                {showAnswers && (
                    <span className="text-[10px] px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/20">
                        Solutions Mode
                    </span>
                )}
                {!showAnswers && (
                    <span className="text-xs font-mono text-purple-300/80 bg-white/[0.04] px-3 py-1.5 rounded-lg border border-white/[0.08]">
                        {formatTime(timeLeft)}
                    </span>
                )}
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="text-purple-300/70 hover:text-white transition-colors"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
                        <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
                    </svg>
                </button>
            </div>

            {/* Question Number Navigation Bar */}
            <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/[0.06] overflow-x-auto bg-white/[0.01]">
                {yearQuestions.map((_, idx) => {
                    const status = statusMap[idx] || "not-seen";
                    const isCurrent = idx === currentIndex;
                    return (
                        <button
                            key={idx}
                            onClick={() => goTo(idx)}
                            className={`flex-shrink-0 w-8 h-8 rounded-lg text-[11px] font-semibold transition-all ${isCurrent
                                ? "bg-gradient-to-br from-purple-500 to-fuchsia-500 text-white ring-2 ring-purple-400/50 scale-110"
                                : status === "attempted"
                                    ? "bg-blue-500/20 text-blue-300 border border-blue-400/20"
                                    : status === "seen"
                                        ? "bg-amber-500/15 text-amber-300 border border-amber-400/20"
                                        : "bg-white/[0.04] text-purple-300/80 border border-white/[0.06] hover:border-purple-400/30"
                                }`}
                        >
                            {idx + 1}
                        </button>
                    );
                })}
            </div>

            {/* Main Content Area */}
            <div className="flex flex-1 overflow-hidden">
                {/* Question Panel */}
                <div className="flex-1 flex flex-col overflow-y-auto">
                    <div className="flex-1 px-6 py-6 pb-4">
                        {/* Question meta */}
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-[10px] font-bold px-2 py-1 rounded-md bg-purple-500/15 text-white">
                                Q{currentIndex + 1}
                            </span>
                            <span className="text-[10px] text-purple-300/70">{formatTime(timeLeft)}</span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-fuchsia-500/10 text-purple-300/90">
                                +{currentQ.marks}
                            </span>
                            <div className="flex items-center gap-1.5 ml-auto">
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-300">
                                    {currentQ.source}
                                </span>
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300/80">
                                    {currentQ.type}{currentQ.type === "MCQ" ? " Single Answer" : ""}
                                </span>
                            </div>
                        </div>

                        {/* Question Text */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.2 }}
                            >
                                <p className="text-[15px] text-white leading-relaxed mb-6">
                                    {mcqOptions ? questionStem : currentQ.question}
                                </p>

                                {/* MCQ Options */}
                                {mcqOptions && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                                        {mcqOptions.map((opt) => (
                                            <button
                                                key={opt.label}
                                                onClick={() => handleSelectOption(opt.label)}
                                                className={`text-left p-4 rounded-xl border transition-all flex items-start gap-3 ${selectedOption === opt.label
                                                    ? "bg-purple-500/15 border-purple-400/40 ring-1 ring-purple-400/20"
                                                    : "bg-white/[0.02] border-white/[0.08] hover:border-purple-400/20 hover:bg-white/[0.04]"
                                                    }`}
                                            >
                                                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${selectedOption === opt.label
                                                    ? "bg-purple-500 text-white"
                                                    : "bg-white/[0.06] text-purple-300/80"
                                                    }`}>
                                                    {opt.label}
                                                </span>
                                                <span className="text-sm text-white mt-1.5">
                                                    {opt.text}
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                )}

                                {/* Answer Section */}
                                {showAnswers && showAnswer && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-4 p-5 rounded-xl bg-emerald-500/[0.06] border border-emerald-400/15"
                                    >
                                        <p className="text-[10px] uppercase tracking-wider text-emerald-400/70 mb-2 font-semibold">
                                            Answer & Solution
                                        </p>
                                        <p className="text-sm text-white leading-relaxed whitespace-pre-line">
                                            {currentQ.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Bottom Control Bar */}
                    <div className="flex items-center justify-between px-6 py-4 border-t border-white/[0.06] bg-white/[0.02]">
                        <div className="flex items-center gap-3">
                            {showAnswers && (
                                <label className="flex items-center gap-2 cursor-pointer select-none">
                                    <div
                                        onClick={() => setShowAnswer(!showAnswer)}
                                        className={`w-10 h-5 rounded-full transition-colors relative ${showAnswer ? "bg-emerald-500" : "bg-white/[0.1]"}`}
                                    >
                                        <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${showAnswer ? "translate-x-5" : "translate-x-0.5"}`} />
                                    </div>
                                    <span className="text-xs text-purple-300/80">Show Answer</span>
                                </label>
                            )}
                        </div>

                        <div className="flex items-center gap-2">
                            {currentQ.type === "MCQ" && (
                                <button
                                    onClick={handleClearResponse}
                                    className="px-4 py-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-purple-300/80 text-xs hover:text-white transition-colors"
                                >
                                    Clear Response
                                </button>
                            )}
                            <button
                                onClick={() => goTo(currentIndex - 1)}
                                disabled={currentIndex === 0}
                                className={`px-5 py-2 rounded-lg text-xs font-medium transition-colors ${currentIndex === 0
                                    ? "bg-white/[0.02] text-purple-300/40 border border-white/[0.04] cursor-not-allowed"
                                    : "bg-white/[0.06] text-white border border-white/[0.08] hover:bg-white/[0.1]"
                                    }`}
                            >
                                Previous
                            </button>
                            <button
                                onClick={() => goTo(currentIndex + 1)}
                                disabled={currentIndex >= yearQuestions.length - 1}
                                className={`px-5 py-2 rounded-lg text-xs font-medium transition-colors ${currentIndex >= yearQuestions.length - 1
                                    ? "bg-white/[0.02] text-purple-300/40 border border-white/[0.04] cursor-not-allowed"
                                    : "bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white hover:brightness-110"
                                    }`}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Sidebar — Question Grid */}
                {sidebarOpen && (
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 220, opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        className="border-l border-white/[0.06] bg-white/[0.02] overflow-y-auto hidden md:block"
                    >
                        <div className="p-4">
                            {/* Legend */}
                            <div className="flex flex-wrap gap-x-3 gap-y-1.5 mb-4">
                                <div className="flex items-center gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                                    <span className="text-[9px] text-purple-300/80">Correct</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <span className="text-[9px] text-purple-300/80">Wrong</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-blue-500" />
                                    <span className="text-[9px] text-purple-300/80">Attempted</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                                    <span className="text-[9px] text-purple-300/80">Seen</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-white/[0.15]" />
                                    <span className="text-[9px] text-purple-300/80">Not Seen</span>
                                </div>
                            </div>

                            {/* Counts */}
                            <div className="flex items-center gap-2 mb-4 text-[10px]">
                                <span className="text-emerald-400">●</span><span className="text-purple-300/70">{counts.correct}</span>
                                <span className="text-red-400">●</span><span className="text-purple-300/70">{counts.wrong}</span>
                                <span className="text-blue-400">●</span><span className="text-purple-300/70">{counts.attempted}</span>
                                <span className="text-amber-400">●</span><span className="text-purple-300/70">{counts.seen}</span>
                                <span className="text-purple-300/40">{counts.notSeen}</span>
                            </div>

                            {/* Chapter label */}
                            <p className="text-[10px] text-purple-300/70 uppercase tracking-wider mb-3">
                                {currentChapter}
                            </p>

                            {/* Question Number Grid */}
                            <div className="grid grid-cols-6 gap-1.5">
                                {yearQuestions.map((_, idx) => {
                                    const status = statusMap[idx] || "not-seen";
                                    const isCurrent = idx === currentIndex;
                                    return (
                                        <button
                                            key={idx}
                                            onClick={() => goTo(idx)}
                                            className={`w-full aspect-square rounded-lg text-[11px] font-semibold transition-all ${isCurrent
                                                ? "ring-2 ring-purple-400 bg-purple-500/30 text-white"
                                                : getStatusColor(status)
                                                }`}
                                        >
                                            {idx + 1}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
}

export default function TestPage() {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen flex items-center justify-center">
                    <p className="text-purple-300/50 text-sm">Loading...</p>
                </div>
            }
        >
            <TestPageContent />
        </Suspense>
    );
}
