/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    const count = {};

    // Count characters in s
    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    // Decrease count using t
    for (let char of t) {
        if (!count[char]) return false; // char not found or count exhausted
        count[char]--;
    }

    return true;
}

// Example usage
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "bello"));   // false
console.log(isAnagram("anagram", "nagaram"));// true
