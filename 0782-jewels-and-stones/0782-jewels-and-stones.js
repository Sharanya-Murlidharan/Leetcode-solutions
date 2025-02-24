/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
     let len = stones.length;
    for (let i = 0; i < jewels.length; i++) stones = stones.replaceAll(jewels[i], "");
    return len - stones.length;
};