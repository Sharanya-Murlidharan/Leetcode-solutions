/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    
    const GCD = (a,b) => !b ? a: GCD(b, a%b);
    let min = Infinity;
    let max = -Infinity;
    
    for(let num of nums){
        if(num > max) max = num;
        if(num < min) min = num;
    } 
    
    return GCD(max, min);
};