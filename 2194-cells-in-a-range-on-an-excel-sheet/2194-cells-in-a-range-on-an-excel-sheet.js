/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
    const res = [];

    const startCol = s[0];
    const endCol = s[3];

    const startRow = parseInt(s[1]);
    const endRow = parseInt(s[4]);

    for (let col = startCol.charCodeAt(0); col <= endCol.charCodeAt(0); col++) {
        for (let row = startRow; row <= endRow; row++) {
            res.push(String.fromCharCode(col) + row.toString());
        }
    }

    return res;
};