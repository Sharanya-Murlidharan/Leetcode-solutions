/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    let result = "";
    let lastChar = "";
    for (let char of s) {
        if (/[a-zA-Z]/.test(char)) {
            result += char;
            lastChar = char;
        } else {
            let shift = parseInt(char);
            result += String.fromCharCode(lastChar.charCodeAt(0) + shift);
        }
    }
    return result;
};