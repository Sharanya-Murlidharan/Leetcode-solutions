/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    let sChars = S.split('');
    let tChars = T.split('');
    
    let k = processString(sChars);
    let p = processString(tChars);

    if (k !== p) return false;

    for (let i = 0; i < k; i++) {
        if (sChars[i] !== tChars[i]) return false;
    }

    return true;
};

function processString(chars) {
    let k = 0;
    for (let c of chars) {
        if (c !== '#') {
            chars[k++] = c;
        } else if (k > 0) {
            k--;
        }
    }
    return k;
}