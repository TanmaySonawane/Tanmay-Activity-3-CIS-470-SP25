
const  classifyTriangle  = require('./classifyTriangle');

describe('classifyTriangle: Required input conditions -  See readme for more details', () => {
    test('should classify an Equilateral triangle', () => {
      expect(classifyTriangle(10, 10, 10)).toBe('Equilateral');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
  
    test('should return error for invalid inputs', () => {
      expect(classifyTriangle(0, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
        // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
  
    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(1, 2, 3)).toBe('Not a Triangle');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });

    test('should classify an Isosceles triangle', () => {
      expect(classifyTriangle(10, 10, 5)).toBe('Isosceles');
      // Weak Normal Equivalence Class Test Case
    });

    test('should classify a Scalene triangle', () => {
      expect(classifyTriangle(7, 9, 11)).toBe('Scalene'); // Weak Normal Equivalence Class Test Case
    });

    test('should return error for negative side length', () => {
      expect(classifyTriangle(-1, 5, 5)).toBe('Error: Input conditions C1, C2, or C3 failed.'); // Robust Boundary Value Test Case
    });

    test('should return error for side length exceeding 200', () => {
      expect(classifyTriangle(201, 150, 150)).toBe('Error: Input conditions C1, C2, or C3 failed.'); // Robust Boundary Value Test Case
    });

    test('should return "Not a Triangle" for sides that do not satisfy triangle inequality', () => {
      expect(classifyTriangle(1, 10, 20)).toBe('Not a Triangle'); // Weak Normal Equivalence Class Test Case
    });

    test('should classify an Equilateral triangle at max boundary', () => {
      expect(classifyTriangle(200, 200, 200)).toBe('Equilateral'); // Robust Boundary Value Test Case
    });

    test('should classify an Isosceles triangle at max boundary', () => {
      expect(classifyTriangle(200, 200, 150)).toBe('Isosceles'); // Robust Boundary Value Test Case
    });

    test('should classify a Scalene triangle at max boundary', () => {
      expect(classifyTriangle(199, 198, 197)).toBe('Scalene'); // Robust Boundary Value Test Case
    });

    test('should classify an Isosceles triangle at min boundary', () => {
      expect(classifyTriangle(2, 2, 1)).toBe('Isosceles'); // Robust Boundary Value Test Case
    });

    test('should return "Error: input conditions failed" for zero-length side', () => {
      expect(classifyTriangle(0, 5, 5)).toBe('Error: Input conditions C1, C2, or C3 failed.'); // Robust Boundary Value Test Case
    });
    
    test('should classify a Scalene triangle', () => {
      expect(classifyTriangle(13, 14.2, 15)).toBe('Scalene'); // Weak Normal Equivalence Class Test Case
    });

    test('should return "Not a Triangle" when one side is sum of two others', () => {
      expect(classifyTriangle(3, 3, 6)).toBe('Not a Triangle'); // Weak Normal Equivalence Class Test Case
    });

    test('should classify an Equilateral triangle', () => {
      expect(classifyTriangle(20/2, 10, 10)).toBe('Equilateral'); // Weak Normal Equivalence Class Test Case
    });

    test('should return error for string input', () => {
      expect(classifyTriangle("10", 10, 10)).toThrow; // Weak Normal Equivalence Class Test Case
    });

    test('should return error for all sides being zero', () => {
      expect(classifyTriangle(0, 0, 0)).toBe('Error: Input conditions C1, C2, or C3 failed.'); // Robust Boundary Value Test Case
    });

    test('should return "Not a Triangle" when the addition of two sides is less than third', () => {
      expect(classifyTriangle(5, 5, 11)).toBe('Not a Triangle'); // Weak Normal Equivalence Class Test Case
    });
    
    test('should return "Not a Triangle" when the addition of two sides is less than third', () => {
      expect(classifyTriangle(3, 4, 20)).toBe('Not a Triangle'); // Weak Normal Equivalence Class Test Case
    });
    
    test('should return error for input exceeding upper boundary', () => {
      expect(classifyTriangle(201, 201, 201)).toBe('Error: Input conditions C1, C2, or C3 failed.'); // Robust Boundary Value Test Case
    });

    test('should return error for a negative side value', () => {
      expect(classifyTriangle(-5, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.'); // Robust Boundary Value Test Case
    });

    test('should classify an Isosceles triangle with two larger sides', () => {
      expect(classifyTriangle(15, 15, 10)).toBe('Isosceles'); // Weak Normal Equivalence Class Test Case
    });

  });
  