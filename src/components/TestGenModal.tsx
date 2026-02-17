import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Question } from "@/data/questions";

interface TestGenModalProps {
    isOpen: boolean;
    onClose: () => void;
    onGenerate: (config: TestConfig) => void;
    totalQuestions: number;
}

export type QuestionType = "MCQ" | "Short" | "Long" | "Case Study" | "Very Long";

export interface TestConfig {
    mode: "custom" | "board";
    count?: number;
    types?: QuestionType[];
    chapters?: number[]; // Added chapters selection (1-10)
}

export function TestGenModal({ isOpen, onClose, onGenerate, totalQuestions }: TestGenModalProps) {
    const [mode, setMode] = useState<"custom" | "board">("custom");
    const [count, setCount] = useState(20);
    const [selectedTypes, setSelectedTypes] = useState<QuestionType[]>(["MCQ", "Short", "Long", "Case Study", "Very Long"]);
    const [selectedChapters, setSelectedChapters] = useState<number[]>([]); // Empty = All chapters

    const handleChapterToggle = (chapterIndex: number) => {
        if (selectedChapters.includes(chapterIndex)) {
            setSelectedChapters(selectedChapters.filter((c) => c !== chapterIndex));
        } else {
            setSelectedChapters([...selectedChapters, chapterIndex]);
        }
    };

    const handleTypeToggle = (type: QuestionType) => {
        if (selectedTypes.includes(type)) {
            setSelectedTypes(selectedTypes.filter((t) => t !== type));
        } else {
            setSelectedTypes([...selectedTypes, type]);
        }
    };

    const handleStart = () => {
        onGenerate({
            mode,
            count: mode === "custom" ? count : undefined,
            types: mode === "custom" ? selectedTypes : undefined,
            chapters: mode === "custom" && selectedChapters.length > 0 ? selectedChapters : undefined,
        });
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
                        onClick={onClose}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        className="relative bg-white dark:bg-zinc-900 rounded-2xl p-6 w-full max-w-md shadow-xl border border-gray-200 dark:border-zinc-800"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                Generate Practice Test
                            </h3>
                            <button
                                onClick={onClose}
                                className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-500 dark:text-zinc-400 transition-colors"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>

                        {/* Mode Selection Tabs */}
                        <div className="flex p-1 mb-6 bg-gray-100 dark:bg-zinc-800 rounded-xl">
                            <button
                                onClick={() => setMode("custom")}
                                className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${mode === "custom"
                                    ? "bg-white dark:bg-zinc-700 text-purple-600 dark:text-white shadow-sm"
                                    : "text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-zinc-200"
                                    }`}
                            >
                                Custom Test
                            </button>
                            <button
                                onClick={() => setMode("board")}
                                className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${mode === "board"
                                    ? "bg-white dark:bg-zinc-700 text-purple-600 dark:text-white shadow-sm"
                                    : "text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-zinc-200"
                                    }`}
                            >
                                Board Pattern
                            </button>
                        </div>

                        {mode === "custom" ? (
                            <div className="space-y-6">
                                {/* Number of Questions */}
                                <div>
                                    <label className="flex items-center justify-between text-sm font-medium text-gray-700 dark:text-zinc-300 mb-2">
                                        <span>Number of Questions</span>
                                        <span className="text-purple-600 dark:text-purple-400 font-bold">{count}</span>
                                    </label>
                                    <input
                                        type="range"
                                        min="5"
                                        max={Math.min(100, totalQuestions)}
                                        step="5"
                                        value={count}
                                        onChange={(e) => setCount(Number(e.target.value))}
                                        className="w-full h-2 bg-gray-200 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
                                    />
                                    <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                                        <span>5</span>
                                        <span>{Math.min(100, totalQuestions)}</span>
                                    </div>
                                </div>

                                {/* Chapter Selection */}
                                <div>
                                    <label className="text-sm font-medium text-gray-700 dark:text-zinc-300 mb-2 block">
                                        Chapters <span className="text-xs font-normal text-gray-500 dark:text-zinc-500">(Select specific chapters or leave empty for all)</span>
                                    </label>
                                    <div className="flex flex-wrap gap-2">
                                        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                                            <button
                                                key={num}
                                                onClick={() => handleChapterToggle(num)}
                                                className={`w-8 h-8 rounded-full text-xs font-bold transition-all flex items-center justify-center border ${selectedChapters.includes(num)
                                                        ? "bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-500/30"
                                                        : "bg-white dark:bg-zinc-800 text-gray-600 dark:text-zinc-400 border-gray-200 dark:border-zinc-700 hover:border-purple-400 dark:hover:border-purple-500/50"
                                                    }`}
                                            >
                                                {num}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Question Types */}
                                <div>
                                    <label className="text-sm font-medium text-gray-700 dark:text-zinc-300 mb-2 block">
                                        Question Types
                                    </label>
                                    <div className="flex flex-wrap gap-2">
                                        {(["MCQ", "Short", "Long", "Case Study", "Very Long"] as QuestionType[]).map((type) => (
                                            <button
                                                key={type}
                                                onClick={() => handleTypeToggle(type)}
                                                className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${selectedTypes.includes(type)
                                                    ? "bg-purple-50 dark:bg-purple-500/20 border-purple-200 dark:border-purple-500/30 text-purple-700 dark:text-purple-300"
                                                    : "bg-white dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 text-gray-500 dark:text-zinc-400 hover:border-gray-300 dark:hover:border-zinc-600"
                                                    }`}
                                            >
                                                {type}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <div className="p-4 bg-purple-50 dark:bg-purple-500/10 rounded-xl border border-purple-100 dark:border-purple-500/20">
                                    <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 flex items-center gap-2">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-500">
                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                            <polyline points="14 2 14 8 20 8"></polyline>
                                            <path d="M16 13H8"></path>
                                            <path d="M16 17H8"></path>
                                            <path d="M10 9H8"></path>
                                        </svg>
                                        Standard Board Pattern
                                    </h4>
                                    <p className="text-xs text-purple-700 dark:text-purple-300/80 mb-3">
                                        Generates a 37-question test following the official CBSE blueprint:
                                    </p>
                                    <ul className="space-y-1.5">
                                        {[
                                            { count: 18, label: "MCQs (1 Mark)" },
                                            { count: 6, label: "Short Answer (2 Marks)" },
                                            { count: 6, label: "Long Answer I (3 Marks)" },
                                            { count: 3, label: "Case Studies (4 Marks)" },
                                            { count: 4, label: "Long Answer II (5 Marks)" },
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center justify-between text-xs text-purple-800 dark:text-purple-200/90">
                                                <span>{item.label}</span>
                                                <span className="font-bold bg-white dark:bg-purple-500/20 px-1.5 py-0.5 rounded text-purple-600 dark:text-purple-300">
                                                    {item.count}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}

                        <div className="mt-8">
                            <button
                                onClick={handleStart}
                                disabled={mode === "custom" && selectedTypes.length === 0}
                                className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white font-bold rounded-xl shadow-lg shadow-purple-500/25 transition-all transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                </svg>
                                Start {mode === "board" ? "Board Pattern Info" : "Custom"} Test
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
  