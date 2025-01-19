/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";

    // Take the first string as the reference prefix
    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        // Adjust the prefix by comparing it with each string
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1); // Shorten the prefix
            if (prefix === "") return ""; // No common prefix
        }
    }

    return prefix;
}