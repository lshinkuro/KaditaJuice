/**
 * Math utility functions
 */

/**
 * Adds two numbers
 */
export const add = (a: number, b: number): number => a + b;

/**
 * Subtracts two numbers
 */
export const subtract = (a: number, b: number): number => a - b;

/**
 * Multiplies two numbers
 */
export const multiply = (a: number, b: number): number => a * b;

/**
 * Divides two numbers
 * @throws {Error} When dividing by zero
 */
export const divide = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}