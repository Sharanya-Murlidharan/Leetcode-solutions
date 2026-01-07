/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let seen = new Set(); // stores numbers we have seen

    for (let num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num); 
    }

    return false;
};