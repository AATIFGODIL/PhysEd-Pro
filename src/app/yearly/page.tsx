"use client";

import { useState, useMemo, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { QuestionCard } from "@/components/QuestionCard";
import { LiquidCard } from "@/components/LiquidCard";
import Link from "next/link";

const years = [2026, 2025, 2024, 2023, 2022];

import { useQuiz } from "@/context/QuizContext";

import { useRouter } from "next/navigation";
import { questions, chapters } from "@/data/questions";
import { TestGenModal, TestConfig } from "@/components/TestGenModal";

function YearlyPageContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const initialYear = searchParams.get("year")
        ? parseInt(searchParams.get("year")!)
        : null;

    const [selectedYears, setSelectedYears] = useState<number[]>(initialYear ? [initialYear] : []);
    const [marksFilters, setMarksFilters] = useState<number[]>([]);
    const [typeFilters, setTypeFilters] = useState<string[]>([]);
    const [examTypeFilters, setExamTypeFilters] = useState<('Main' | 'Compartment' | 'Sample')[]>([]);
    const [statusFilter, setStatusFilter] = useState<'attempted' | null>(null);
    const [showBookmarksOnly, setShowBookmarksOnly] = useState(false);

    const { bookmarks, stats, bookmarkGroups, createGroup } = useQuiz();

    // New State for Bookmark Groups
    const [selectedGroupId, setSelectedGroupId] = useState<string | "all">("all");
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [newGroupName, setNewGroupName] = useState("");
    const [newGroupColor, setNewGroupColor] = useState("#f472b6");

    // Test Gen Modal State
    const [isTestModalOpen, setIsTestModalOpen] = useState(false);

    const filteredQuestions = useMemo(() => {
        return questions.filter((q) => {
            if (showBookmarksOnly) {
                if (!bookmarks[q.id]) return false;
                if (selectedGroupId !== "all" && bookmarks[q.id] !== selectedGroupId) return false;
            }
            if (selectedYears.length > 0 && !selectedYears.includes(q.year)) return false;

            // Simple Status Filter Logic
            if (statusFilter === 'attempted') {
                const stat = stats[q.id];
                if (!stat?.attempted) return false;
            }

            // Logic for Exam Type
            if (examTypeFilters.length > 0) {
                const lowerSource = q.source.toLowerCase();
                const isCompartment = lowerSource.includes("compartment");
                const isSample = lowerSource.includes("sample");
                const isMain = !isCompartment && !isSample;

                const matches = examTypeFilters.some(type => {
                    if (type === 'Compartment') return isCompartment;
                    if (type === 'Sample') return isSample;
                    if (type === 'Main') return isMain;
                    return false;
                });
                if (!matches) return false;
            }

            // Logic for Type Filter
            if (typeFilters.length > 0) {
                const matches = typeFilters.some(t => {
                    if (t === "Very Long") return q.marks === 5;
                    if (t === "Long") return (q.marks === 3 || q.marks === 4) && q.type !== "Case Study";
                    return q.type === t;
                });
                if (!matches) return false;
            }

            if (marksFilters.length > 0 && !marksFilters.includes(q.marks)) return false;

            return true;
        }).sort((a, b) => b.year - a.year);
    }, [selectedYears, marksFilters, typeFilters, examTypeFilters, showBookmarksOnly, statusFilter, bookmarks, stats, selectedGroupId]);

    const activeGroup = selectedGroupId === "all"
        ? null
        : bookmarkGroups.find(g => g.id === selectedGroupId);

    const currentGroupName = selectedGroupId === "all" ? "All Groups" : activeGroup?.name;
    const currentGroupColor = selectedGroupId === "all" ? undefined : activeGroup?.color;

    const handleCreateGroup = () => {
        if (!newGroupName.trim()) return;
        createGroup(newGroupName, newGroupColor);
        setNewGroupName("");
        setIsCreateOpen(false);
    };

    const handleGenerateTest = (config: TestConfig) => {
        let selectedQuestions: string[] = [];
        let pool = [...questions]; // Initialize pool for custom mode

        if (config.mode === "board") {
            // Board Pattern Logic
            const mcqs = questions.filter(q => q.type === "MCQ" && q.marks === 1);
            const short = questions.filter(q => q.marks === 2);
            const long1 = questions.filter(q => q.marks === 3);
            const caseStudy = questions.filter(q => q.type === "Case Study" || q.marks === 4);
            const long2 = questions.filter(q => q.marks === 5); // Assuming 5 marks are Long Answer II

            const shuffle = (arr: any[]) => arr.sort(() => 0.5 - Math.random());

            selectedQuestions = [
                ...shuffle(mcqs).slice(0, 18),
                ...shuffle(short).slice(0, 6),
                ...shuffle(long1).slice(0, 6),
                ...shuffle(caseStudy).slice(0, 3),
                ...shuffle(long2).slice(0, 4),
            ].map(q => q.id);

        } else if (config.mode === "custom") {
            // Filter by Chapter (if selected)
            if (config.chapters && config.chapters.length > 0) {
                const selectedNames = config.chapters.map(index => chapters[index - 1]);
                // Include "Management of Sporting Events" if "Planning in Sports" (ID 1) is selected
                if (config.chapters.includes(1)) {
                    selectedNames.push("Management of Sporting Events" as any);
                }
                pool = pool.filter(q => (selectedNames as string[]).includes(q.chapter));
            }

            // Filter by Type
            if (config.types) {
                pool = pool.filter((q) => {
                    const type = q.type;
                    const marks = q.marks;
                    if (config.types?.includes("MCQ") && type === "MCQ" && marks === 1) return true;
                    if (config.types?.includes("Short") && marks === 2) return true;
                    if (config.types?.includes("Long") && marks === 3) return true;
                    if (config.types?.includes("Case Study") && (type === "Case Study" || marks === 4)) return true;
                    if (config.types?.includes("Very Long") && marks === 5) return true;
                    return false;
                });
            }

            const shuffled = pool.sort(() => 0.5 - Math.random());
            selectedQuestions = shuffled.slice(0, config.count || 20).map(q => q.id);
        }

        if (selectedQuestions.length > 0) {
            router.push(`/test?ids=${selectedQuestions.join(",")}&mode=custom`);
        }
    };

    return (
        <div className="min-h-screen px-4 md:px-6 pt-8">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-6xl mx-auto mb-8"
            >
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    Previous Year Questions
                </h1>
                <p className="text-xs text-purple-600/60 dark:text-purple-300/60">
                    Chapter-wise questions with solutions • Years 2022–2026
                </p>
            </motion.div>

            {/* Take Test Cards */}
            <div className="max-w-6xl mx-auto mb-8">
                <p className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-purple-300/50 mb-3">Take Full Test (With Solutions)</p>
                <div className="flex flex-col gap-4">
                    {/* Main Board Exams */}
                    <div className="flex gap-3 overflow-x-auto pb-2">
                        {[2025, 2024, 2023].map((year, i) => (
                            <Link key={`${year}-main`} href={`/test?year=${year}&type=Main`}>
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ scale: 1.03 }}
                                    className="flex-shrink-0 px-5 py-3 rounded-xl backdrop-blur-sm bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-400/15 hover:border-purple-400/30 transition-all duration-500 flex items-center gap-3 cursor-pointer"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-600 dark:text-purple-300/90">
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                    </svg>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-gray-900 dark:text-white">{year} Board Exam</span>
                                        <span className="text-[9px] text-purple-600/60 dark:text-purple-300/50">Full Length Test</span>
                                    </div>
                                    <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-purple-300">
                                        3hr
                                    </span>
                                </motion.div>
                            </Link>
                        ))}
                    </div>

                    {/* Compartment Exams */}
                    <div className="flex gap-3 overflow-x-auto pb-2">
                        {[2025, 2024, 2023].map((year, i) => (
                            <Link key={`${year}-comp`} href={`/test?year=${year}&type=Compartment`}>
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: (i + 3) * 0.1 }}
                                    whileHover={{ scale: 1.03 }}
                                    className="flex-shrink-0 px-5 py-3 rounded-xl backdrop-blur-sm bg-amber-50/50 dark:bg-amber-500/5 border border-amber-200/50 dark:border-amber-400/10 hover:border-amber-400/30 transition-all duration-500 flex items-center gap-3 cursor-pointer"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-600 dark:text-amber-400/90">
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                    </svg>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-gray-900 dark:text-white">{year} Compartment</span>
                                        <span className="text-[9px] text-amber-600/60 dark:text-amber-400/50">Practice Test</span>
                                    </div>
                                    <span className={`text-[9px] px-1.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-300`}>
                                        3hr
                                    </span>
                                </motion.div>
                            </Link>
                        ))}
                    </div>

                    {/* Sample Papers */}
                    <div className="flex gap-3 overflow-x-auto pb-2">
                        {[2026, 2025, 2024, 2023].map((year, i) => (
                            <Link key={`${year}-sample`} href={`/test?year=${year}&type=Sample`}>
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: (i + 6) * 0.1 }}
                                    whileHover={{ scale: 1.03 }}
                                    className="flex-shrink-0 px-5 py-3 rounded-xl backdrop-blur-sm bg-blue-50/50 dark:bg-blue-500/5 border border-blue-200/50 dark:border-blue-400/10 hover:border-blue-400/30 transition-all duration-500 flex items-center gap-3 cursor-pointer"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-600 dark:text-blue-400/90">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                        <polyline points="14 2 14 8 20 8"></polyline>
                                        <line x1="16" y1="13" x2="8" y2="13"></line>
                                        <line x1="16" y1="17" x2="8" y2="17"></line>
                                        <polyline points="10 9 9 9 8 9"></polyline>
                                    </svg>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-gray-900 dark:text-white">{year} Sample Paper</span>
                                        <span className="text-[9px] text-blue-600/60 dark:text-blue-400/50">Official SQP</span>
                                    </div>
                                    <span className={`text-[9px] px-1.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-300`}>
                                        3hr
                                    </span>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>



            {/* Year selector */}
            <div className="max-w-6xl mx-auto mb-6">
                <div className="flex gap-2 overflow-x-auto pb-2 pt-4">
                    <button
                        onClick={() => setSelectedYears([])}
                        className={`flex-shrink-0 px-4 py-2.5 rounded-xl text-sm font-medium transition-all border ${selectedYears.length === 0
                            ? "bg-purple-500/15 border-purple-400/25 text-purple-700 dark:text-white"
                            : "bg-gray-100 dark:bg-white/[0.03] border-gray-200 dark:border-white/[0.06] text-gray-500 dark:text-purple-300/60 hover:border-gray-300 dark:hover:border-white/[0.12]"
                            }`}
                    >
                        All Years
                    </button>
                    {years.map((year) => (
                        <button
                            key={year}
                            onClick={() => setSelectedYears(prev =>
                                prev.includes(year) ? prev.filter(v => v !== year) : [...prev, year]
                            )}
                            className={`relative flex-shrink-0 px-4 py-2.5 rounded-xl text-sm font-medium transition-all border ${selectedYears.includes(year)
                                ? "bg-purple-500/15 border-purple-400/25 text-purple-700 dark:text-white"
                                : "bg-gray-100 dark:bg-white/[0.03] border-gray-200 dark:border-white/[0.06] text-gray-500 dark:text-purple-300/60 hover:border-gray-300 dark:hover:border-white/[0.12]"
                                } ${year === 2026 ? "animate-pulse-glow" : ""}`}
                        >
                            {year}
                            {year === 2026 && (
                                <span className="absolute -top-3 -right-2 text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white shadow-lg shadow-fuchsia-500/20 border border-white/10 tracking-wide">
                                    NEW
                                </span>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Filter bar */}
            <div className="max-w-6xl mx-auto mb-6">
                <div className="flex flex-wrap gap-2">


                    <div className="flex items-center gap-1.5 rounded-xl bg-gray-100 dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06] px-3 py-2">
                        <span className="text-[11px] text-gray-500 dark:text-purple-300/80 mr-1">Type:</span>
                        {["MCQ", "Short", "Long", "Very Long", "Case Study"].map((t) => (
                            <button
                                key={t}
                                onClick={() => setTypeFilters(prev =>
                                    prev.includes(t) ? prev.filter(v => v !== t) : [...prev, t]
                                )}
                                className={`text-[11px] px-2 py-0.5 rounded-full transition-all ${typeFilters.includes(t)
                                    ? "bg-purple-500/20 text-purple-700 dark:text-white"
                                    : "bg-white dark:bg-white/[0.04] text-gray-500 dark:text-purple-300/80 hover:text-gray-900 dark:hover:text-white"
                                    }`}
                            >
                                {t}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-1.5 rounded-xl bg-gray-100 dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06] px-3 py-2">
                        <span className="text-[11px] text-gray-500 dark:text-purple-300/80 mr-1">Exam:</span>
                        {["Main", "Compartment", "Sample"].map((e) => (
                            <button
                                key={e}
                                onClick={() => setExamTypeFilters(prev =>
                                    prev.includes(e as 'Main' | 'Compartment' | 'Sample') ? prev.filter(v => v !== e) : [...prev, e as 'Main' | 'Compartment' | 'Sample']
                                )}
                                className={`text-[11px] px-2.5 py-0.5 rounded-full transition-all ${examTypeFilters.includes(e as 'Main' | 'Compartment' | 'Sample')
                                    ? "bg-fuchsia-500/20 text-fuchsia-700 dark:text-white"
                                    : "bg-white dark:bg-white/[0.04] text-gray-500 dark:text-purple-300/80 hover:text-gray-900 dark:hover:text-white"
                                    }`}
                            >
                                {e}
                            </button>
                        ))}
                    </div>

                    {/* Status Filters Display (Optional, or integrated into clear all) */}
                    {statusFilter && (
                        <div className="flex items-center gap-1.5 rounded-xl bg-purple-500/10 border border-purple-500/20 px-3 py-2">
                            <span className="text-[11px] text-purple-700 dark:text-purple-300">
                                Showing: <span className="font-bold uppercase">{statusFilter}</span>
                            </span>
                            <button onClick={() => setStatusFilter(null)} className="ml-1 text-purple-500 hover:text-purple-700">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                        </div>
                    )}


                    {(marksFilters.length > 0 || typeFilters.length > 0 || selectedYears.length > 0 || statusFilter || examTypeFilters.length > 0) && (
                        <button
                            onClick={() => {
                                setMarksFilters([]);
                                setTypeFilters([]);
                                setSelectedYears([]);
                                setStatusFilter(null);
                                setExamTypeFilters([]);
                            }}
                            className="text-[11px] px-3 py-2 rounded-xl bg-red-500/8 text-purple-300/90 hover:bg-red-500/15 transition-colors"
                        >
                            Clear All
                        </button>
                    )}
                </div>
            </div>

            {/* Stats */}
            <div className="max-w-6xl mx-auto mb-6">
                <div onClick={() => setStatusFilter(prev => prev === 'attempted' ? null : 'attempted')}>
                    <LiquidCard disableHover={true} className={`!rounded-xl cursor-pointer transition-all ${statusFilter === 'attempted' ? 'ring-2 ring-purple-500/50' : 'hover:ring-1 hover:ring-purple-500/30'}`}>
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 px-5 py-4">
                            {/* Left: Quick Counts */}
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-2 px-2 py-1 rounded-lg">
                                        <div className="p-1 rounded bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                                        </div>
                                        <span className="text-xs font-medium text-gray-900 dark:text-white">
                                            {Object.values(stats).filter(s => s.correct).length}
                                        </span>
                                        <span className="text-[10px] text-gray-400 dark:text-purple-300/40 uppercase tracking-wide">Correct</span>
                                    </div>

                                    <div className="w-px h-4 bg-white/10 mx-1" />

                                    <div className="flex items-center gap-1 text-xs text-gray-400 dark:text-purple-300/40 transition-colors">
                                        <span>/ {Object.values(stats).filter(s => s.attempted).length} Attempted</span>
                                    </div>
                                </div>

                                <div className="text-[10px] text-gray-400 dark:text-purple-300/50 flex gap-2 mt-1">
                                    <span>Avg Time: {
                                        (() => {
                                            const attempted = Object.values(stats).filter(s => s.timeSpent > 0);
                                            if (attempted.length === 0) return "0s";
                                            const total = attempted.reduce((acc, curr) => acc + curr.timeSpent, 0);
                                            return Math.round(total / attempted.length) + "s";
                                        })()
                                    }</span>
                                </div>
                            </div>

                            {/* Right: Filters */}
                            <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
                                <button
                                    onClick={() => {
                                        const params = new URLSearchParams();
                                        params.set("filter", "attempted");
                                        params.set("mode", "practice");
                                        if (selectedYears.length > 0) {
                                            params.set("years", selectedYears.join(','));
                                        }
                                        router.push(`/test?${params.toString()}`);
                                    }}
                                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg border bg-white dark:bg-white/[0.04] border-gray-200 dark:border-white/[0.08] text-gray-500 dark:text-purple-300/70 hover:text-gray-900 dark:hover:text-white transition-all text-xs font-medium active:scale-95 shadow-sm"
                                >
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 3l14 9-14 9V3z" />
                                    </svg>
                                    Practice Attempted
                                </button>

                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIsTestModalOpen(true);
                                    }}
                                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg border bg-white dark:bg-white/[0.04] border-gray-200 dark:border-white/[0.08] text-gray-500 dark:text-purple-300/70 hover:text-gray-900 dark:hover:text-white transition-all text-xs font-medium active:scale-95 shadow-sm"
                                >
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                                    </svg>
                                    Generate Test
                                </button>
                                <button
                                    onClick={() => setShowBookmarksOnly(!showBookmarksOnly)}
                                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all text-xs font-medium ${showBookmarksOnly
                                        ? "bg-blue-100 dark:bg-blue-500/10 border-blue-300 dark:border-blue-500/30 text-blue-700 dark:text-blue-300"
                                        : "bg-white dark:bg-white/[0.04] border-gray-200 dark:border-white/[0.08] text-gray-500 dark:text-purple-300/70 hover:text-gray-900 dark:hover:text-white"}`}
                                >
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill={showBookmarksOnly ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                    </svg>
                                    Bookmarked ({Object.keys(bookmarks).length})
                                </button>
                                <div className="text-[11px] text-gray-400 dark:text-purple-300/50">
                                    {filteredQuestions.length} Questions
                                </div>
                            </div>
                        </div>
                    </LiquidCard>
                </div>
            </div>

            {/* Bookmark Group Controls (Only Visible when Bookmarks Filter is Active) */}
            <AnimatePresence>
                {showBookmarksOnly && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="max-w-6xl mx-auto mb-6 flex justify-end"
                    >
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
                                                    const count = Object.values(bookmarks).filter(gid => gid === group.id).length;
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
                    </motion.div>
                )}
            </AnimatePresence>

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

            <TestGenModal
                isOpen={isTestModalOpen}
                onClose={() => setIsTestModalOpen(false)}
                onGenerate={handleGenerateTest}
                totalQuestions={questions.length}
            />

            {/* Questions */}
            <div className="max-w-6xl mx-auto space-y-3">
                <AnimatePresence mode="popLayout">
                    {filteredQuestions.map((q, i) => {
                        const getExamType = (source: string) => {
                            const s = source.toLowerCase();
                            if (s.includes("compartment")) return "Compartment";
                            if (s.includes("sample")) return "Sample";
                            return "Main";
                        };
                        const type = getExamType(q.source);

                        return (
                            <QuestionCard
                                key={q.id}
                                question={q}
                                index={i}
                                onClick={() => {
                                    if (showBookmarksOnly) {
                                        router.push(`/test?bookmarkGroupId=${selectedGroupId}&answers=true&questionId=${q.id}`);
                                    } else {
                                        router.push(`/test?year=${q.year}&questionId=${q.id}&mode=practice&type=${type}`);
                                    }
                                }}
                                showStatusBadge={showBookmarksOnly}
                            />
                        );
                    })}
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
    );
}

export default function YearlyPage() {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen flex items-center justify-center">
                    <p className="text-purple-300/50 text-sm">Loading...</p>
                </div>
            }
        >
            <YearlyPageContent />
        </Suspense>
    );
}



/* Initial release of PhysEd-Pro */
