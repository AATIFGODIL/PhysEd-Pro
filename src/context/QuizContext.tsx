"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

interface QuestionStat {
    id: string;
    attempted: boolean;
    correct?: boolean; // Only for MCQs
    selectedOption?: string; // For MCQs
    timeSpent: number; // in seconds
}

interface QuizContextType {
    bookmarks: Set<string>;
    stats: Record<string, QuestionStat>;
    toggleBookmark: (id: string) => void;
    updateQuestionStat: (id: string, data: Partial<QuestionStat>) => void;
    resetStats: () => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export function QuizProvider({ children }: { children: React.ReactNode }) {
    const [bookmarks, setBookmarks] = useState<Set<string>>(new Set());
    const [stats, setStats] = useState<Record<string, QuestionStat>>({});
    const [loaded, setLoaded] = useState(false);

    // Load from localStorage on mount
    useEffect(() => {
        const savedBookmarks = localStorage.getItem("physed-bookmarks");
        const savedStats = localStorage.getItem("physed-stats");

        if (savedBookmarks) {
            setBookmarks(new Set(JSON.parse(savedBookmarks)));
        }
        if (savedStats) {
            setStats(JSON.parse(savedStats));
        }
        setLoaded(true);
    }, []);

    // Save to localStorage whenever state changes
    useEffect(() => {
        if (!loaded) return;
        localStorage.setItem("physed-bookmarks", JSON.stringify([...bookmarks]));
        localStorage.setItem("physed-stats", JSON.stringify(stats));
    }, [bookmarks, stats, loaded]);

    const toggleBookmark = useCallback((id: string) => {
        setBookmarks((prev) => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    }, []);

    const updateQuestionStat = useCallback((id: string, data: Partial<QuestionStat>) => {
        setStats((prev) => {
            const current = prev[id] || { id, attempted: false, timeSpent: 0 };
            return {
                ...prev,
                [id]: { ...current, ...data },
            };
        });
    }, []);

    const resetStats = useCallback(() => {
        setStats({});
    }, []);

    return (
        <QuizContext.Provider
            value={{
                bookmarks,
                stats,
                toggleBookmark,
                updateQuestionStat,
                resetStats,
            }}
        >
            {children}
        </QuizContext.Provider>
    );
}

export function useQuiz() {
    const context = useContext(QuizContext);
    if (context === undefined) {
        throw new Error("useQuiz must be used within a QuizProvider");
    }
    return context;
}
