/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
     let a = "", b = "";

    for (const s of word1) a += s;
    for (const s of word2) b += s;

    return a === b;
};