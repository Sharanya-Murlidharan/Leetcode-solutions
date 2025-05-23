/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let min = nums[0]
    let max = -1
    for(let i = 0;i<nums.length;i++){
        if(nums[i]>min){
            max=Math.max(max,nums[i]-min)
        }else{
            min=nums[i]
        }
    }
    return max
};