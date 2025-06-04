/**
 * Calls a function protected from errors. (Async)
 *
 * @param fn - The function to call
 * @param args - Arguments of the function
 * @returns Array where the first value is a boolean indicating
 * success, while the other one is either the return value or
 * the caught error.
 */
export async function pcall<T extends (...args: any[]) => any>(
  fn: T,
  ...args: Parameters<T>
): Promise<
  [true, Awaited<ReturnType<T>>] | [false, unknown]
> {
  try {
    return [true, await fn(...args)];
  } catch (e) {
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
export function pcallSync<T extends (...args: any[]) => any>(
  fn: T,
  ...args: Parameters<T>
): [true, ReturnType<T>] | [false, unknown] {
  try {
    return [true, fn(...args)];
  } catch (e) {
    return [false, e];
  }
}
