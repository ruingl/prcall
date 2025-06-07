import { Result } from "./types";

/**
 * Calls a function protected from errors. (Async)
 * @param fn - The function to call.
 * @param args - Arguments of the function.
 * @returns A promise that resolves to an Result object.
 */
export async function pcall<T extends (...args: any[]) => any>(
  fn: T,
  ...args: Parameters<T>
): Promise<Result<Awaited<ReturnType<T>>>> {
  try {
    return {
      status: true, 
      result: await fn(...args)
    };
  } catch (e) {
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
export function pcallSync<T extends (...args: any[]) => any>(
  fn: T,
  ...args: Parameters<T>
): Result<ReturnType<T>> {
  try {
    return {
      status: true, 
      result: fn(...args)
    };
  } catch (e) {
    return {
      status: false,
      error: e instanceof Error ? e : new Error(String(e))
    };
  }
}
