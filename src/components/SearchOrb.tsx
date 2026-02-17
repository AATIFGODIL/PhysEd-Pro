"use client";

import { useState, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { searchQuestions } from "@/lib/search";
import type { Question } from "@/data/questions";
import Link from "next/link";

export function SearchBar() {
    const [query, setQuery] = useState("");
    const [focused, setFocused] = useState(false);
    // const [results, setResults] = useState<Question[]>([]); // Refactored to useMemo
    const inputRef = useRef<HTMLInputElement>(null);

    const results = useMemo(() => {
        if (query.length >= 2) {
            return searchQuestions(query).slice(0, 8);
        }
        return [];
    }, [query]);

    return (
        <div className="relative w-full max-w-2xl mx-auto">
            {/* Outer glow */}
            <motion.div
                animate={{
                    scale: focused ? 1.02 : 1,
                    opacity: focused ? 0.5 : 0.15,
                }}
                transition={{ duration: 0.5 }}
                className="absolute -inset-3 rounded-full bg-gradient-to-r from-purple-600/20 via-fuchsia-500/15 to-indigo-600/20 blur-2xl pointer-events-none"
            />

            {/* Glass search bar */}
            <motion.div
                animate={{ scale: focused ? 1.01 : 1 }}
                transition={{ type: "spring", damping: 20 }}
                className="relative rounded-full backdrop-blur-[24px] bg-gray-100 dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.08] shadow-[0_4px_30px_rgba(124,58,237,0.08),inset_0_1px_0_rgba(255,255,255,0.05)] overflow-hidden"
            >
                <div className="flex items-center px-5 py-4 gap-3">
                    {/* Search icon */}
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-purple-400 dark:text-purple-300/80 flex-shrink-0"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>

                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onFocus={() => {
                            setFocused(true);
                            if (query) {
                                setQuery("");
                            }
                        }}
                        onBlur={() => setTimeout(() => setFocused(false), 200)}
                        placeholder={focused ? "" : 'Search questions... e.g. "2024 yoga" or "biomechanics 5 marks"'}
                        className="flex-1 bg-transparent text-lg font-medium bg-gradient-to-r from-purple-700 to-indigo-600 dark:from-purple-200 dark:to-indigo-300 bg-clip-text text-transparent placeholder:text-gray-400 dark:placeholder:text-purple-300/50 outline-none"
                    />

                    {query && (
                        <button
                            onClick={() => { setQuery(""); }}
                            className="text-gray-400 dark:text-purple-300/70 hover:text-gray-600 dark:hover:text-white transition-colors"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    )}
                </div>

                {/* Shimmer line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent" />
            </motion.div>

            {/* Search results dropdown */}
            <AnimatePresence>
                {results.length > 0 && focused && (
                    <motion.div
                        initial={{ opacity: 0, y: -4, scale: 0.99 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -4, scale: 0.99 }}
                        className="absolute top-full mt-2 z-20 w-full max-h-[380px] overflow-y-auto rounded-2xl backdrop-blur-[24px] bg-white/90 dark:bg-black/80 border border-gray-200 dark:border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.6)] p-3 space-y-1.5"
                    >
                        {results.map((q: Question) => (
                            <Link key={q.id} href={`/test?search=${encodeURIComponent(query)}&questionId=${q.id}&mode=practice`}>
                                <motion.div
                                    initial={{ opacity: 0, x: -8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="p-3 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/[0.04] hover:border-purple-500/30 hover:bg-purple-50 dark:hover:bg-white/[0.05] transition-all cursor-pointer"
                                >
                                    <div className="flex items-center gap-2 mb-1.5">
                                        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-500/15 text-purple-700 dark:text-white">
                                            {q.year}
                                        </span>
                                        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-fuchsia-100 dark:bg-fuchsia-500/10 text-fuchsia-700 dark:text-white">
                                            {q.marks}M
                                        </span>
                                        <span className="text-[10px] text-gray-500 dark:text-purple-300/60 truncate">
                                            {q.chapter}
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-800 dark:text-purple-300/90 line-clamp-2">
                                        {q.question}
                                    </p>
                                </motion.div>
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}



/* Initial release of PhysEd-Pro */
  