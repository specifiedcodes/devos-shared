import {
  safeParseNumber,
  safeDivide,
  clamp,
  truncate,
  formatBytes,
  formatCostUsd,
  wsRoom,
  parseWsRoom,
} from '../utils/helpers.js';

describe('Utility Helpers', () => {
  describe('safeParseNumber', () => {
    it('parses valid numbers', () => {
      expect(safeParseNumber(42)).toBe(42);
      expect(safeParseNumber('42')).toBe(42);
      expect(safeParseNumber(3.14)).toBe(3.14);
      expect(safeParseNumber('3.14')).toBe(3.14);
      expect(safeParseNumber(0)).toBe(0);
    });

    it('returns default for NaN', () => {
      expect(safeParseNumber('not-a-number')).toBe(0);
      expect(safeParseNumber('abc', 10)).toBe(10);
    });

    it('returns default for null/undefined', () => {
      expect(safeParseNumber(null)).toBe(0);
      expect(safeParseNumber(undefined)).toBe(0);
      expect(safeParseNumber(undefined, 5)).toBe(5);
    });
  });

  describe('safeDivide', () => {
    it('divides correctly', () => {
      expect(safeDivide(10, 2)).toBe(5);
      expect(safeDivide(7, 3)).toBeCloseTo(2.333, 2);
      expect(safeDivide(0, 5)).toBe(0);
    });

    it('returns 0 for zero denominator', () => {
      expect(safeDivide(10, 0)).toBe(0);
      expect(safeDivide(0, 0)).toBe(0);
    });

    it('returns 0 for NaN inputs', () => {
      expect(safeDivide(NaN, 5)).toBe(0);
      expect(safeDivide(10, NaN)).toBe(0);
      expect(safeDivide(NaN, NaN)).toBe(0);
    });
  });

  describe('clamp', () => {
    it('clamps values within range', () => {
      expect(clamp(5, 0, 10)).toBe(5);
      expect(clamp(0, 0, 10)).toBe(0);
      expect(clamp(10, 0, 10)).toBe(10);
    });

    it('clamps values below min', () => {
      expect(clamp(-5, 0, 10)).toBe(0);
      expect(clamp(-100, 0, 10)).toBe(0);
    });

    it('clamps values above max', () => {
      expect(clamp(15, 0, 10)).toBe(10);
      expect(clamp(100, 0, 10)).toBe(10);
    });
  });

  describe('truncate', () => {
    it('returns string unchanged if within limit', () => {
      expect(truncate('hello', 10)).toBe('hello');
      expect(truncate('hello', 5)).toBe('hello');
    });

    it('truncates long strings with ellipsis', () => {
      expect(truncate('hello world', 8)).toBe('hello...');
      expect(truncate('abcdefghij', 7)).toBe('abcd...');
    });

    it('handles edge cases', () => {
      expect(truncate('', 5)).toBe('');
      expect(truncate('abc', 3)).toBe('abc');
    });

    it('handles small maxLength without producing degenerate output', () => {
      expect(truncate('hello', 2)).toBe('he');
      expect(truncate('hello', 1)).toBe('h');
      expect(truncate('hello', 0)).toBe('');
      expect(truncate('hello', 3)).toBe('hel');
    });
  });

  describe('formatBytes', () => {
    it('handles zero', () => {
      expect(formatBytes(0)).toBe('0 B');
    });

    it('formats bytes correctly', () => {
      expect(formatBytes(500)).toBe('500 B');
      expect(formatBytes(1)).toBe('1 B');
    });

    it('formats KB correctly', () => {
      expect(formatBytes(1024)).toBe('1.0 KB');
      expect(formatBytes(1536)).toBe('1.5 KB');
    });

    it('formats MB correctly', () => {
      expect(formatBytes(1024 * 1024)).toBe('1.0 MB');
      expect(formatBytes(5.5 * 1024 * 1024)).toBe('5.5 MB');
    });

    it('formats GB correctly', () => {
      expect(formatBytes(1024 * 1024 * 1024)).toBe('1.0 GB');
    });

    it('handles negative and non-finite values safely', () => {
      expect(formatBytes(-100)).toBe('0 B');
      expect(formatBytes(-1024)).toBe('0 B');
      expect(formatBytes(Infinity)).toBe('0 B');
      expect(formatBytes(NaN)).toBe('0 B');
    });
  });

  describe('formatCostUsd', () => {
    it('formats small costs with 6 decimal places', () => {
      expect(formatCostUsd(0.001234)).toBe('$0.001234');
      expect(formatCostUsd(0.000001)).toBe('$0.000001');
    });

    it('formats medium costs with 4 decimal places', () => {
      expect(formatCostUsd(0.05)).toBe('$0.0500');
      expect(formatCostUsd(0.1234)).toBe('$0.1234');
      expect(formatCostUsd(0.99)).toBe('$0.9900');
    });

    it('formats large costs with 2 decimal places', () => {
      expect(formatCostUsd(1.00)).toBe('$1.00');
      expect(formatCostUsd(42.567)).toBe('$42.57');
      expect(formatCostUsd(100)).toBe('$100.00');
    });

    it('formats zero correctly', () => {
      expect(formatCostUsd(0)).toBe('$0.000000');
    });

    it('formats negative costs (refunds) with correct precision', () => {
      expect(formatCostUsd(-5.00)).toBe('$-5.00');
      expect(formatCostUsd(-0.05)).toBe('$-0.0500');
      expect(formatCostUsd(-0.001)).toBe('$-0.001000');
    });
  });

  describe('wsRoom', () => {
    it('generates correct room format', () => {
      expect(wsRoom('workspace', '123')).toBe('workspace:123');
      expect(wsRoom('project', 'abc')).toBe('project:abc');
      expect(wsRoom('agent', 'uuid-here')).toBe('agent:uuid-here');
    });
  });

  describe('parseWsRoom', () => {
    it('parses valid room strings', () => {
      expect(parseWsRoom('workspace:123')).toEqual({ type: 'workspace', id: '123' });
      expect(parseWsRoom('project:abc')).toEqual({ type: 'project', id: 'abc' });
      expect(parseWsRoom('agent:uuid-here')).toEqual({ type: 'agent', id: 'uuid-here' });
    });

    it('parses room strings with colons in the ID', () => {
      expect(parseWsRoom('workspace:id:with:colons')).toEqual({ type: 'workspace', id: 'id:with:colons' });
    });

    it('returns null for invalid room strings', () => {
      expect(parseWsRoom('')).toBeNull();
      expect(parseWsRoom('nocolon')).toBeNull();
      expect(parseWsRoom(':empty-type')).toBeNull();
      expect(parseWsRoom('empty-id:')).toBeNull();
    });
  });
});
