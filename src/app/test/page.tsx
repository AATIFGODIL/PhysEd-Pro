"use client";

import { useState, useMemo, useEffect, Suspense, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";
import { questions } from "@/data/questions";
import { searchQuestions, parseSearchQuery } from "@/lib/search"; // Added import
import { useQuiz } from "@/context/QuizContext";
import { BookmarkButton } from "@/components/BookmarkButton";

type QuestionStatus = "not-seen" | "seen" | "attempted" | "correct" | "wrong";

function TestPageContent() {
    const searchParams = useSearchParams();
    const router = useRouter();

    // Params
    const bookmarkGroupId = searchParams.get("bookmarkGroupId");
    const { bookmarks, stats, updateQuestionStat } = useQuiz();

    const yearParam = searchParams.get("year");
    const year = yearParam ? parseInt(yearParam) : null;
    const type = searchParams.get("type") || "Main";
    const chapter = searchParams.get("chapter");
    const questionId = searchParams.get("questionId");

    // Search Mode Logic
    const searchParam = searchParams.get("search");

    // Mode Logic (Backward compatibility: answers=true -> mode=practice)
    const modeParam = searchParams.get("mode");
    const answersParam = searchParams.get("answers");
    const isPracticeMode = modeParam === "practice" || answersParam === "true";
    const showAnswers = isPracticeMode;

    // Filter Questions
    const testQuestions = useMemo(() => {
        const filter = searchParams.get("filter");
        if (filter === "attempted") {
            let filtered = questions.filter(q => stats[q.id]?.attempted);

            // If specific filters were passed with the attempted filter
            if (chapter) {
                filtered = filtered.filter(q => q.chapter === chapter);
            }

            const yearsStr = searchParams.get("years");
            if (yearsStr) {
                const yearList = yearsStr.split(',').map(Number);
                filtered = filtered.filter(q => yearList.includes(q.year));
            }

            // Standard sorting for practice mode: Marks (asc), Year (desc)
            filtered = filtered.sort((a, b) => {
                if (a.marks !== b.marks) return a.marks - b.marks;
                if (a.year !== b.year) return b.year - a.year;
                return 0;
            });

            return filtered;
        }

        if (bookmarkGroupId) {
            // Filter by bookmarks
            const targetIds = bookmarkGroupId === "all"
                ? Object.keys(bookmarks)
                : Object.keys(bookmarks).filter(id => bookmarks[id] === bookmarkGroupId);

            const bQuestions = questions.filter(q => targetIds.includes(q.id));

            // Reorder if questionId is present (start with clicked)
            if (questionId) {
                const clickedIndex = bQuestions.findIndex(q => q.id === questionId);
                if (clickedIndex > -1) {
                    const clickedQ = bQuestions[clickedIndex];
                    const others = bQuestions.filter(q => q.id !== questionId);
                    return [clickedQ, ...others];
                }
            }
            return bQuestions;
        }

        if (searchParam) {
            const searchResults = searchQuestions(decodeURIComponent(searchParam));
            // Reorder if questionId is present
            if (questionId && isPracticeMode) {
                const clickedIndex = searchResults.findIndex(q => q.id === questionId);
                if (clickedIndex > -1) {
                    const clickedQ = searchResults[clickedIndex];
                    const others = searchResults.filter(q => q.id !== questionId);
                    return [clickedQ, ...others];
                }
            }
            return searchResults;
        }

        if (chapter) {
            let chQuestions = questions.filter(q => q.chapter === chapter);

            if (isPracticeMode) {
                chQuestions = chQuestions.sort((a, b) => {
                    // 1. Sort by Marks (Ascending)
                    if (a.marks !== b.marks) {
                        return a.marks - b.marks;
                    }

                    // 2. Sort by Year (Descending - 2026, 2025, ...)
                    if (a.year !== b.year) {
                        return b.year - a.year;
                    }

                    // 3. Sort by Source Priority within the same year
                    // Order: Main Board > Compartment > Sample Paper
                    const getSourcePriority = (source: string) => {
                        const s = source.toLowerCase();
                        if (s.includes("sample")) return 3;
                        if (s.includes("compartment")) return 2;
                        return 1;
                    };

                    return getSourcePriority(a.source) - getSourcePriority(b.source);
                });
            }

            return chQuestions;
        }

        if (year) {
            return questions.filter((q) => {
                const isMatch = q.year === year;
                if (!isMatch) return false;

                const source = q.source.toLowerCase();

                if (type === "Compartment") return source.includes("compartment");
                if (type === "Sample") return source.includes("sample");

                // Main (Default): Exclude both Compartment and Sample
                return !source.includes("compartment") && !source.includes("sample");
            });
        }

        return [];
    }, [year, type, chapter, questionId, isPracticeMode, searchParam, bookmarkGroupId, bookmarks, stats, searchParams]);

    const [currentIndex, setCurrentIndex] = useState(0);

    // Initial Index Logic
    useEffect(() => {
        if ((year || chapter) && questionId && testQuestions.length > 0) {
            const idx = testQuestions.findIndex(q => q.id === questionId);
            if (idx > -1) setCurrentIndex(idx);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [year, chapter, questionId, testQuestions.length]);

    const [started, setStarted] = useState(isPracticeMode); // Auto-start in practice mode

    const [questionTimes, setQuestionTimes] = useState<Record<number, number>>({});
    const [statusMap, setStatusMap] = useState<Record<number, QuestionStatus>>({});
    const [showAnswer, setShowAnswer] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);

    // const { stats, updateQuestionStat } = useQuiz(); // Moved up

    const currentQ = testQuestions[currentIndex];
    const currentChapter = currentQ?.chapter || "Physics";
    const totalMarks = testQuestions.reduce((s, q) => s + q.marks, 0);

    const [timeLeft, setTimeLeft] = useState(testQuestions.length > 30 ? 3 * 60 * 60 : testQuestions.length * 3 * 60); // Dynamic time based on question count approx? Or just keep 3 hours for full test.
    // Actually for chapters practice, timer isn't critical but good to have.

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    // Sync with global stats (Always sync to local for navigation colors)
    useEffect(() => {
        if (!isLoaded || !testQuestions) return;

        const newStatusMap = { ...statusMap };
        const newQuestionTimes = { ...questionTimes };
        let hasUpdates = false;

        testQuestions.forEach((q, idx) => {
            const stat = stats[q.id];
            if (stat) {
                if (stat.attempted && !newStatusMap[idx]) {
                    if (stat.correct !== undefined) {
                        // In Test Mode (showAnswers=false), hide correct/wrong status on sidebar
                        if (!showAnswers) {
                            newStatusMap[idx] = "attempted";
                        } else {
                            newStatusMap[idx] = stat.correct ? "correct" : "wrong";
                        }
                    } else {
                        newStatusMap[idx] = "attempted";
                    }
                    hasUpdates = true;
                }
                if (stat.timeSpent > (newQuestionTimes[idx] || 0)) {
                    newQuestionTimes[idx] = stat.timeSpent;
                    hasUpdates = true;
                }
            }
        });

        if (hasUpdates) {
            setStatusMap(newStatusMap);
            setQuestionTimes(newQuestionTimes);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoaded, stats, showAnswers, testQuestions]);

    // Timer Logic
    useEffect(() => {
        if (!started || showAnswer) return;

        const interval = setInterval(() => {
            setQuestionTimes((prev) => ({
                ...prev,
                [currentIndex]: (prev[currentIndex] || 0) + 1
            }));

            if (!showAnswers) {
                setTimeLeft((prev) => (prev <= 0 ? 0 : prev - 1));
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [started, showAnswers, currentIndex, showAnswer]);

    // Mark as seen
    useEffect(() => {
        if (!started || !currentQ) return;
        setStatusMap((prev) => {
            if (prev[currentIndex]) return prev;
            return { ...prev, [currentIndex]: "seen" };
        });
    }, [currentIndex, started, currentQ]);

    const formatTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    };

    const goTo = useCallback((idx: number) => {
        if (idx >= 0 && idx < testQuestions.length) {
            setCurrentIndex(idx);
            setShowAnswer(false);
            setSelectedOption(null);

            // Update URL with new questionId without reloading
            const nextQ = testQuestions[idx];
            if (nextQ) {
                const params = new URLSearchParams(window.location.search);
                params.set("questionId", nextQ.id);
                // Use replace to avoid filling history stack too much, or push if back button should work per question
                // User asked for "changing question IDs as soon as keyboard command or prev next"
                // Usually replace is better for rapid navigation, but push allows back button. 
                // Let's use replace for now to keep history clean, or maybe push?
                // "change link of the page" implies URL update.
                window.history.replaceState(null, "", `?${params.toString()}`);
            }
        }
    }, [testQuestions]);

    const getCorrectOptionLabel = (q: typeof currentQ) => {
        if (!q || q.type !== "MCQ") return null;
        let ans = q.answer.trim();

        // 1. Try prefix matching
        // Covers: (A), (a), A), a)
        const match = ans.match(/^[\(]?([a-d])[\)]?/i);
        if (match && match[1]) {
            // Validate if it looks like an option prefix (sometimes answer text starts with a word that starts with a/b/c/d)
            // Usually option prefixes are at the very start.

            // Additional safety: matching 'A.' or 'A)' or '(A)' explicitly without following text confusion?
            // The previous regex `^\(([a-d])\)` was specific.
            // Let's stick to identifying if the answer *starts* with an option indicator.

            // If answer is just "Deaflympics", it starts with D. But is D the option?
            // We must be careful. If options are present, text matching is safer unless there is a clear (A) prefix.

            // If the answer string clearly starts with (A), (B), (C), (D) or A., B. etc.
            const prefixMatch = ans.match(/^[\(]?([A-D])[\)\.]\s/i) || ans.match(/^[\(]?([A-D])[\)\.]$/i);
            if (prefixMatch) return prefixMatch[1].toUpperCase();
        }

        // 2. Try text matching with options
        if (q.options) {
            // Clean the answer text: remove leading (A) etc if present, though we checked prefix above.
            // Also remove trailing dots or whitespace.
            const cleanAns = ans.replace(/^[\(]?[A-D][\)\.]\s*/i, "").toLowerCase().trim();

            const index = q.options.findIndex(opt => {
                const cleanOpt = opt.toLowerCase().trim();
                return cleanAns === cleanOpt || cleanAns.includes(cleanOpt) || cleanOpt.includes(cleanAns);
            });

            if (index !== -1) return String.fromCharCode(65 + index); // 0->A, 1->B...
        }
        return null;
    };

    const handleToggleShowAnswer = () => {
        const newState = !showAnswer;
        setShowAnswer(newState);

        if (showAnswers && newState) {
            // Logic for when answer is REVEALED
            if (currentQ.type.toUpperCase() !== "MCQ") {
                setStatusMap((prev) => ({ ...prev, [currentIndex]: "attempted" }));
                updateQuestionStat(currentQ.id, {
                    attempted: true,
                    timeSpent: questionTimes[currentIndex] || 0
                });
            } else if (selectedOption) {
                const correctLabel = getCorrectOptionLabel(currentQ);

                if (correctLabel) {
                    const isCorrect = selectedOption === correctLabel;
                    // IMPORTANT: Updating statusMap triggers the red/green dots in sidebar
                    setStatusMap((prev) => ({ ...prev, [currentIndex]: isCorrect ? "correct" : "wrong" }));
                    updateQuestionStat(currentQ.id, {
                        attempted: true,
                        correct: isCorrect,
                        selectedOption: selectedOption || undefined,
                        timeSpent: questionTimes[currentIndex] || 0
                    });
                } else {
                    // Fallback if we can't determine correct label
                    setStatusMap((prev) => ({ ...prev, [currentIndex]: "attempted" }));
                }
            } else {
                // MCQ but no option selected - just show answer, mark as seen/attempted?
                setStatusMap((prev) => {
                    if (prev[currentIndex] === 'correct' || prev[currentIndex] === 'wrong') return prev;
                    return { ...prev, [currentIndex]: "seen" };
                });
            }
        }
    };

    const handleNext = () => {
        // Evaluate and update stats when clicking Next
        if (!showAnswers) {
            // Safe type check
            const isMCQ = currentQ.type.trim().toUpperCase() === "MCQ";

            if (isMCQ) {
                if (selectedOption) {
                    const correctLabel = getCorrectOptionLabel(currentQ);

                    if (correctLabel) {
                        const isCorrect = selectedOption === correctLabel;
                        // For Test Mode: Mark as 'attempted' locally so sidebar doesn't spoil answer
                        setStatusMap((prev) => ({ ...prev, [currentIndex]: "attempted" }));
                        // But update GLOBAL stats with actual result for Dashboard
                        updateQuestionStat(currentQ.id, {
                            attempted: true,
                            correct: isCorrect,
                            selectedOption: selectedOption || undefined,
                            timeSpent: questionTimes[currentIndex] || 0
                        });
                    }
                } else {
                    // MCQ skipped (no option selected)
                }

            } else {
                // Non-MCQ: Mark as attempted
                setStatusMap((prev) => ({ ...prev, [currentIndex]: "attempted" }));
                updateQuestionStat(currentQ.id, {
                    attempted: true,
                    timeSpent: questionTimes[currentIndex] || 0
                });
            }
        }
        goTo(currentIndex + 1);
    };

    const handleSelectOption = (opt: string) => {
        // Allow changing option until result is locked (correct/wrong)
        // In Test Mode (showAnswers=false), we allowing changing freely until Next/Check confirms it.
        // Once confirmed (statusMap has correct/wrong), we lock it?
        // Actually, for Test Mode, verification happens on Next. So until then, user can change mind.
        // Once verified (e.g. going back to previous question), it should be locked IF we want that.
        // Let's lock it if it is already graded.

        if (statusMap[currentIndex] === 'correct' || statusMap[currentIndex] === 'wrong') return;
        setSelectedOption(opt);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") {
                handleNext();
            } else if (e.key === "ArrowLeft") {
                if (currentIndex > 0) goTo(currentIndex - 1);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [currentIndex, goTo, handleNext]);


    const counts = useMemo(() => {
        const c = { correct: 0, wrong: 0, attempted: 0, seen: 0, notSeen: 0 };
        for (let i = 0; i < testQuestions.length; i++) {
            const s = statusMap[i] || "not-seen";
            if (s === "correct") c.correct++;
            else if (s === "wrong") c.wrong++;
            else if (s === "attempted") c.attempted++;
            else if (s === "seen") c.seen++;
            else c.notSeen++;
        }
        return c;
    }, [statusMap, testQuestions.length]);

    const getStatusColor = (status: QuestionStatus) => {
        switch (status) {
            case "correct": return "bg-emerald-100 dark:bg-emerald-500 text-emerald-700 dark:text-white";
            case "wrong": return "bg-red-100 dark:bg-red-500 text-red-700 dark:text-white";
            case "attempted": return "bg-amber-100 dark:bg-amber-500 text-amber-700 dark:text-white";
            case "seen": return "bg-purple-100 dark:bg-white/[0.12] text-purple-700 dark:text-purple-300";
            default: return "bg-gray-100 dark:bg-white/[0.06] text-gray-500 dark:text-purple-300/80";
        }
    };

    const mcqOptions = useMemo(() => {
        if (!currentQ || currentQ.type !== "MCQ") return null;
        if (currentQ.options && currentQ.options.length > 0) {
            return currentQ.options.map((text, idx) => ({
                label: String.fromCharCode(65 + idx),
                text: text
            }));
        }
        return null;
    }, [currentQ]);


    // Grouping Logic
    const groupedQuestions = useMemo(() => {
        if (!testQuestions || testQuestions.length === 0) return null;

        // Determine grouping mode
        let groupBy: "year" | "marks" | null = null;

        if (searchParam) {
            const { year, marks } = parseSearchQuery(decodeURIComponent(searchParam));
            // If searching for MARKS and NOT Year -> Group by Year
            if (marks && !year) {
                groupBy = "year";
            }
            // If searching for CHAPTER (or context is chapter) -> Group by Marks
        }

        if (chapter || searchParams.get("filter") === "attempted") {
            groupBy = "marks";
        }

        if (!groupBy) return null;

        const groups: Record<string, number[]> = {};

        testQuestions.forEach((q, idx) => {
            let key = "";
            if (groupBy === "year") {
                key = q.year.toString();
            } else if (groupBy === "marks") {
                key = `${q.marks} Mark${q.marks > 1 ? 's' : ''}`;
            }
            if (!groups[key]) groups[key] = [];
            groups[key].push(idx);
        });

        // Sort keys
        const sortedKeys = Object.keys(groups).sort((a, b) => {
            if (groupBy === "year") return parseInt(b) - parseInt(a); // Descending Year
            if (groupBy === "marks") return parseInt(a) - parseInt(b); // Ascending Marks
            return 0;
        });

        return { groupBy, groups, sortedKeys };

    }, [testQuestions, searchParam, chapter]);

    if (!started) {
        const sections = [
            { type: "MCQ", count: testQuestions.filter(q => q.type === "MCQ").length },
            { type: "Short Answer", count: testQuestions.filter(q => q.type === "Short").length },
            { type: "Case Study", count: testQuestions.filter(q => q.type === "Case Study").length },
            { type: "Long Answer", count: testQuestions.filter(q => (q.type === "Long" || q.marks === 3 || q.marks === 4) && q.type !== "Case Study").length },
            { type: "Very Long Answer", count: testQuestions.filter(q => q.marks === 5).length },
        ].filter(s => s.count > 0);

        return (
            <div className={`min-h-screen flex items-center justify-center px-4 transition-colors duration-500 ${showAnswers ? "bg-white dark:bg-black" : "bg-purple-50/50 dark:bg-black"}`}>
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-md w-full">
                    <div className={`rounded-2xl backdrop-blur-[24px] border p-8 text-center shadow-xl dark:shadow-none transition-colors duration-500 ${showAnswers ? "bg-white dark:bg-white/[0.04] border-gray-200 dark:border-white/[0.08]" : "bg-white/80 dark:bg-white/[0.04] border-purple-200 dark:border-purple-500/20"}`}>
                        <p className="text-[10px] uppercase tracking-[0.3em] text-purple-600/70 dark:text-purple-300/70 mb-3">CBSE Board Examination</p>
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{searchParam ? `Search: "${searchParam}"` : (chapter ? (chapter === "All Chapters" ? "Practice Mode" : chapter) : `${year} ${type === "Compartment" ? "C" : ""}`)}</h1>
                        <p className="text-sm text-purple-600/80 dark:text-purple-300/80 mb-1">Physical Education — Class XII</p>
                        <p className="text-xs text-purple-600/60 dark:text-purple-300/60 mb-8">{testQuestions.length} questions • {totalMarks} marks • {showAnswers ? "Practice Mode" : "3 Hours"}</p>
                        <div className="space-y-2 mb-8 text-left">
                            {sections.map((sec) => (
                                <div key={sec.type} className="flex items-center justify-between text-[11px] px-3 py-2 rounded-lg bg-gray-100 dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06]">
                                    <span className="text-gray-700 dark:text-purple-300/90">{sec.type}</span>
                                    <span className="text-gray-500 dark:text-purple-300/60">{sec.count} Q</span>
                                </div>
                            ))}
                        </div>
                        <button onClick={() => setStarted(true)} className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600/30 to-fuchsia-600/30 dark:from-purple-500/30 dark:to-fuchsia-500/30 border border-purple-400/25 hover:border-purple-400/50 text-purple-900 dark:text-white font-medium text-sm transition-all hover:scale-[1.02]">Start Test</button>
                        <button onClick={() => router.back()} className="w-full mt-3 py-2.5 rounded-xl bg-gray-100 dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06] text-gray-600 dark:text-purple-300/70 text-xs transition-all hover:text-gray-900 dark:hover:text-purple-300/90">Go Back</button>
                    </div>
                </motion.div>
            </div>
        );
    }

    if (!currentQ) return null;

    return (
        <div className={`min-h-screen flex flex-col transition-colors duration-500 ${showAnswers ? "bg-white dark:bg-black" : "bg-[#fcfaff] dark:bg-black"}`}>
            {/* Header */}
            <div className={`flex items-center gap-3 px-4 py-3 border-b transition-colors duration-500 ${showAnswers ? "border-gray-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02]" : "border-purple-100 dark:border-white/[0.06] bg-white/60 backdrop-blur-md dark:bg-white/[0.02]"}`}>
                <button
                    onClick={() => {
                        if (bookmarkGroupId) {
                            router.push('/bookmarks');
                        } else if (searchParam) {
                            router.back();
                        } else if (chapter) {
                            router.push(`/chapters?chapter=${encodeURIComponent(chapter)}`);
                        } else {
                            router.push(`/yearly?year=${year}`);
                        }
                    }}
                    className="text-gray-500 dark:text-purple-300/80 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5" /><polyline points="12 19 5 12 12 5" /></svg>
                </button>
                <h1 className="text-sm font-semibold text-gray-900 dark:text-white flex-1 truncate">{currentChapter}</h1>
                {searchParams.get("filter") === "attempted" && (
                    <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500 dark:text-purple-300/60 transition-colors">
                            Attempted Questions
                        </span>
                    </div>
                )}
            </div>

            {/* Navigation Bar */}
            <div className={`flex items-center justify-between px-4 py-2.5 border-b ${showAnswers ? "bg-gray-50 dark:bg-white/[0.01]" : "bg-purple-50/30 dark:bg-white/[0.01]"}`}>
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar flex-1 mr-2">
                    {testQuestions.map((_, idx) => (
                        <button key={idx} onClick={() => goTo(idx)} className={`flex-shrink-0 w-8 h-8 rounded-lg text-[11px] font-semibold transition-all ${idx === currentIndex ? "bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white ring-2 ring-purple-400/50 scale-110" : getStatusColor(statusMap[idx] || "not-seen")}`}>
                            {idx + 1}
                        </button>
                    ))}
                </div>
                <button onClick={() => setSidebarOpen(!sidebarOpen)} className="flex-shrink-0 p-1.5 text-gray-500 dark:text-purple-300/70 hover:text-gray-900 dark:hover:text-white transition-colors border-l pl-3 ml-1 border-gray-200 dark:border-white/[0.1]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
                </button>
            </div>

            {/* Content */}
            <div className="flex flex-1 overflow-hidden">
                <div className="flex-1 flex flex-col overflow-y-auto p-6">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-[10px] font-bold px-2 py-1 rounded-md bg-purple-500/15 text-white">Q{currentIndex + 1}</span>
                        <span className="text-[10px] text-gray-500 dark:text-purple-300/70 font-mono">{formatTime(showAnswers ? (questionTimes[currentIndex] || 0) : timeLeft)}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-fuchsia-500/10 text-purple-300/90">+{currentQ.marks}</span>
                        <div className="ml-auto flex gap-1.5">
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-gray-900 dark:text-blue-300">{currentQ.source}</span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/10 text-gray-900 dark:text-purple-300/80">{currentQ.type}</span>
                            <BookmarkButton questionId={currentQ.id} size={18} className="hover:bg-purple-100 dark:hover:bg-purple-500/20" />
                        </div>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div key={currentIndex} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                            <p className="text-[15px] dark:text-white leading-relaxed mb-6 whitespace-pre-line">{currentQ.question}</p>
                            {currentQ.imageUrl && (
                                <div className="mb-6 rounded-xl overflow-hidden border border-gray-200 dark:border-white/[0.1] bg-gray-50 dark:bg-white/[0.02]">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={currentQ.imageUrl}
                                        alt="Question Image"
                                        className="w-full h-auto max-h-[400px] object-contain mx-auto"
                                    />
                                </div>
                            )}
                            {mcqOptions && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                                    {mcqOptions.map((opt) => {
                                        const correctLabel = getCorrectOptionLabel(currentQ);
                                        const isChecked = statusMap[currentIndex] === 'correct' || statusMap[currentIndex] === 'wrong';

                                        let buttonStyle = "bg-white dark:bg-white/[0.02] border-gray-200 dark:border-white/[0.08]";
                                        let badgeStyle = "bg-gray-100 dark:bg-white/[0.06] text-gray-500 dark:text-purple-300/80";

                                        if (isChecked) {
                                            if (opt.label === correctLabel) {
                                                // Correct Option: Green
                                                buttonStyle = "bg-emerald-100 dark:bg-emerald-500/20 border-emerald-300 dark:border-emerald-500/50 ring-1 ring-emerald-400/30";
                                                badgeStyle = "bg-emerald-600 text-white";
                                            } else if (selectedOption === opt.label) {
                                                // Wrong Selected Option: Red
                                                buttonStyle = "bg-red-100 dark:bg-red-500/20 border-red-300 dark:border-red-500/50 ring-1 ring-red-400/30";
                                                badgeStyle = "bg-red-600 text-white";
                                            }
                                        } else {
                                            if (selectedOption === opt.label) {
                                                // Selected (Unchecked): Purple
                                                buttonStyle = "bg-purple-100 dark:bg-purple-500/15 border-purple-300 ring-1 ring-purple-400/20";
                                                badgeStyle = "bg-purple-600 text-white";
                                            }
                                        }

                                        return (
                                            <button
                                                key={opt.label}
                                                onClick={() => handleSelectOption(opt.label)}
                                                className={`text-left p-4 rounded-xl border transition-all flex items-start gap-3 ${buttonStyle}`}
                                            >
                                                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${badgeStyle}`}>
                                                    {opt.label}
                                                </span>
                                                <span className="text-sm dark:text-white mt-1.5">{opt.text}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            )}
                            {showAnswer && (
                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`p-5 rounded-xl border ${statusMap[currentIndex] === 'correct' ? 'bg-emerald-50 dark:bg-emerald-500/[0.06] border-emerald-200 dark:border-emerald-400/15' : statusMap[currentIndex] === 'wrong' ? 'bg-red-50 dark:bg-red-500/[0.06] border-red-200 dark:border-red-400/15' : 'bg-purple-50 dark:bg-purple-500/[0.06] border-purple-200 dark:border-purple-400/15'}`}>
                                    <p className={`text-[10px] uppercase tracking-wider mb-2 font-semibold ${statusMap[currentIndex] === 'correct' ? 'text-emerald-700 dark:text-emerald-400/70' : statusMap[currentIndex] === 'wrong' ? 'text-red-700 dark:text-red-400/70' : 'text-purple-700 dark:text-purple-400/70'}`}>Answer & Solution</p>
                                    <p className="text-sm dark:text-white whitespace-pre-line">{currentQ.answer}</p>
                                </motion.div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Sidebar */}
                {sidebarOpen && (
                    <motion.div initial={{ width: 0 }} animate={{ width: 220 }} className="border-l border-gray-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] hidden md:block p-4 overflow-y-auto">
                        <div className="flex items-center gap-2 mb-4 text-[10px]">
                            <span className="text-emerald-400">●</span><span className="dark:text-purple-300/70">{counts.correct}</span>
                            <span className="text-red-400">●</span><span className="dark:text-purple-300/70">{counts.wrong}</span>
                            <span className="text-blue-400">●</span><span className="dark:text-purple-300/70">{counts.attempted}</span>
                            <span className="text-amber-400">●</span><span className="dark:text-purple-300/70">{counts.seen}</span>
                            <span className="dark:text-purple-300/40">{counts.notSeen}</span>
                        </div>

                        {groupedQuestions ? (
                            <div className="space-y-4">
                                {groupedQuestions.sortedKeys.map((key) => (
                                    <div key={key}>
                                        <h3 className="text-[10px] uppercase font-bold text-gray-400 dark:text-purple-300/40 mb-2 sticky top-0 bg-[#fff]/90 dark:bg-[#000]/90 backdrop-blur-sm z-10 py-1">
                                            {key}
                                        </h3>
                                        <div className="grid grid-cols-5 gap-1.5">
                                            {groupedQuestions.groups[key].map((idx, groupIndex) => (
                                                <button key={idx} onClick={() => goTo(idx)} className={`w-full aspect-square rounded-lg text-[10px] font-semibold flex items-center justify-center transition-all ${idx === currentIndex ? "ring-2 ring-purple-400 bg-purple-500/30 text-purple-700 dark:text-white" : getStatusColor(statusMap[idx] || "not-seen")}`}>
                                                    {groupIndex + 1}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="grid grid-cols-6 gap-1.5">
                                {testQuestions.map((_, idx) => (
                                    <button key={idx} onClick={() => goTo(idx)} className={`w-full aspect-square rounded-lg text-[11px] font-semibold ${idx === currentIndex ? "ring-2 ring-purple-400 bg-purple-500/30" : getStatusColor(statusMap[idx] || "not-seen")}`}>
                                        {idx + 1}
                                    </button>
                                ))}
                            </div>
                        )}
                    </motion.div>
                )}
            </div>

            {/* Footer */}
            <div className={`p-4 border-t flex items-center justify-between ${showAnswers ? "bg-white dark:bg-white/[0.02] border-gray-200 dark:border-white/[0.06]" : "bg-white/60 dark:bg-white/[0.02] border-purple-100 dark:border-white/[0.06]"}`}>
                <div className="flex items-center gap-3">
                    {showAnswers && (
                        <label className="flex items-center gap-2 cursor-pointer">
                            <div onClick={handleToggleShowAnswer} className={`w-10 h-5 rounded-full transition-colors relative ${showAnswer ? "bg-emerald-500" : "bg-gray-200 dark:bg-white/[0.1]"}`}>
                                <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${showAnswer ? "translate-x-5" : "translate-x-0.5"}`} />
                            </div>
                            <span className="text-xs text-gray-500 dark:text-purple-300/80">Show Answer</span>
                        </label>
                    )}
                </div>
                <div className="flex items-center gap-2">
                    {/* Check Button: Only for Practice Mode and MCQs */}
                    {isPracticeMode && currentQ.type === "MCQ" && (
                        <button
                            onClick={() => {
                                // Explicit Check for MCQs
                                setShowAnswer(true);

                                if (selectedOption) {
                                    const correctLabel = getCorrectOptionLabel(currentQ);

                                    if (correctLabel) {
                                        const isCorrect = selectedOption === correctLabel;
                                        setStatusMap((prev) => ({ ...prev, [currentIndex]: isCorrect ? "correct" : "wrong" }));
                                        updateQuestionStat(currentQ.id, {
                                            attempted: true,
                                            correct: isCorrect,
                                            selectedOption: selectedOption || undefined,
                                            timeSpent: questionTimes[currentIndex] || 0
                                        });
                                    } else {
                                        // Could not determine correct answer from data
                                        setStatusMap((prev) => ({ ...prev, [currentIndex]: "attempted" }));
                                    }
                                } else {
                                    setStatusMap((prev) => ({ ...prev, [currentIndex]: "attempted" }));
                                    updateQuestionStat(currentQ.id, {
                                        attempted: true,
                                        timeSpent: questionTimes[currentIndex] || 0
                                    });
                                }
                            }}
                            className="px-5 py-2 rounded-lg text-xs font-semibold bg-emerald-500 hover:bg-emerald-600 text-white transition-colors"
                        >
                            Check
                        </button>
                    )}

                    <button onClick={() => goTo(currentIndex - 1)} disabled={currentIndex === 0} className="px-5 py-2 rounded-lg text-xs bg-white dark:bg-white/[0.06] dark:text-white border dark:border-white/[0.08] disabled:opacity-50">Previous</button>
                    <button onClick={handleNext} disabled={currentIndex >= testQuestions.length - 1} className="px-5 py-2 rounded-lg text-xs bg-purple-600 dark:bg-purple-500 text-white disabled:opacity-30">Next</button>
                </div>
            </div>
        </div>
    );
}

export default function TestPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-sm">Loading...</div>}>
            <TestPageContent />
        </Suspense>
    );
}



