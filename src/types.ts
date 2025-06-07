/**
 * @template T
 * Result of a protected call.
 */
export type Result<T> = {
  /** Status of the function called. */
  status: boolean;
  /** Result of the function called if it succeed. */
  result?: T;
  /** Error of the function called if it failed. */
  error?: Error;
};
