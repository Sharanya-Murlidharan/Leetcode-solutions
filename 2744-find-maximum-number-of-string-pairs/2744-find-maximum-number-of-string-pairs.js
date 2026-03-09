/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    let set = new Set();
  let count = 0;
  
  for (let i = 0; i < words.length; i++) {
    let reversed = words[i].split("").reverse().join("");
    if (set.has(reversed)) {
      count++;
      set.delete(reversed);
    } else {
      set.add(words[i]);
    }
  }

  return count;
};