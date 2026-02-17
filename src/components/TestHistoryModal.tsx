import { motion, AnimatePresence } from "framer-motion";
import { useQuiz, TestHistoryRecord } from "@/context/QuizContext";
import { useRouter } from "next/navigation";

interface TestHistoryModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function TestHistoryModal({ isOpen, onClose }: TestHistoryModalProps) {
    const { testHistory } = useQuiz();
    const router = useRouter();

    const formatDate = (timestamp: number) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const handleViewSolutions = (record: TestHistoryRecord) => {
        router.push(`/test?ids=${record.questionIds.join(',')}&title=${encodeURIComponent(record.title)}&practice=true`);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-white/[0.1]"
                    >
                        <div className="p-6 border-b border-gray-100 dark:border-white/[0.05] flex items-center justify-between">
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Test History</h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Review your past performance</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-gray-100 dark:hover:bg-white/[0.05] rounded-xl transition-colors"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>

                        <div className="p-6 max-h-[60vh] overflow-y-auto">
                            {testHistory.length === 0 ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-gray-100 dark:bg-white/[0.03] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
                                            <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                    </div>
                                    <p className="text-gray-500 dark:text-gray-400">No tests taken yet.</p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {testHistory.map((record) => (
                                        <div
                                            key={record.id}
                                            className="p-4 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.08] hover:border-purple-500/30 transition-all group"
                                        >
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                                <div className="space-y-1">
                                                    <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-purple-500 transition-colors">
                                                        {record.title}
                                                    </h3>
                                                    <div className="flex items-center gap-3 text-[10px] text-gray-500 dark:text-purple-300/40 uppercase tracking-wider">
                                                        <span>{formatDate(record.date)}</span>
                                                        <span>•</span>
                                                        <span>{Math.floor(record.duration / 60)}m {record.duration % 60}s</span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-6">
                                                    <div className="flex gap-4">
                                                        <div className="text-center">
                                                            <p className="text-lg font-bold text-emerald-500">{record.correct}</p>
                                                            <p className="text-[10px] uppercase text-gray-400">Correct</p>
                                                        </div>
                                                        <div className="text-center">
                                                            <p className="text-lg font-bold text-red-500">{record.incorrect}</p>
                                                            <p className="text-[10px] uppercase text-gray-400">Wrong</p>
                                                        </div>
                                                        <div className="text-center">
                                                            <p className="text-lg font-bold text-blue-500">{record.attempted}</p>
                                                            <p className="text-[10px] uppercase text-gray-400">Attempted</p>
                                                        </div>
                                                    </div>

                                                    <button
                                                        onClick={() => handleViewSolutions(record)}
                                                        className="px-4 py-2 rounded-lg bg-white dark:bg-white/[0.05] border border-gray-200 dark:border-white/[0.1] text-xs font-semibold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/[0.1] transition-all"
                                                    >
                                                        View Solution
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="p-6 bg-gray-50/50 dark:bg-white/[0.02] border-t border-gray-100 dark:border-white/[0.05] flex justify-end">
                            <button
                                onClick={onClose}
                                className="px-6 py-2 rounded-xl text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
  