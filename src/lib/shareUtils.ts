import { questions } from "@/data/questions";

// Map Question ID -> Index for O(1) lookup during encoding
const questionIdMap = new Map<string, number>();
questions.forEach((q, index) => {
    questionIdMap.set(q.id, index);
});

// Character set for Base64 URL-safe encoding (A-Z, a-z, 0-9, -, _)
const BASE64_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";

/**
 * Encodes a list of question IDs into a compact string.
 * Uses 12-bit packing for indices (up to 4096 questions supported comfortably, 
 * but our logic supports 16-bit if we change packing strategy.
 * For simplicity and max compatibility, we'll use a simple variable-length integer encoding 
 * or just join indices with a specialized separator if we want to be lazy, 
 * but for true compactness we should use bit packing.
 * 
 * Let's use a simple Base64 approach on the indices.
 * 
 * Strategy:
 * 1. Convert IDs to indices.
 * 2. Sort indices (for better delta compression if we wanted, but let's keep it simple first).
 * 3. Pack indices into a Uint16Array.
 * 4. Convert buffer to Base64 string.
 */
export function encodeTestConfig(ids: string[]): string {
    const indices: number[] = [];

    ids.forEach(id => {
        const index = questionIdMap.get(id);
        if (index !== undefined) {
            indices.push(index);
        }
    });

    if (indices.length === 0) return "";

    // Sort indices for potential delta compression or just deterministic output
    indices.sort((a, b) => a - b);

    // Create a byte array
    // We strictly assume < 65536 questions, so 2 bytes per index is safe.
    // Length = indices.length * 2 bytes
    const buffer = new Uint8Array(indices.length * 2);

    for (let i = 0; i < indices.length; i++) {
        const val = indices[i];
        // Little-endian storage
        buffer[i * 2] = val & 0xFF;
        buffer[i * 2 + 1] = (val >> 8) & 0xFF;
    }

    // Convert to Base64 URL safe
    return bufferToBase64(buffer);
}

/**
 * Decodes the compressed string back into question IDs.
 */
export function decodeTestConfig(encoded: string): string[] {
    if (!encoded) return [];

    try {
        const buffer = base64ToBuffer(encoded);
        const ids: string[] = [];

        // Read pairs of bytes as uint16
        for (let i = 0; i < buffer.length; i += 2) {
            if (i + 1 >= buffer.length) break;

            const low = buffer[i];
            const high = buffer[i + 1];
            const index = (high << 8) | low;

            if (index >= 0 && index < questions.length) {
                ids.push(questions[index].id);
            }
        }
        return ids;
    } catch (e) {
        console.error("Failed to decode test config", e);
        return [];
    }
}

// --- Helpers ---

function bufferToBase64(buffer: Uint8Array): string {
    let binary = '';
    const len = buffer.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(buffer[i]);
    }
    // btoa is available in browser env (Next.js client components)
    // For server-side, we might need Buffer, but this will primarily run on client.
    // Replaced standard btoa with a lookup if needed, but btoa is standard.
    // We need standard base64 then replace +/ with -_
    const base64 = typeof window !== 'undefined' ? window.btoa(binary) : Buffer.from(buffer).toString('base64');
    return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function base64ToBuffer(base64: string): Uint8Array {
    // Add padding back
    let padded = base64.replace(/-/g, '+').replace(/_/g, '/');
    while (padded.length % 4) {
        padded += '=';
    }

    const binary = typeof window !== 'undefined' ? window.atob(padded) : Buffer.from(padded, 'base64').toString('binary');
    const len = binary.length;
    const buffer = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        buffer[i] = binary.charCodeAt(i);
    }
    return buffer;
}
  