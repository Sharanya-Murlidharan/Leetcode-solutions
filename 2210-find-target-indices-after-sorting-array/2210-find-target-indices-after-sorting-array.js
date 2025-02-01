/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let number = [];
    nums.sort((a,b)=>a-b);
    for(let i=0; i<nums.length; i++){
        if(nums[i]=== target){
            number.push(i)
        }
    }
    return number;
};