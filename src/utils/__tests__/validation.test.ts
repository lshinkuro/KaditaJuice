import { describe, it, expect } from 'vitest';
import { isPositive, isInRange, isValidNumber } from '../validation';

describe('Validation Utils', () => {
  describe('isPositive', () => {
    it('returns true for positive numbers', () => {
      expect(isPositive(5)).toBe(true);
    });

    it('returns false for zero and negative numbers', () => {
      expect(isPositive(0)).toBe(false);
      expect(isPositive(-5)).toBe(false);
    });
  });

  describe('isInRange', () => {
    it('returns true for numbers within range', () => {
      expect(isInRange(5, 0, 10)).toBe(true);
    });

    it('returns true for boundary values', () => {
      expect(isInRange(0, 0, 10)).toBe(true);
      expect(isInRange(10, 0, 10)).toBe(true);
    });

    it('returns false for numbers outside range', () => {
      expect(isInRange(-1, 0, 10)).toBe(false);
      expect(isInRange(11, 0, 10)).toBe(false);
    });
  });

  describe('isValidNumber', () => {
    it('returns true for valid numbers', () => {
      expect(isValidNumber(5)).toBe(true);
      expect(isValidNumber(-5)).toBe(true);
      expect(isValidNumber(0)).toBe(true);
    });

    it('returns false for invalid numbers', () => {
      expect(isValidNumber(NaN)).toBe(false);
      expect(isValidNumber('5')).toBe(false);
      expect(isValidNumber(null)).toBe(false);
      expect(isValidNumber(undefined)).toBe(false);
    });
  });
});