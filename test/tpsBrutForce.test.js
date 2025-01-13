// Import the functions to test
const { tspBrutForce, permuter } = require('../src/tpsBrutForceFunct'); 
describe('tspBrutForce', () => {

    it('Should correctly handle the base case - Happy Path', () => {
        const distances = {
            A: { A: 0 }
        };

        const result = tspBrutForce(distances);

        expect(result.minDistance).toBe(0); // The only city returns to itself
        expect(result.meilleurePermutation).toEqual(['A']); // The best permutation is the only one
    });

    it('Should correctly handle the case with negative distances', () => {
        const distances = {
            A: { B: -10, C: 15, D: 20 },
            B: { A: -10, C: -35, D: 25 },
            C: { A: 15, B: -35, D: -30 },
            D: { A: 20, B: 25, C: -30 }
        };

        const result = tspBrutForce(distances);

        expect(result.minDistance).toBe(-55); // Checking the minimum distance with negative values
        expect(result.meilleurePermutation).toEqual(['A', 'B', 'C', 'D']); // Checking the best permutation with negatives
    });

    it('Should correctly handle the case when all distances are equal', () => {
        const distances = {
            A: { B: 5, C: 5, D: 5 },
            B: { A: 5, C: 5, D: 5 },
            C: { A: 5, B: 5, D: 5 },
            D: { A: 5, B: 5, C: 5 }
        };

        const result = tspBrutForce(distances);

        expect(result.minDistance).toBe(20); // Minimum distance when all distances are equal
        expect(result.meilleurePermutation).toEqual(['A', 'B', 'C', 'D']); // Checking that any order is valid
    });
});
