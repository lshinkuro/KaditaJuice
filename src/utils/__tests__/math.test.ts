import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide } from '../math';

describe('Math Utils', () => {
  describe('add', () => {
    it('adds two positive numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('handles negative numbers', () => {
      expect(add(-2, 3)).toBe(1);
      expect(add(-2, -3)).toBe(-5);
    });
  });

  describe('subtract', () => {
    it('subtracts two numbers correctly', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    it('handles negative numbers', () => {
      expect(subtract(2, -3)).toBe(5);
    });
  });

  describe('multiply', () => {
    it('multiplies two numbers correctly', () => {
      expect(multiply(2, 3)).toBe(6);
    });

    it('handles zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });
  });

  describe('divide', () => {
    it('divides two numbers correctly', () => {
      expect(divide(6, 2)).toBe(3);
    });

    it('throws error when dividing by zero', () => {
      expect(() => divide(5, 0)).toThrow('Division by zero is not allowed');
    });
  });
});