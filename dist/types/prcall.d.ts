import { Result } from "./types";
/**
 * Calls a function protected from errors. (Async)
 * @param fn - The function to call.
 * @param args - Arguments of the function.
 * @returns A promise that resolves to an Result object.
 */
export declare function pcall<T extends (...args: any[]) => any>(fn: T, ...args: Parameters<T>): Promise<Result<Awaited<ReturnType<T>>>>;
/**
 * Calls a function protected from errors. (Sync)
 * @param fn - The function to call
 * @param args - Arguments of the function
 * @returns Result object.
 */
export declare function pcallSync<T extends (...args: any[]) => any>(fn: T, ...args: Parameters<T>): Result<ReturnType<T>>;
