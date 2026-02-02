/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    const idx = word.indexOf(ch);
    if (idx === -1) {
        return word;
    }

    const prefix = word.substring(0, idx + 1);
    const reversedPrefix = prefix.split('').reverse().join('');
    return reversedPrefix + word.substring(idx + 1);
};