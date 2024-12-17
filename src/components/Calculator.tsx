import React, { useState } from 'react';
import { add, subtract, multiply, divide } from '../utils/math';
import { isValidNumber } from '../utils/validation';

export const Calculator: React.FC = () => {
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [operation, setOperation] = useState<string>('+');
  const [result, setResult] = useState<string>('');

  const calculate = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (!isValidNumber(a) || !isValidNumber(b)) {
      setResult('Invalid input');
      return;
    }

    try {
      let calculatedResult: number;
      switch (operation) {
        case '+':
          calculatedResult = add(a, b);
          break;
        case '-':
          calculatedResult = subtract(a, b);
          break;
        case '*':
          calculatedResult = multiply(a, b);
          break;
        case '/':
          calculatedResult = divide(a, b);
          break;
        default:
          setResult('Invalid operation');
          return;
      }
      setResult(calculatedResult.toString());
    } catch (error) {
      setResult(error instanceof Error ? error.message : 'Error occurred');
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="space-y-4">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          className="border p-2 rounded"
          placeholder="First number"
        />
        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
          className="border p-2 rounded mx-2"
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">×</option>
          <option value="/">/</option>
        </select>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          className="border p-2 rounded"
          placeholder="Second number"
        />
        <button
          onClick={calculate}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Calculate
        </button>
        {result && (
          <div className="mt-4">
            Result: <span className="font-bold">{result}</span>
          </div>
        )}
      </div>
    </div>
  );