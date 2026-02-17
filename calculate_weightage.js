
const fs = require('fs');

const content = fs.readFileSync('/Users/aatifgodil/PhysEd-Pro/src/data/questions.ts', 'utf-8');

// Match all question objects accurately
const questionBlocks = [];
let braceCount = 0;
let currentBlock = "";
let inBlock = false;

for (let i = 0; i < content.length; i++) {
    const char = content[i];
    if (char === '{') {
        if (braceCount === 0) {
            inBlock = true;
            currentBlock = "";
        }
        braceCount++;
    }

    if (inBlock) {
        currentBlock += char;
    }

    if (char === '}') {
        braceCount--;
        if (braceCount === 0 && inBlock) {
            if (currentBlock.includes('source: "CBSE 2025 Board Exam"')) {
                questionBlocks.push(currentBlock);
            }
            inBlock = false;
        }
    }
}

const weightage = {};
const ids = new Set();

questionBlocks.forEach(block => {
    const idMatch = block.match(/id:\s*"(.*?)"/);
    const chapterMatch = block.match(/chapter:\s*"(.*?)"/);
    const marksMatch = block.match(/marks:\s*(\d+)/);

    if (idMatch && chapterMatch && marksMatch) {
        const id = idMatch[1];
        const chapter = chapterMatch[1];
        const marks = parseInt(marksMatch[1], 10);

        if (!ids.has(id)) {
            ids.add(id);
            weightage[chapter] = (weightage[chapter] || 0) + marks;
        }
    }
});

const sortedWeightage = Object.entries(weightage).sort((a, b) => b[1] - a[1]);

console.log(`Total Questions found: ${ids.size}`);
console.log(`Total Marks: ${Object.values(weightage).reduce((a, b) => a + b, 0)}`);
console.log("Chapter-wise weightage in 2025 Board Paper:");
sortedWeightage.forEach(([chapter, marks]) => {
    console.log(`${chapter}: ${marks} marks`);
});
  