/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
     let sum_not_divisible = 0;
    let sum_divisible = 0;

    for (let i = 1; i <= n; i++) {
        if (i % m !== 0) {
            sum_not_divisible += i;
        } else {
            sum_divisible += i;
        }
    }

    return sum_not_divisible - sum_divisible;
};