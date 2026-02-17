"use client";

import { motion, AnimatePresence } from "framer-motion";
import { LiquidCard } from "@/components/LiquidCard";
import Link from "next/link";
import { useState } from "react";
import analysisData from "@/data/analysis.json";

export default function AnalysisPage() {
    const [selectedPaperId, setSelectedPaperId] = useState(analysisData[0].id);

    const selectedPaper = analysisData.find(p => p.id === selectedPaperId) || analysisData[0];

    return (
        <div className="min-h-screen px-4 md:px-6 pt-8 pb-24">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-6xl mx-auto mb-8"
            >
                <Link href="/yearly" className="inline-flex items-center gap-2 text-xs text-purple-600 dark:text-purple-300/70 hover:text-purple-700 dark:hover:text-purple-200 transition-colors mb-4 group">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:-translate-x-1 transition-transform">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                    Back to Yearly Questions
                </Link>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Chapterwise Marks Analysis
                </h1>
                <p className="text-sm text-gray-500 dark:text-purple-300/60 max-w-2xl font-light">
                    Detailed distribution of marks across units for CBSE Exam Papers and Sample Papers.
                </p>
            </motion.div>

            {/* Filter Tabs */}
            <div className="max-w-6xl mx-auto mb-8 overflow-x-auto">
                <div className="flex gap-2 pb-2">
                    {analysisData.map((paper) => (
                        <button
                            key={paper.id}
                            onClick={() => setSelectedPaperId(paper.id)}
                            className={`flex-shrink-0 px-4 py-2.5 rounded-xl text-[10px] md:text-xs font-bold transition-all border ${selectedPaperId === paper.id
                                ? "bg-purple-600 dark:bg-purple-500/20 border-purple-500/50 text-white dark:text-white ring-2 ring-purple-500/20"
                                : "bg-white dark:bg-white/[0.03] border-gray-200 dark:border-white/[0.06] text-gray-500 dark:text-purple-300/60 hover:border-gray-300 dark:hover:border-white/[0.12]"
                                } shadow-sm`}
                        >
                            {paper.badge}
                        </button>
                    ))}
                </div>
            </div>

            {/* Legend */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="max-w-6xl mx-auto mb-8 flex flex-wrap gap-4 justify-center md:justify-start"
            >
                {[
                    { label: "MCQ Sec A (1m)", color: "bg-blue-600" },
                    { label: "Short Sec B (2m)", color: "bg-emerald-600" },
                    { label: "Short Sec C (3m)", color: "bg-orange-600" },
                    { label: "Case Sec D (4m)", color: "bg-pink-600" },
                    { label: "Long Sec E (5m)", color: "bg-purple-600" },
                ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2 text-[10px] font-medium text-gray-600 dark:text-purple-300/70">
                        <div className={`w-4 h-4 rounded-sm ${item.color}`} />
                        {item.label}
                    </div>
                ))}
            </motion.div>

            {/* Selected Paper */}
            <div className="max-w-6xl mx-auto">
                <AnimatePresence mode="wait">
                    <motion.section
                        key={selectedPaper.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                    >
                        <div className="flex items-center gap-3">
                            <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                                {selectedPaper.title}
                            </h2>
                            <span className="px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-300 text-[10px] font-bold border border-purple-500/20">
                                {selectedPaper.badge}
                            </span>
                        </div>

                        <LiquidCard className="overflow-hidden !border-none" disableHover>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-gray-50/50 dark:bg-white/[0.03]">
                                            <th rowSpan={2} className="px-4 py-3 text-left text-xs font-black text-gray-500 dark:text-purple-300/60 uppercase tracking-wider border-b border-gray-100 dark:border-white/[0.05]">Unit</th>
                                            <th rowSpan={2} className="px-4 py-3 text-left text-xs font-black text-gray-500 dark:text-purple-300/60 uppercase tracking-wider border-b border-gray-100 dark:border-white/[0.05]">Unit Name</th>
                                            <th className="px-4 py-2 text-center text-xs font-black text-blue-600/70 dark:text-blue-400/50 uppercase tracking-widest border-b border-gray-100 dark:border-white/[0.05] bg-blue-500/[0.02]">Sec A</th>
                                            <th className="px-4 py-2 text-center text-xs font-black text-emerald-600/70 dark:text-emerald-400/50 uppercase tracking-widest border-b border-gray-100 dark:border-white/[0.05] bg-emerald-500/[0.02]">Sec B</th>
                                            <th className="px-4 py-2 text-center text-xs font-black text-orange-600/70 dark:text-orange-400/50 uppercase tracking-widest border-b border-gray-100 dark:border-white/[0.05] bg-orange-500/[0.02]">Sec C</th>
                                            <th className="px-4 py-2 text-center text-xs font-black text-pink-600/70 dark:text-pink-400/50 uppercase tracking-widest border-b border-gray-100 dark:border-white/[0.05] bg-pink-500/[0.02]">Sec D</th>
                                            <th className="px-4 py-2 text-center text-xs font-black text-purple-600/70 dark:text-purple-400/50 uppercase tracking-widest border-b border-gray-100 dark:border-white/[0.05] bg-purple-500/[0.02]">Sec E</th>
                                            <th rowSpan={2} className="px-4 py-3 text-center text-xs font-black text-gray-500 dark:text-purple-300/60 uppercase tracking-wider border-b border-gray-100 dark:border-white/[0.05]">Total</th>
                                            <th rowSpan={2} className="px-4 py-3 text-center text-xs font-black text-gray-500 dark:text-purple-300/60 uppercase tracking-wider border-b border-gray-100 dark:border-white/[0.05]">Official</th>
                                        </tr>
                                        <tr className="bg-gray-50/50 dark:bg-white/[0.03]">
                                            <th className="px-4 py-2 text-[10px] font-black text-gray-500 dark:text-purple-300/50 border-b border-gray-100 dark:border-white/[0.05]">MCQ 1m</th>
                                            <th className="px-4 py-2 text-[10px] font-black text-gray-500 dark:text-purple-300/50 border-b border-gray-100 dark:border-white/[0.05]">2m</th>
                                            <th className="px-4 py-2 text-[10px] font-black text-gray-500 dark:text-purple-300/50 border-b border-gray-100 dark:border-white/[0.05]">3m</th>
                                            <th className="px-4 py-2 text-[10px] font-black text-gray-500 dark:text-purple-300/50 border-b border-gray-100 dark:border-white/[0.05]">Case 4m</th>
                                            <th className="px-4 py-2 text-[10px] font-black text-gray-500 dark:text-purple-300/50 border-b border-gray-100 dark:border-white/[0.05]">5m</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50 dark:divide-white/[0.02]">
                                        {selectedPaper.units.map((unit) => (
                                            <tr key={unit.id} className="hover:bg-gray-50/30 dark:hover:bg-white/[0.01] transition-colors group">
                                                <td className="px-4 py-3 text-xs font-bold text-purple-600 dark:text-purple-400">{unit.id}</td>
                                                <td className="px-4 py-4 text-sm font-bold text-gray-900 dark:text-white/95">
                                                    {unit.name}
                                                </td>
                                                <td className="px-4 py-3 text-center">
                                                    {unit.secA !== "-" ? (
                                                        <div className="inline-flex flex-col items-center">
                                                            <span className="px-3 py-1 rounded bg-blue-600/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 text-xs font-bold">{unit.secA.split(" ")[0]}</span>
                                                            {unit.secA.includes("(") && <span className="text-[10px] text-gray-700 dark:text-purple-300/80 font-black mt-0.5">{unit.secA.split(" ")[1]}</span>}
                                                        </div>
                                                    ) : <span className="text-gray-200 dark:text-white/5">—</span>}
                                                </td>
                                                <td className="px-4 py-3 text-center">
                                                    {unit.secB !== "-" ? (
                                                        <div className="inline-flex flex-col items-center">
                                                            <span className="px-3 py-1 rounded bg-emerald-600/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 text-xs font-bold">{unit.secB.split(" ")[0]}</span>
                                                            {unit.secB.includes("(") && <span className="text-[10px] text-gray-700 dark:text-purple-300/80 font-black mt-0.5">{unit.secB.split(" ")[1]}</span>}
                                                        </div>
                                                    ) : <span className="text-gray-200 dark:text-white/5">—</span>}
                                                </td>
                                                <td className="px-4 py-3 text-center">
                                                    {unit.secC && unit.secC !== "-" ? (
                                                        <div className="inline-flex flex-col items-center">
                                                            <span className="px-3 py-1 rounded bg-orange-600/10 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400 text-xs font-bold">{unit.secC.split(" ")[0]}</span>
                                                            {unit.secC.includes("(") && <span className="text-[10px] text-gray-700 dark:text-purple-300/80 font-black mt-0.5">{unit.secC.split(" ")[1]}</span>}
                                                        </div>
                                                    ) : <span className="text-gray-200 dark:text-white/5">—</span>}
                                                </td>
                                                <td className="px-4 py-3 text-center">
                                                    {unit.secD && unit.secD !== "-" ? (
                                                        <div className="inline-flex flex-col items-center">
                                                            <span className="px-3 py-1 rounded bg-pink-600/10 text-pink-600 dark:bg-pink-500/20 dark:text-pink-400 text-xs font-bold">{unit.secD.split(" ")[0]}</span>
                                                            {unit.secD.includes("(") && <span className="text-[10px] text-gray-700 dark:text-purple-300/80 font-black mt-0.5">{unit.secD.split(" ")[1]}</span>}
                                                        </div>
                                                    ) : <span className="text-gray-200 dark:text-white/5">—</span>}
                                                </td>
                                                <td className="px-4 py-3 text-center">
                                                    {unit.secE && unit.secE !== "-" ? (
                                                        <div className="inline-flex flex-col items-center">
                                                            <span className="px-3 py-1 rounded bg-purple-600/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400 text-xs font-bold">{unit.secE.split(" ")[0]}</span>
                                                            {unit.secE.includes("(") && <span className="text-[10px] text-gray-700 dark:text-purple-300/80 font-black mt-0.5">{unit.secE.split(" ")[1]}</span>}
                                                        </div>
                                                    ) : <span className="text-gray-200 dark:text-white/5">—</span>}
                                                </td>
                                                <td className="px-4 py-3 text-center text-base font-black text-gray-900 dark:text-white">
                                                    {unit.total}
                                                </td>
                                                <td className="px-4 py-4 text-center text-xs font-black text-gray-700 dark:text-purple-300/80">
                                                    {unit.official}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    <tfoot>
                                        <tr className="bg-gray-50/50 dark:bg-white/[0.03]">
                                            <td colSpan={2} className="px-4 py-3 text-left text-xs font-black text-gray-900 dark:text-white uppercase tracking-wider">Total</td>
                                            <td className="px-4 py-3 text-center text-base font-black text-blue-600 dark:text-blue-400">{selectedPaper.footer.secA}</td>
                                            <td className="px-4 py-3 text-center text-base font-black text-emerald-600 dark:text-emerald-400">{selectedPaper.footer.secB}</td>
                                            <td className="px-4 py-3 text-center text-base font-black text-orange-600 dark:text-orange-400">{selectedPaper.footer.secC}</td>
                                            <td className="px-4 py-3 text-center text-base font-black text-pink-600 dark:text-pink-400">{selectedPaper.footer.secD}</td>
                                            <td className="px-4 py-3 text-center text-base font-black text-purple-600 dark:text-purple-400">{selectedPaper.footer.secE}</td>
                                            <td className="px-4 py-3 text-center text-base font-black text-gray-900 dark:text-white">{selectedPaper.footer.total}</td>
                                            <td className="px-4 py-4 text-center text-xs font-black text-gray-700 dark:text-purple-300/80 italic">{selectedPaper.footer.official}</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </LiquidCard>

                        {/* Analysis Section */}
                        <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.08] shadow-sm">
                            <div className="absolute top-0 left-0 w-1 h-full bg-purple-600 dark:bg-purple-500"></div>
                            <div className="p-5 md:p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-purple-600 dark:text-purple-400">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                    </svg>
                                    <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                                        Detailed Paper Analysis
                                    </h3>
                                </div>
                                <p className="text-[13px] md:text-sm text-gray-600 dark:text-purple-300/70 leading-relaxed">
                                    {selectedPaper.notes}
                                </p>
                            </div>
                        </div>
                    </motion.section>
                </AnimatePresence>
            </div>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-center text-xs font-bold text-gray-500 dark:text-purple-300/60 mt-16 max-w-3xl mx-auto leading-relaxed"
            >
                Total set = 80 marks per paper | Students attempt 70 marks (Sec B: any 5×2=10; Sec C: any 5×3=15; Sec E: any 3×5=15) | b* = concept/case-based marks
            </motion.p>
        </div>
    );
}
  