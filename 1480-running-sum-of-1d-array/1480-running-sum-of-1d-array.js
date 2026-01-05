/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let output = new Array(nums.length)
    output[0] = nums[0];
    for(let idx = 1; idx < nums.length; idx++) {
        output[idx] = output[idx-1] + nums[idx];
    }
    return output;
};