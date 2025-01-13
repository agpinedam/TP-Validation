// functions.test.js

const {
    my_alpha_number_t,
    sum,
    my_size_alpha_t,
    my_display_alpha_t,
    my_array_alpha_t,
    my_is_posi_neg_t,
    fibo,
    my_display_alpha_reverse_t,
    my_length_array_t,
    my_display_unicode_t,
    quickSort,
  } = require("../src/functions");


  
  describe("my_alpha_number_t", () => {
    it("should convert a number to a string", () => {
      expect(my_alpha_number_t(123)).toBe("123");
      expect(my_alpha_number_t(0)).toBe("0");
      expect(my_alpha_number_t(-456)).toBe("-456");
    });
  
    it("should convert a boolean to a string", () => {
      expect(my_alpha_number_t(true)).toBe("true");
      expect(my_alpha_number_t(false)).toBe("false");
    });
  
    it("should handle null and undefined inputs", () => {
      expect(my_alpha_number_t(null)).toBe("null");
      expect(my_alpha_number_t(undefined)).toBe("undefined");
    });
  
    it("should handle string inputs correctly", () => {
      expect(my_alpha_number_t("hello")).toBe("hello");
      expect(my_alpha_number_t("")).toBe("");
    });
  
    it("should handle object inputs", () => {
      expect(my_alpha_number_t({ key: "value" })).toBe("[object Object]");
    });
  
    it("should handle array inputs", () => {
      expect(my_alpha_number_t([1, 2, 3])).toBe("1,2,3");
      expect(my_alpha_number_t([])).toBe("");
    });
  });
  
  describe("sum", () => {
    it("should return the sum of two numbers", () => {
      expect(sum(2, 3)).toBe(5);
      expect(sum(-1, 1)).toBe(0);
    });
  
    it("should return 0 if one of the inputs is not a number", () => {
      expect(sum(2, "3")).toBe(0);
      expect(sum("2", 3)).toBe(0);
      expect(sum(null, 3)).toBe(0);
    });
  
    it("should return 0 if no inputs are provided", () => {
      expect(sum()).toBe(0);
    });
  });
  
  describe("my_size_alpha_t", () => {
    // Happy Path
    it("should return the size of a non-empty string", () => {
      expect(my_size_alpha_t("hello")).toBe(5);
      expect(my_size_alpha_t("world")).toBe(5);
    });
  
    it("should return 0 for an empty string", () => {
      expect(my_size_alpha_t("")).toBe(0);
    });
  
    // Non-Happy Path
    it("should return 0 for non-string inputs", () => {
      expect(my_size_alpha_t(123)).toBe(0);
      expect(my_size_alpha_t(null)).toBe(0);
      expect(my_size_alpha_t(undefined)).toBe(0);
      expect(my_size_alpha_t({})).toBe(0);
      expect(my_size_alpha_t([])).toBe(0);
    });
  });
  
  describe("my_display_alpha_t", () => {
    it("should return the alphabet as a string", () => {
      expect(my_display_alpha_t()).toBe("abcdefghijklmnopqrstuvwxyz");
    });
  });
  
  describe("my_array_alpha_t", () => {
    it("should return an array of characters from a string", () => {
      expect(my_array_alpha_t("hello")).toEqual(["h", "e", "l", "l", "o"]);
    });
  
    it("should return an empty array for an empty string", () => {
      expect(my_array_alpha_t("")).toEqual([]);
    });
  
    it("should handle non-string inputs gracefully", () => {
      expect(my_array_alpha_t(123)).toEqual([]);
      expect(my_array_alpha_t(null)).toEqual([]);
    });

    describe("my_is_posi_neg_t", () => {
        it("should return 'NEGATIVE' for numbers <= 0", () => {
          expect(my_is_posi_neg_t(0)).toBe("NEGATIVE");
          expect(my_is_posi_neg_t(-5)).toBe("NEGATIVE");
        });
      
        it("should return 'POSITIF' for numbers > 0", () => {
          expect(my_is_posi_neg_t(1)).toBe("POSITIF");
          expect(my_is_posi_neg_t(100)).toBe("POSITIF");
        });
      });
      
      describe("fibo", () => {
        it("should return 0 for n <= 0", () => {
          expect(fibo(0)).toBe(0);
          expect(fibo(-1)).toBe(0);
        });
      
        it("should return 1 for n = 1 or n = 2", () => {
          expect(fibo(1)).toBe(1);
          expect(fibo(2)).toBe(1);
        });
      
        it("should return the nth Fibonacci number for n > 2", () => {
          expect(fibo(3)).toBe(2);
          expect(fibo(4)).toBe(3);
          expect(fibo(5)).toBe(5);
        });
      });
      
      describe("my_display_alpha_reverse_t", () => {
        it("should return the reversed alphabet", () => {
          expect(my_display_alpha_reverse_t()).toBe("zyxwvutsrqponmlkjihgfedcba");
        });
      });

      describe("my_length_array_t", () => {
        it("should return the length of an array", () => {
          expect(my_length_array_t([1, 2, 3])).toBe(3);
          expect(my_length_array_t([])).toBe(0);
        });
        
        it("should return 0 for an empty string", () => {
            expect(my_length_array_t("")).toBe(0);                      // Unhappy path: empty string (not an array)
          });
      
        it("should return 0 for an empty array", () => {
          expect(my_length_array_t([])).toBe(0);
        });
      });

      describe("my_display_unicode_t", () => {
        it("should convert an array of numbers into corresponding characters", () => {
          expect(my_display_unicode_t([72, 101, 108, 108, 111])).toBe("Hello");
          expect(my_display_unicode_t([119, 111, 114, 108, 100])).toBe("world");
        });
      
        it("should handle an array with only numbers from 0 to 31", () => {
          expect(my_display_unicode_t([48, 49, 50, 51, 52, 53])).toBe("012345");
        });
      
        it("should return an empty string for an empty array", () => {
          expect(my_display_unicode_t([])).toBe("");
        });
      
        it("should handle arrays containing space characters", () => {
          expect(my_display_unicode_t([32, 65, 66, 67])).toBe(" ABC");
        });
      
        it("should ignore characters outside the specified ranges", () => {
          expect(my_display_unicode_t([200, 300, 400])).toBe(""); // No valid Unicode characters within these ranges
        });
      
        it("should handle arrays with non-numeric values", () => {
          expect(my_display_unicode_t([65, "A", 66])).toBe("AB");
        });
      });
      
      describe("quickSort", () => {
        it("should sort an array of numbers in ascending order", () => {
          expect(quickSort([3, 1, 4, 1, 5, 9])).toEqual([1, 1, 3, 4, 5, 9]);
          expect(quickSort([10, 2, 5, 0, 4])).toEqual([0, 2, 4, 5, 10]);
        });
      
        it("should handle an empty array", () => {
          expect(quickSort([])).toEqual([]);
        });
      
        it("should handle an array with one element", () => {
          expect(quickSort([42])).toEqual([42]);
        });
      
        it("should handle arrays with negative numbers", () => {
          expect(quickSort([-3, -1, -2, 0])).toEqual([-3, -2, -1, 0]);
        });
      
        it("should handle arrays with duplicate values", () => {
          expect(quickSort([1, 2, 1, 3, 2, 3])).toEqual([1, 1, 2, 2, 3, 3]);
        });
      
        it("should sort arrays containing strings", () => {
          expect(quickSort(["banana", "apple", "pear"])).toEqual(["apple", "banana", "pear"]);
        });
      
        it("should handle arrays with non-numeric values", () => {
          expect(quickSort([true, "hello", 5, false])).toEqual([false, true, 5, "hello"]);
        });
      });      
      
  });
  