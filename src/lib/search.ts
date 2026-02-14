import Fuse from "fuse.js";
import { questions, type Question } from "@/data/questions";

const fuse = new Fuse(questions, {
    keys: [
        { name: "question", weight: 0.4 },
        { name: "chapter", weight: 0.25 },
        { name: "topic", weight: 0.2 },
        { name: "answer", weight: 0.05 },
        { name: "year", weight: 0.1 },
    ],
    threshold: 0.4,
    includeScore: true,
});

export function searchQuestions(query: string): Question[] {
    if (!query.trim()) return questions;

    let textQuery = query;
    const filters: {
        year?: number;
        marks?: number;
        type?: string;
    } = {};

    // 1. Extract Year (2022-2025)
    const yearMatch = textQuery.match(/\b(202[2-5])\b/);
    if (yearMatch) {
        filters.year = parseInt(yearMatch[1]);
        textQuery = textQuery.replace(yearMatch[0], "").trim();
    }

    // 2. Extract Marks (1-5 marks)
    const marksMatch = textQuery.match(/\b(\d)\s*marks?\b/i);
    if (marksMatch) {
        filters.marks = parseInt(marksMatch[1]);
        textQuery = textQuery.replace(marksMatch[0], "").trim();
    }

    // 3. Extract Type (MCQ, Short, Long, Case Study)
    const typePatterns = [
        { key: "MCQ", regex: /\b(mcq|objective)\b/i },
        { key: "Short", regex: /\b(short)\b/i },
        { key: "Long", regex: /\b(long)\b/i }, // "Very Long" might be tricky, let's just catch "Long" first
        { key: "Case Study", regex: /\b(case\s*study)\b/i },
    ];

    for (const p of typePatterns) {
        if (p.regex.test(textQuery)) {
            // Special handling for "Very Long" if "Long" is matched? 
            // Actually, let's keep it simple. If "Very Long" is needed, user might type "5 marks" which is safer.
            // But if they type "very long", "long" matches. 
            // Let's check for "very long" specifically.
            if (p.key === "Long" && /\bvery\s*long\b/i.test(textQuery)) {
                filters.type = "Very Long"; // If data supports it, otherwise "Long" usually covers 3/4
                textQuery = textQuery.replace(/\bvery\s*long\b/i, "").trim();
            } else {
                filters.type = p.key;
                textQuery = textQuery.replace(p.regex, "").trim();
            }
            break; // Single type filter usually
        }
    }

    // 4. Apply Filters
    let filtered = questions;
    if (filters.year) filtered = filtered.filter(q => q.year === filters.year);
    if (filters.marks) filtered = filtered.filter(q => q.marks === filters.marks);
    if (filters.type) {
        // Broaden "Long" to include "Very Long" if strictly just "Long" asked?
        // Or assume strict mapping. 
        // Data has distinct "Very Long" (5 marks). 
        if (filters.type === "Long") {
            // Maybe user means 3 or 4 marks.
            filtered = filtered.filter(q => q.type === "Long" || q.marks === 3 || q.marks === 4);
        } else {
            filtered = filtered.filter(q => q.type === filters.type);
        }
    }

    // 5. Text Search with Fuse if text remains
    if (textQuery.length > 1) {
        const results = fuse.search(textQuery);
        // Intersect Fuse results with filtered results
        const fuseIds = new Set(results.map(r => r.item.id));
        return filtered.filter(q => fuseIds.has(q.id));
    }

    return filtered;
}

export function filterQuestions(filters: {
    year?: number;
    chapter?: string;
    marks?: number;
    type?: string;
}): Question[] {
    return questions.filter((q) => {
        if (filters.year && q.year !== filters.year) return false;
        if (filters.chapter && q.chapter !== filters.chapter) return false;
        if (filters.marks && q.marks !== filters.marks) return false;
        if (filters.type && q.type !== filters.type) return false;
        return true;
    });
}
