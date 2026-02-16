"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

export interface QuestionStat {
    id: string;
    attempted: boolean;
    correct?: boolean; // Only for MCQs
    selectedOption?: string; // For MCQs
    timeSpent: number; // in seconds
}

export interface BookmarkGroup {
    id: string;
    name: string;
    color: string; // Hex code or tailwind class
}

interface QuizContextType {
    bookmarks: Record<string, string>; // questionId -> groupId
    bookmarkGroups: BookmarkGroup[];
    stats: Record<string, QuestionStat>;
    toggleBookmark: (id: string, groupId?: string) => void; // Modified to accept group
    addBookmark: (id: string, groupId: string) => void;
    removeBookmark: (id: string) => void;
    createGroup: (name: string, color: string) => void;
    deleteGroup: (groupId: string) => void;
    updateQuestionStat: (id: string, data: Partial<QuestionStat>) => void;
    resetStats: () => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const DEFAULT_GROUP_ID = "default";
export const DEFAULT_GROUPS: BookmarkGroup[] = [
    { id: "default", name: "General", color: "#3b82f6" }, // Blue
];

export function QuizProvider({ children }: { children: React.ReactNode }) {
    // questionId -> groupId
    const [bookmarks, setBookmarks] = useState<Record<string, string>>({});
    const [bookmarkGroups, setBookmarkGroups] = useState<BookmarkGroup[]>(DEFAULT_GROUPS);
    const [stats, setStats] = useState<Record<string, QuestionStat>>({});
    const [loaded, setLoaded] = useState(false);

    // Load from localStorage on mount
    useEffect(() => {
        const savedBookmarks = localStorage.getItem("physed-bookmarks");
        const savedGroups = localStorage.getItem("physed-bookmark-groups");
        const savedStats = localStorage.getItem("physed-stats");

        if (savedBookmarks) {
            try {
                const parsed = JSON.parse(savedBookmarks);
                // Migration: If it's an array (old Set converted to array), convert to Record
                if (Array.isArray(parsed)) {
                    const migrated: Record<string, string> = {};
                    parsed.forEach((id: string) => {
                        migrated[id] = DEFAULT_GROUP_ID;
                    });
                    setBookmarks(migrated); // eslint-disable-line react-hooks/set-state-in-effect
                } else {
                    setBookmarks(parsed);
                }
            } catch (e) {
                console.error("Failed to parse bookmarks", e);
            }
        }

        if (savedGroups) {
            try {
                setBookmarkGroups(JSON.parse(savedGroups));
            } catch (e) {
                console.error("Failed to parse bookmark groups", e);
            }
        }

        if (savedStats) {
            setStats(JSON.parse(savedStats));
        }
        setLoaded(true);
    }, []);

    // Save to localStorage whenever state changes
    useEffect(() => {
        if (!loaded) return;
        localStorage.setItem("physed-bookmarks", JSON.stringify(bookmarks));
        localStorage.setItem("physed-bookmark-groups", JSON.stringify(bookmarkGroups));
        localStorage.setItem("physed-stats", JSON.stringify(stats));
    }, [bookmarks, bookmarkGroups, stats, loaded]);

    const addBookmark = useCallback((id: string, groupId: string) => {
        setBookmarks((prev) => ({
            ...prev,
            [id]: groupId
        }));
    }, []);

    const removeBookmark = useCallback((id: string) => {
        setBookmarks((prev) => {
            const next = { ...prev };
            delete next[id];
            return next;
        });
    }, []);

    const toggleBookmark = useCallback((id: string, groupId: string = DEFAULT_GROUP_ID) => {
        setBookmarks((prev) => {
            const next = { ...prev };
            if (next[id]) {
                delete next[id];
            } else {
                next[id] = groupId;
            }
            return next;
        });
    }, []);

    const createGroup = useCallback((name: string, color: string) => {
        const newGroup: BookmarkGroup = {
            id: Date.now().toString(),
            name,
            color,
        };
        setBookmarkGroups((prev) => [...prev, newGroup]);
    }, []);

    const deleteGroup = useCallback((groupId: string) => {
        if (groupId === DEFAULT_GROUP_ID) return; // Cannot delete default
        setBookmarkGroups((prev) => prev.filter(g => g.id !== groupId));
        // Move bookmarks of deleted group to default
        setBookmarks((prev) => {
            const next = { ...prev };
            Object.keys(next).forEach(qid => {
                if (next[qid] === groupId) {
                    next[qid] = DEFAULT_GROUP_ID;
                }
            });
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
                bookmarkGroups,
                stats,
                toggleBookmark,
                addBookmark,
                removeBookmark,
                createGroup,
                deleteGroup,
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



/* Initial release of PhysEd-Pro */
