/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
     const adi = x.toString().split('')
    let sum=0
    for(let i=0;i<adi.length;i++){
        sum+=parseInt(adi[i])
    }
    if(x%sum==0){
        return sum
    }
    return -1
};