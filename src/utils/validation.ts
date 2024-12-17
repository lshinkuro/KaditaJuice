/**
 * Validation utility functions
 */

/**
 * Checks if a number is positive
 */
export const isPositive = (num: number): boolean => num > 0;

/**
 * Checks if a number is within a range (inclusive)
 */
export const isInRange = (num: number, min: number, max: number): boolean => 
  num >= min && num <= max;

/**
 * Checks if a value is a valid number
 */
export const isValidNumber = (value: any): boolean => 
  typeof value === 'number' && !isNaN(value);