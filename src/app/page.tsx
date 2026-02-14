"use client";

import { motion } from "framer-motion";
import { SearchBar } from "@/components/SearchOrb";
import { LiquidCard } from "@/components/LiquidCard";
import { questions, chapters } from "@/data/questions";
import Link from "next/link";
import Image from "next/image";

const years = [2025, 2024, 2023, 2022];

function getStats() {
  const totalQuestions = questions.length;
  const yearCounts: Record<number, number> = {};
  years.forEach((y) => {
    yearCounts[y] = questions.filter((q) => q.year === y).length;
  });
  return { totalQuestions, yearCounts };
}

export default function Dashboard() {
  const stats = getStats();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[80vh] px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[10px] uppercase tracking-[0.3em] text-purple-600/80 dark:text-purple-300/80 mb-4"
          >
            CBSE Class XII • Physical Education
          </motion.p>
          <div className="flex justify-center mb-6">
            <Image
              src="/Banner.png"
              alt="PhysEd Pro Banner"
              width={866}
              height={288}
              className="w-full max-w-[500px] h-auto object-contain drop-shadow-2xl"
              priority
            />
          </div>
          <p className="text-purple-800/90 dark:text-purple-300/90 text-sm max-w-md mx-auto font-light">
            Master archive with solutions from CBSE board exams 2022–2025
          </p>
        </motion.div>

        {/* Search Bar (centered, liquid glass) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="w-full max-w-2xl"
        >
          <SearchBar />
        </motion.div>

        {/* Quick stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex items-center gap-6 mt-14 text-center"
        >
          <div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {stats.totalQuestions}+
            </p>
            <p className="text-[10px] text-purple-600/80 dark:text-purple-300/80 uppercase tracking-wider">
              Questions
            </p>
          </div>
          <div className="w-px h-8 bg-gray-300/20 dark:bg-white/[0.06]" />
          <div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{years.length}</p>
            <p className="text-[10px] text-purple-600/80 dark:text-purple-300/80 uppercase tracking-wider">
              Years
            </p>
          </div>
          <div className="w-px h-8 bg-gray-300/20 dark:bg-white/[0.06]" />
          <div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {chapters.length}
            </p>
            <p className="text-[10px] text-purple-600/80 dark:text-purple-300/80 uppercase tracking-wider">
              Chapters
            </p>
          </div>
        </motion.div>
      </section>

      {/* Download Papers Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.2em] text-purple-600/80 dark:text-purple-300/80 mb-6"
        >
          Download Papers
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[2025, 2024, 2023].map((year, i) => (
            <Link key={year} href="/pdf">
              <LiquidCard delay={i * 0.1} className="h-full">
                <div className="p-6 flex items-center gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/15 to-fuchsia-500/10 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-600 dark:text-purple-300">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <path d="M12 18v-6" />
                      <path d="M9 15l3 3 3-3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">{year}</p>
                    <p className="text-[11px] text-purple-600/80 dark:text-purple-300/80">
                      {stats.yearCounts[year]} questions • PDF
                    </p>
                    <div className="flex gap-1.5 mt-2">
                      <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-purple-300">
                        With Answers
                      </span>
                      <span className="text-[9px] px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-700 dark:text-purple-300">
                        Marking Scheme
                      </span>
                    </div>
                  </div>
                </div>
              </LiquidCard>
            </Link>
          ))}
        </div>
      </section>

      {/* Year Cards Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.2em] text-purple-600/80 dark:text-purple-300/80 mb-6"
        >
          Explore by Year
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {years.map((year, i) => (
            <Link key={year} href={`/yearly?year=${year}`}>
              <LiquidCard
                glowing={year === 2025}
                delay={i * 0.1}
                className="h-full"
              >
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      {year}
                    </span>
                    {year === 2025 && (
                      <span className="text-[9px] uppercase tracking-wider px-2 py-1 rounded-full bg-fuchsia-500/20 text-fuchsia-700 dark:text-white animate-pulse">
                        Latest
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-purple-600/80 dark:text-purple-300/80 mb-2">
                    {stats.yearCounts[year]} questions with solutions
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-purple-300">
                      Solved
                    </span>
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-700 dark:text-purple-300">
                      Marking Scheme
                    </span>
                  </div>
                </div>
              </LiquidCard>
            </Link>
          ))}
        </div>
      </section>

      {/* Chapters preview */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.2em] text-purple-600/80 dark:text-purple-300/80 mb-6"
        >
          Explore by Chapter
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {chapters.map((chapter, i) => {
            const count = questions.filter((q) => q.chapter === chapter).length;
            return (
              <Link key={chapter} href={`/chapters?chapter=${encodeURIComponent(chapter)}`}>
                <LiquidCard delay={i * 0.05} className="h-full">
                  <div className="p-4 flex items-center gap-3">
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500/15 to-fuchsia-500/10 flex items-center justify-center text-sm font-bold text-purple-700 dark:text-purple-300">
                      {i + 1}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                        {chapter}
                      </h3>
                      <p className="text-[10px] text-purple-600/80 dark:text-purple-300/80">
                        {count} questions
                      </p>
                    </div>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-purple-300/40 flex-shrink-0"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                </LiquidCard>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
