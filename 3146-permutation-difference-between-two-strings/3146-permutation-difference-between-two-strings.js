/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
     let count = 0;
    for (let ch of s) {
        count += Math.abs(s.indexOf(ch) - t.indexOf(ch));
    }
    return count;
};