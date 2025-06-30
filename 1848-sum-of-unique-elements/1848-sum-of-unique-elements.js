/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
     let sum = 0;
    for( let i=0; i<nums.length;i++){
        let flag = 0;
        for( let j=0;j<nums.length; j++){
            if(i!=j && nums[i]== nums[j]){
                flag =1;
                break
            }
        }
        if(flag==0){
            sum+=nums[i];
        }
    }
    return sum;
};