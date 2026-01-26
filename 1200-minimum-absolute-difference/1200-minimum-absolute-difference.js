/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a, b) => a - b);

    let minDiff = Infinity;
    let result = [];

    // First pass
    for (let i = 0; i < arr.length - 1; i++) {
        minDiff = Math.min(minDiff, arr[i + 1] - arr[i]);
    }

    // Second pass
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] === minDiff) {
            result.push([arr[i], arr[i + 1]]);
        }
    }

    return result;
};