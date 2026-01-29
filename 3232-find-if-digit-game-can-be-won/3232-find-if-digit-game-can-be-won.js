/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
     let singleSum = 0;
    let doubleSum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 9) {
            doubleSum += nums[i]
        }
        else {
            singleSum += nums[i];
        }
    }
    return !(singleSum === doubleSum)
};