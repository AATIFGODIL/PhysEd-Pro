"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { questions } from "@/data/questions";
import { useQuiz, DEFAULT_GROUPS } from "@/context/QuizContext";
import { QuestionCard } from "@/components/QuestionCard";
import { useRouter } from "next/navigation";

export default function BookmarksPage() {
    const router = useRouter();
    const { bookmarks, bookmarkGroups, createGroup } = useQuiz();
    const [selectedGroupId, setSelectedGroupId] = useState<string | "all">("all");
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isCreateOpen, setIsCreateOpen] = useState(false);

    // Create Group State
    const [newGroupName, setNewGroupName] = useState("");
    const [newGroupColor, setNewGroupColor] = useState("#f472b6");

    const bookmarkedQuestions = useMemo(() => {
        const ids = Object.keys(bookmarks);
        return questions.filter(q => ids.includes(q.id));
    }, [bookmarks]);

    const filteredQuestions = useMemo(() => {
        if (selectedGroupId === "all") return bookmarkedQuestions;
        return bookmarkedQuestions.filter(q => bookmarks[q.id] === selectedGroupId);
    }, [bookmarkedQuestions, bookmarks, selectedGroupId]);

    const activeGroup = selectedGroupId === "all"
        ? null
        : bookmarkGroups.find(g => g.id === selectedGroupId) || DEFAULT_GROUPS[0];

    const currentGroupName = selectedGroupId === "all" ? "All Groups" : activeGroup?.name;
    const currentGroupColor = selectedGroupId === "all" ? undefined : activeGroup?.color;

    const handleCreateGroup = () => {
        if (!newGroupName.trim()) return;
        createGroup(newGroupName, newGroupColor);
        setNewGroupName("");
        setIsCreateOpen(false);
    };

    return (
        <div className="min-h-screen bg-[#fcfaff] dark:bg-black p-4 pb-24 md:p-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Bookmarks</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            You have saved {bookmarkedQuestions.length} questions
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setIsCreateOpen(true)}
                            className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl shadow-sm transition-all text-sm font-medium"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                            Create Group
                        </button>

                        <div className="relative">
                            <button
                                onClick={() => setIsFilterOpen(!isFilterOpen)}
                                className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl shadow-sm hover:shadow-md transition-all text-sm font-medium"
                            >
                                <span className="text-gray-500 dark:text-gray-400">Filter:</span>
                                {currentGroupColor && (
                                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: currentGroupColor }} />
                                )}
                                <span className="text-gray-900 dark:text-white">{currentGroupName}</span>
                                <svg className={`w-4 h-4 text-gray-400 transition-transform ${isFilterOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                            </button>

                            <AnimatePresence>
                                {isFilterOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95, y: 5 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95, y: 5 }}
                                        className="absolute right-0 top-full mt-2 w-56 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl shadow-xl z-50 overflow-hidden"
                                    >
                                        <div className="p-1">
                                            <div className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-zinc-500 uppercase tracking-wider">
                                                Select Group
                                            </div>
                                            <button
                                                onClick={() => { setSelectedGroupId("all"); setIsFilterOpen(false); }}
                                                className={`w-full text-left px-3 py-2 text-sm rounded-lg flex items-center gap-2 transition-colors ${selectedGroupId === "all" ? "bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300" : "hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-700 dark:text-zinc-300"}`}
                                            >
                                                <div className="w-2.5 h-2.5 rounded-full bg-gray-400" />
                                                All Groups
                                            </button>
                                            <div className="h-px bg-gray-100 dark:bg-zinc-800 my-1" />
                                            {bookmarkGroups.map((group) => {
                                                const count = bookmarkedQuestions.filter(q => bookmarks[q.id] === group.id).length;
                                                return (
                                                    <button
                                                        key={group.id}
                                                        onClick={() => { setSelectedGroupId(group.id); setIsFilterOpen(false); }}
                                                        className={`w-full text-left px-3 py-2 text-sm rounded-lg flex items-center gap-2 transition-colors ${selectedGroupId === group.id ? "bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300" : "hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-700 dark:text-zinc-300"}`}
                                                    >
                                                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: group.color }} />
                                                        {group.name}
                                                        <span className="ml-auto text-xs text-gray-400">{count}</span>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {filteredQuestions.length > 0 ? (
                    <div className="grid gap-6">
                        {filteredQuestions.map((q, index) => (
                            <QuestionCard
                                key={q.id}
                                question={q}
                                index={index}
                                onClick={() => router.push(`/test?bookmarkGroupId=${selectedGroupId}&answers=true&questionId=${q.id}`)}
                                showStatusBadge={true}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <div className="w-16 h-16 bg-gray-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">No bookmarks found</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            {selectedGroupId === "all" ? "Start bookmarking questions to see them here." : "No bookmarks in this group."}
                        </p>
                    </div>
                )}
            </div>

            {/* Create Group Modal */}
            <AnimatePresence>
                {isCreateOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
                            onClick={() => setIsCreateOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="relative bg-white dark:bg-zinc-900 rounded-2xl p-6 w-full max-w-sm shadow-xl border border-gray-200 dark:border-zinc-800"
                        >
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Create New Group</h3>

                            <input
                                type="text"
                                placeholder="Group Name"
                                value={newGroupName}
                                onChange={(e) => setNewGroupName(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800/50 text-gray-900 dark:text-white mb-4 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                                autoFocus
                            />

                            <div className="mb-6">
                                <label className="text-xs font-semibold text-gray-500 dark:text-zinc-500 uppercase tracking-wider block mb-2">Select Color</label>
                                <div className="grid grid-cols-5 gap-3">
                                    {[
                                        "#ef4444", "#f97316", "#f59e0b", "#84cc16", "#22c55e",
                                        "#06b6d4", "#3b82f6", "#8b5cf6", "#d946ef", "#f43f5e"
                                    ].map((color) => (
                                        <button
                                            key={color}
                                            onClick={() => setNewGroupColor(color)}
                                            className={`w-8 h-8 rounded-full transition-transform hover:scale-110 ${newGroupColor === color ? "ring-2 ring-offset-2 ring-gray-900 dark:ring-white ring-offset-white dark:ring-offset-black" : ""}`}
                                            style={{ backgroundColor: color }}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={() => setIsCreateOpen(false)}
                                    className="flex-1 py-2.5 rounded-xl border border-gray-200 dark:border-zinc-700 text-gray-600 dark:text-zinc-400 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors font-medium text-sm"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleCreateGroup}
                                    disabled={!newGroupName.trim()}
                                    className="flex-1 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium transition-colors"
                                >
                                    Create Group
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
