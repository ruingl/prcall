"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pcall = pcall;
exports.pcallSync = pcallSync;
/**
 * Calls a function protected from errors. (Async)
 * @param fn - The function to call.
 * @param args - Arguments of the function.
 * @returns A promise that resolves to an Result object.
 */
async function pcall(fn, ...args) {
    try {
        return {
            status: true,
            result: await fn(...args)
        };
    }
    catch (e) {
        return {
            status: false,
            error: e instanceof Error ? e : new Error(String(e))
        };
    }
}
/**
 * Calls a function protected from errors. (Sync)
 * @param fn - The function to call
 * @param args - Arguments of the function
 * @returns Result object.
 */
function pcallSync(fn, ...args) {
    try {
        return {
            status: true,
            result: fn(...args)
        };
    }
    catch (e) {
        return {
            status: false,
            error: e instanceof Error ? e : new Error(String(e))
        };
    }
}
