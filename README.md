# Project Title

## Overview

This project contains a collection of unit tests designed to validate various utility functions used throughout the application. The tests cover different edge cases, input types, and expected outcomes, ensuring the robustness and correctness of the implemented functions.

## Table of Contents

- [Function Descriptions](#function-descriptions)
- [Tests](#tests)
- [How to Run the Tests](#how-to-run-the-tests)
- [Results](#results)

---

## Function Descriptions

### 1. **my_alpha_number_t**
This function takes an input of various types (numbers, booleans, strings, objects, arrays) and returns its string representation.
- **Input:** Any data type (number, boolean, null, undefined, string, object, array).
- **Output:** String representation of the input.

### 2. **sum**
This function returns the sum of two numbers. It handles both numeric and non-numeric inputs gracefully.
- **Input:** Two numbers or non-numeric values.
- **Output:** The sum of the two inputs.

### 3. **my_size_alpha_t**
This function returns the length of a given input (string, array, object). It returns 0 for empty inputs.
- **Input:** String, array, or object.
- **Output:** Length of the input.

### 4. **my_display_alpha_t**
This function returns the alphabet as a string.
- **Input:** None.
- **Output:** String containing the alphabet.

### 5. **my_array_alpha_t**
This function converts a string into an array of characters.
- **Input:** A string.
- **Output:** An array of characters.

### 6. **my_is_posi_neg_t**
This function classifies numbers as 'POSITIVE' or 'NEGATIVE'.
- **Input:** A number.
- **Output:** String ('POSITIVE' or 'NEGATIVE').

### 7. **fibo**
This function calculates the Fibonacci number at a given index. It handles base cases and computes recursively.
- **Input:** A positive integer index.
- **Output:** The Fibonacci number at the given index.

### 8. **my_display_alpha_reverse_t**
This function returns the alphabet in reverse order.
- **Input:** None.
- **Output:** String containing the alphabet in reverse order.

### 9. **my_length_array_t**
This function returns the length of an array or a string.
- **Input:** An array or string.
- **Output:** Length of the input.

### 10. **my_display_unicode_t**
This function converts an array of Unicode numbers into a string, ignoring non-numeric values.
- **Input:** An array of Unicode numbers.
- **Output:** A string formed from the Unicode numbers.

### 11. **quickSort**
This function sorts an array of numbers in ascending order using the Quick Sort algorithm.
- **Input:** An array of numbers.
- **Output:** A sorted array.

### 12. **resoudreSudoku** & **estValide**
These functions solve Sudoku puzzles and validate placements within a Sudoku grid.
- **Input:** A 2D array representing a Sudoku puzzle.
- **Output:** Solved Sudoku puzzle or validation result (true/false).

### 13. **tspBrutForce**
This function solves the Traveling Salesperson Problem using brute force.
- **Input:** An array of cities with distances.
- **Output:** The shortest possible tour.

---

## Tests

### 1. **my_alpha_number_t Test**
- **`it("should convert numbers to strings")`**: Verifies that numbers are correctly converted to strings.
- **`it("should convert booleans to strings")`**: Checks boolean to string conversion.
- **`it("should handle null and undefined values")`**: Verifies behavior with null and undefined.
- **`it("should convert strings to strings")`**: Ensures string inputs are returned as-is.
- **`it("should convert objects to strings")`**: Validates conversion of objects.
- **`it("should convert arrays to strings")`**: Confirms array to string conversion.

### 2. **sum Test**
- **`it("should return the sum of two numbers")`**: Checks correct summation of two numeric inputs.
- **`it("should handle non-numeric inputs gracefully")`**: Verifies result with non-numeric inputs.
- **`it("should return 0 when no inputs are provided")`**: Verifies behavior with no inputs.

### 3. **my_size_alpha_t Test**
- **`it("should return the length of a non-empty string")`**: Verifies correct length of non-empty strings.
- **`it("should return 0 for an empty string")`**: Validates result for empty strings.
- **`it("should handle other types gracefully")`**: Checks handling of numbers, nulls, objects, arrays.

### 4. **my_display_alpha_t Test**
- **`it("should return the alphabet as a string")`**: Confirms alphabet output.

### 5. **my_array_alpha_t Test**
- **`it("should convert a string to an array of characters")`**: Verifies conversion from string to array.
- **`it("should return an empty array for an empty string")`**: Confirms behavior for empty strings.

### 6. **my_is_posi_neg_t Test**
- **`it("should classify negative numbers as 'NEGATIVE'")`**: Validates negative number classification.
- **`it("should classify positive numbers as 'POSITIVE'")`**: Verifies positive number classification.

### 7. **fibo Test**
- **`it("should return 0 for indices less than or equal to 0")`**: Verifies base case.
- **`it("should return 1 for indices 1 and 2")`**: Confirms initial Fibonacci numbers.
- **`it("should calculate Fibonacci numbers correctly for other indices")`**: Verifies recursive calculation.

### 8. **my_display_alpha_reverse_t Test**
- **`it("should return the alphabet in reverse order")`**: Confirms reversed alphabet output.

### 9. **my_length_array_t Test**
- **`it("should return the length of a non-empty array")`**: Checks correct length of non-empty arrays.
- **`it("should return 0 for an empty array")`**: Validates behavior for empty arrays.

### 10. **my_display_unicode_t Test**
- **`it("should convert an array of Unicode numbers to a string")`**: Verifies Unicode array to string conversion.
- **`it("should ignore non-numeric characters")`**: Validates ignoring non-numeric Unicode.
- **`it("should return an empty string for empty arrays")`**: Confirms behavior for empty arrays.

### 11. **quickSort Test**
- **`it("should sort an array of numbers in ascending order")`**: Verifies sorting of numbers.
- **`it("should handle empty arrays correctly")`**: Checks handling of empty arrays.
- **`it("should handle single element arrays correctly")`**: Validates behavior for single-element arrays.

### 12. **resoudreSudoku** & **estValide Test**

- **`it("should solve a simple Sudoku puzzle")`**: Verifies the solution of simple Sudoku puzzles.
- **`it("should validate valid Sudoku placements")`**: Verifies the validation of valid placements in Sudoku.
- **`it("should reject invalid placements in Sudoku")`**: Verifies the rejection of invalid placements in Sudoku.

### 13. **tspBrutForce Test**
- **`it("should handle the base case correctly")`**: Verifies behavior with a single city.
- **`it("should handle negative distances gracefully")`**: Checks handling of negative distances.
- **`it("should handle equal distances")`**: Validates handling of equal distances.

---

## How to Run the Tests

To run the tests for this project:

1. Clone the repository.
2. Navigate to the project directory.
3. Run the tests using your preferred testing framework (e.g., `jest` or `mocha`).

Example using `jest`:
```bash
npm install
npm test
```

---

## Results 

| File                  | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s |
|------------------------|---------|----------|---------|---------|-------------------|
| All files              |     100 |      100 |     100 |     100 |                   |
| functions.js           |     100 |      100 |     100 |     100 |                   |
| sudoGrille.js          |     100 |      100 |     100 |     100 |                   |
| tpsBrutForceFunct.js   |     100 |      100 |     100 |     100 |                   |
|------------------------|---------|----------|---------|---------|-------------------|

**Test Suites:** 3 passed, 3 total  
**Tests:** 44 passed, 44 total  
**Snapshots:** 0 total  
**Time:** 0.702 s, estimated 1 s



