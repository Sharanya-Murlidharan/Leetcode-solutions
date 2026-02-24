/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
     let rods = '0123456789';
    let count = 0;
    for (let rod of rods) { // looping over the variable, rods
        if (rings.includes(`R${rod}`) && 
          rings.includes(`G${rod}`) && 
          rings.includes(`B${rod}`)) count++; // checking if rings includes
			// R, G, & B on that rod
			// if so, add to count
    } return count;
};