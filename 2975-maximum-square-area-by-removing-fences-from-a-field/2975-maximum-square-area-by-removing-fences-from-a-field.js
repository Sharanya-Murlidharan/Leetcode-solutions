/**
 * @param {number} m
 * @param {number} n
 * @param {number[]} hFences
 * @param {number[]} vFences
 * @return {number}
 */
var maximizeSquareArea = function(m, n, hFences, vFences) {
    const MOD = 1000000007;

    // If grid is already a square, biggest square uses full side
    if (m === n) return ((n - 1) ** 2) % MOD;

    // Store all possible vertical distances between horizontal fences
    const hDiff = new Set();

    // Add boundary fences at position 1
    hFences.push(1);
    vFences.push(1);

    // Sort fence positions
    hFences.sort((a, b) => a - b);
    vFences.sort((a, b) => a - b);

    // Add boundary fences at the end of grid
    hFences.push(m);
    vFences.push(n);

    // Compute all possible heights between horizontal fences
    for (let i = 0; i < hFences.length; i++) {
        for (let j = i + 1; j < hFences.length; j++) {
            hDiff.add(hFences[j] - hFences[i]);
        }
    }

    let maxSide = -1;

    // Check which vertical distances also exist in horizontal distances
    for (let i = 0; i < vFences.length; i++) {
        for (let j = i + 1; j < vFences.length; j++) {
            const val = vFences[j] - vFences[i];
            if (hDiff.has(val)) {
                maxSide = Math.max(maxSide, val);
            }
        }
    }

    // No possible square
    if (maxSide === -1) return -1;

    // Return max square area with modulo
    return Number((BigInt(maxSide) * BigInt(maxSide)) % BigInt(MOD));
};