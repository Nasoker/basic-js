const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
    let array = [];
    let counts = 0;

    for (let i = 0; i < backyard.length; i++) {
        array = array.concat(backyard[i]);
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] === '^^') {
            counts += 1;
        }
    }

    return counts;
};