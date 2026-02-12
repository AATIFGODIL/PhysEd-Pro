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
    const results = fuse.search(query);
    return results.map((r) => r.item);
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
