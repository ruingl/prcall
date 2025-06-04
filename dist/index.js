"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pcall = pcall;
exports.pcallSync = pcallSync;
/**
 * Calls a function protected from errors. (Async)
 *
 * @param fn - The function to call
 * @param args - Arguments of the function
 * @returns Array where the first value is a boolean indicating
 * success, while the other one is either the return value or
 * the caught error.
 */
async function pcall(fn, ...args) {
    try {
        return [true, await fn(...args)];
    }
    catch (e) {
        return [false, e];
    }
}
/**
 * Calls a function protected from errors. (Sync)
 *
 * @param fn - The function to call
 * @param args - Arguments of the function
 * @returns Array where the first value is a boolean indicating
 * success, while the other one is either the return value or
 * the caught error.
 */
function pcallSync(fn, ...args) {
    try {
        return [true, fn(...args)];
    }
    catch (e) {
        return [false, e];
    }
}
