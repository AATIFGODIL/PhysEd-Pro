import Fuse from "fuse.js";
import { questions, type Question } from "@/data/questions";

const fuse = new Fuse(questions, {
    keys: [
        { name: "question", weight: 0.4 },
        { name: "chapter", weight: 0.25 },
        { name: "topic", weight: 0.2 },
        { name: "answer", weight: 0.05 },
        { name: "year", weight: 0.1 },
        { name: "source", weight: 0.15 }, // Added source
    ],
    threshold: 0.4,
    includeScore: true,
});

export interface SearchFilters {
    year?: number;
    marks?: number;
    type?: string;
    source?: string;
    textQuery: string;
}

export function parseSearchQuery(query: string): SearchFilters {
    let textQuery = query;
    const filters: SearchFilters = { textQuery: "" };

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

    // 3. Extract Exam Source (Compartment / Main / Sample)
    if (/\b(sample|sqp)\b/i.test(textQuery)) {
        filters.source = "Sample";
        textQuery = textQuery.replace(/\b(sample|sqp|paper)\b/gi, "").trim(); // Remove 'paper' too if next to sample
    } else if (/\bcompartment\b/i.test(textQuery)) {
        filters.source = "Compartment";
        textQuery = textQuery.replace(/\bcompartment\b/i, "").trim();
    } else if (/\bmain\b/i.test(textQuery)) {
        filters.source = "Main";
        textQuery = textQuery.replace(/\bmain\b/i, "").trim();
    }

    // 4. Extract Type (MCQ, Short, Long, Case Study)
    const typePatterns = [
        { key: "MCQ", regex: /\b(mcq|objective)\b/i },
        { key: "Short", regex: /\b(short)\b/i },
        { key: "Long", regex: /\b(long)\b/i },
        { key: "Case Study", regex: /\b(case\s*study)\b/i },
    ];

    for (const p of typePatterns) {
        if (p.regex.test(textQuery)) {
            if (p.key === "Long" && /\bvery\s*long\b/i.test(textQuery)) {
                filters.type = "Very Long";
                textQuery = textQuery.replace(/\bvery\s*long\b/i, "").trim();
            } else {
                filters.type = p.key;
                textQuery = textQuery.replace(p.regex, "").trim();
            }
            break;
        }
    }

    filters.textQuery = textQuery;
    return filters;
}

export function searchQuestions(query: string): Question[] {
    if (!query.trim()) return questions;

    const { year, marks, type, source, textQuery } = parseSearchQuery(query);

    // 5. Apply Filters
    let filtered = questions;
    if (year) filtered = filtered.filter(q => q.year === year);
    if (marks) filtered = filtered.filter(q => q.marks === marks);

    // Source Filter logic
    if (source) {
        if (source === "Compartment") {
            filtered = filtered.filter(q => q.source.toLowerCase().includes("compartment"));
        } else if (source === "Sample") {
            filtered = filtered.filter(q => q.source.toLowerCase().includes("sample"));
        } else if (source === "Main") {
            // Main means NOT Compartment AND NOT Sample
            filtered = filtered.filter(q => !q.source.toLowerCase().includes("compartment") && !q.source.toLowerCase().includes("sample"));
        }
    }

    if (type) {
        if (type === "Long") {
            filtered = filtered.filter(q => q.type === "Long" || q.marks === 3 || q.marks === 4);
        } else {
            filtered = filtered.filter(q => q.type === type);
        }
    }

    // 6. Text Search with Fuse if text remains
    if (textQuery.length > 1) {
        const fuseInstance = new Fuse(filtered, {
            keys: [
                { name: "question", weight: 0.4 },
                { name: "chapter", weight: 0.25 },
                { name: "topic", weight: 0.2 },
                { name: "answer", weight: 0.05 },
            ],
            threshold: 0.4,
            includeScore: true,
        });

        const results = fuseInstance.search(textQuery);
        return results.map(r => r.item);
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
