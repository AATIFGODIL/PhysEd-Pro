"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuiz, DEFAULT_GROUPS } from "@/context/QuizContext";

interface BookmarkButtonProps {
    questionId: string;
    className?: string;
    size?: number;
}

export function BookmarkButton({ questionId, className = "", size = 20 }: BookmarkButtonProps) {
    const { bookmarks, bookmarkGroups, addBookmark, removeBookmark, createGroup } = useQuiz();
    const [isOpen, setIsOpen] = useState(false);
    const [showCreate, setShowCreate] = useState(false);
    const [newGroupName, setNewGroupName] = useState("");
    const [newGroupColor, setNewGroupColor] = useState("#f472b6"); // Default pink-400

    const containerRef = useRef<HTMLDivElement>(null);

    const currentGroupId = bookmarks[questionId];
    const isBookmarked = !!currentGroupId;

    // Find group details
    const currentGroup = isBookmarked
        ? bookmarkGroups.find(g => g.id === currentGroupId) || DEFAULT_GROUPS[0]
        : null;

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
                setShowCreate(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const handleCreateGroup = () => {
        if (!newGroupName.trim()) return;
        createGroup(newGroupName, newGroupColor);
        // We can't immediately get the ID of the new group unless we return it from createGroup.
        // For simplicity, createGroup uses Date.now(). 
        // Let's just reset UI and user can select it. 
        // Or better, let's auto-select (requires changing createGroup signature/return, let's keep it simple for now).
        setNewGroupName("");
        setShowCreate(false);
    };

    const toggleOpen = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative" ref={containerRef} onClick={(e) => e.stopPropagation()}>
            <button
                onClick={toggleOpen}
                className={`transition-all rounded-lg p-1.5 focus:outline-none ${className} ${isBookmarked ? "" : "text-gray-400 hover:text-purple-500"}`}
                style={{ color: isBookmarked ? currentGroup?.color : undefined }}
            >
                <svg
                    width={size}
                    height={size}
                    viewBox="0 0 24 24"
                    fill={isBookmarked ? "currentColor" : "none"}
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform active:scale-95"
                >
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 5 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 5 }}
                        transition={{ duration: 0.1 }}
                        className="absolute right-0 top-full mt-2 w-64 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl shadow-xl z-50 overflow-hidden"
                    >
                        {!showCreate ? (
                            <div className="p-1">
                                <div className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-zinc-500 uppercase tracking-wider">
                                    {isBookmarked ? "Change Group" : "Select Group"}
                                </div>
                                <div className="max-h-48 overflow-y-auto space-y-0.5 custom-scrollbar">
                                    {bookmarkGroups.map((group) => (
                                        <button
                                            key={group.id}
                                            onClick={() => {
                                                addBookmark(questionId, group.id);
                                                setIsOpen(false);
                                            }}
                                            className={`w-full text-left px-3 py-2 text-sm rounded-lg flex items-center gap-2 transition-colors ${currentGroupId === group.id ? "bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300" : "hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-700 dark:text-zinc-300"}`}
                                        >
                                            <span
                                                className="w-2.5 h-2.5 rounded-full"
                                                style={{ backgroundColor: group.color }}
                                            />
                                            {group.name}
                                            {currentGroupId === group.id && (
                                                <svg className="ml-auto w-4 h-4 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                            )}
                                        </button>
                                    ))}
                                </div>
                                <div className="h-px bg-gray-100 dark:bg-zinc-800 my-1" />
                                <button
                                    onClick={() => setShowCreate(true)}
                                    className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 text-blue-600 dark:text-blue-400 font-medium flex items-center gap-2"
                                >
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                                    Create New Group
                                </button>
                                {isBookmarked && (
                                    <button
                                        onClick={() => {
                                            removeBookmark(questionId);
                                            setIsOpen(false);
                                        }}
                                        className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 flex items-center gap-2 mt-0.5"
                                    >
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
                                        Remove Bookmark
                                    </button>
                                )}
                            </div>
                        ) : (
                            <div className="p-3">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-xs font-semibold text-gray-900 dark:text-white">New Group</h3>
                                    <button onClick={() => setShowCreate(false)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                                    </button>
                                </div>

                                <input
                                    type="text"
                                    placeholder="Group Name"
                                    value={newGroupName}
                                    onChange={(e) => setNewGroupName(e.target.value)}
                                    className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800/50 text-sm text-gray-900 dark:text-white mb-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                                    autoFocus
                                />

                                <div className="grid grid-cols-5 gap-2 mb-4">
                                    {[
                                        "#ef4444", "#f97316", "#f59e0b", "#84cc16", "#22c55e",
                                        "#06b6d4", "#3b82f6", "#8b5cf6", "#d946ef", "#f43f5e"
                                    ].map((color) => (
                                        <button
                                            key={color}
                                            onClick={() => setNewGroupColor(color)}
                                            className={`w-6 h-6 rounded-full transition-transform hover:scale-110 ${newGroupColor === color ? "ring-2 ring-offset-2 ring-gray-900 dark:ring-white ring-offset-white dark:ring-offset-black" : ""}`}
                                            style={{ backgroundColor: color }}
                                        />
                                    ))}
                                </div>

                                <button
                                    onClick={handleCreateGroup}
                                    disabled={!newGroupName.trim()}
                                    className="w-full py-2 rounded-lg bg-purple-600 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium transition-colors"
                                >
                                    Create Group
                                </button>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}



/* Initial release of PhysEd-Pro */
