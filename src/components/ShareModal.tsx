import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { encodeTestConfig } from "@/lib/shareUtils";

interface ShareModalProps {
    isOpen: boolean;
    onClose: () => void;
    questionIds: string[];
}

export function ShareModal({ isOpen, onClose, questionIds }: ShareModalProps) {
    const [title, setTitle] = useState("");
    const [generatedLink, setGeneratedLink] = useState("");
    const [copied, setCopied] = useState(false);

    // Reset state when modal opens
    useEffect(() => {
        if (isOpen) {
            setTitle("");
            setGeneratedLink("");
            setCopied(false);
        }
    }, [isOpen]);

    const handleGenerate = () => {
        if (!title.trim()) return;

        const encodedData = encodeTestConfig(questionIds);
        const baseUrl = window.location.origin + window.location.pathname;
        const params = new URLSearchParams();
        params.set("d", encodedData);
        params.set("t", title.trim());

        const link = `${baseUrl}?${params.toString()}`;
        setGeneratedLink(link);
    };

    const handleCopy = () => {
        if (!generatedLink) return;
        navigator.clipboard.writeText(generatedLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-white/[0.1]"
                    >
                        <div className="p-6">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Share Test</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                                Give your test a name to create a personalized link.
                            </p>

                            {!generatedLink ? (
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                                            Test Name
                                        </label>
                                        <input
                                            type="text"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            placeholder="e.g. Class 12 Mock Test 1"
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/[0.05] border border-gray-200 dark:border-white/[0.1] text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                                            autoFocus
                                        />
                                    </div>
                                    <button
                                        onClick={handleGenerate}
                                        disabled={!title.trim()}
                                        className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Generate Link
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/[0.05] border border-gray-200 dark:border-white/[0.1] break-all text-sm text-gray-600 dark:text-gray-300 font-mono">
                                        {generatedLink}
                                    </div>
                                    <button
                                        onClick={handleCopy}
                                        className={`w-full py-3 rounded-xl font-medium transition-all ${copied
                                                ? "bg-emerald-500 text-white"
                                                : "bg-purple-600 hover:bg-purple-500 text-white"
                                            }`}
                                    >
                                        {copied ? "Copied!" : "Copy Link"}
                                    </button>
                                    <button
                                        onClick={() => setGeneratedLink("")}
                                        className="w-full py-2 text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                                    >
                                        Create Another
                                    </button>
                                </div>
                            )}
                        </div>
                        <div className="px-6 py-4 bg-gray-50 dark:bg-white/[0.02] border-t border-gray-200 dark:border-white/[0.06] flex justify-end">
                            <button
                                onClick={onClose}
                                className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
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
  