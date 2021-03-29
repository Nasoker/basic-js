const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (arr.length === 0) {
        return [];
    }

    if (!arr instanceof Array) {
        throw new Error();
    }

    let array = [];
    array = array.concat(arr);

    for (let i = 0; i < array.length; i++) {
        if (array[i] === '--discard-next') {
            if (i === array.length - 1) {
                array.splice(i, 1);
            } else {
                if (i < array.length - 2 &&
                    ((array[i + 2] === '--discard-prev') ||
                        (array[i + 2] === '--double-prev'))) {
                    array.splice(i, 3);
                    i = i - 3;
                } else {
                    array.splice(i, 2);
                    i = i - 2;
                }
            }
        } else if (array[i] === '--discard-prev') {
            if (i === 0) {
                array.splice(i, 1);
            } else {
                array.splice(i - 1, 2);
                i = i - 1;
            }
        } else if (array[i] === '--double-next') {
            if (i === array.length - 1) {
                array.splice(i, 1);
            } else {
                array[i] = array[i + 1];
            }
        } else if (array[i] === '--double-prev') {
            if (i === 0) {
                array.splice(i, 1);
            } else {
                array[i] = array[i - 1];
            }
        }
    }

    return array;
}