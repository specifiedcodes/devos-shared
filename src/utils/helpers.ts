/**
 * Shared utility functions used across services.
 */

/**
 * Safely parse a number, returning a default value if NaN.
 * Prevents NaN from propagating through calculations.
 */
export function safeParseNumber(value: unknown, defaultValue: number = 0): number {
  const parsed = Number(value);
  return isNaN(parsed) ? defaultValue : parsed;
}

/**
 * Safe division that returns 0 instead of NaN/Infinity.
 */
export function safeDivide(numerator: number, denominator: number): number {
  if (denominator === 0 || isNaN(denominator) || isNaN(numerator)) return 0;
  return numerator / denominator;
}

/**
 * Clamp a number between min and max values.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Truncate a string to max length, adding ellipsis if truncated.
 * If maxLength is less than 4, truncates without ellipsis.
 */
export function truncate(str: string, maxLength: number): string {
  if (maxLength < 1) return '';
  if (str.length <= maxLength) return str;
  if (maxLength < 4) return str.substring(0, maxLength);
  return str.substring(0, maxLength - 3) + '...';
}

/**
 * Format bytes to human-readable string.
 * Returns '0 B' for zero or negative values.
 */
export function formatBytes(bytes: number): string {
  if (bytes <= 0 || !isFinite(bytes)) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  const value = bytes / Math.pow(1024, i);
  return `${value.toFixed(i === 0 ? 0 : 1)} ${units[i]}`;
}

/**
 * Format USD cost with appropriate precision.
 * Uses absolute value for threshold checks to handle negative costs (refunds/credits).
 */
export function formatCostUsd(cost: number): string {
  const abs = Math.abs(cost);
  if (abs < 0.01) return `$${cost.toFixed(6)}`;
  if (abs < 1) return `$${cost.toFixed(4)}`;
  return `$${cost.toFixed(2)}`;
}

/**
 * Generate a deterministic room name for WebSocket subscriptions.
 */
export function wsRoom(type: string, id: string): string {
  return `${type}:${id}`;
}

/**
 * Parse a WebSocket room name to extract type and ID.
 * Splits on the first colon only, so IDs containing colons are preserved.
 */
export function parseWsRoom(room: string): { type: string; id: string } | null {
  const colonIndex = room.indexOf(':');
  if (colonIndex < 1 || colonIndex === room.length - 1) return null;
  return { type: room.substring(0, colonIndex), id: room.substring(colonIndex + 1) };
}
