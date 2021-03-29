const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (!date) {
        return 'Unable to determine the time of year!'
    } else if (!(date instanceof Date)) {
        throw new Error();
    }

    let month = date.getMonth();


    if (!date.toString().includes(date.getFullYear().toString())) {
        throw new Error();
    }



    if (month < 2 || month === 11) {
        return 'winter';
    } else if (month > 1 && month < 5) {
        return 'spring';
    } else if (month > 4 && month < 8) {
        return 'summer';
    } else if (month > 7 && month < 11) {
        return 'autumn';
    }

    throw new Error('FAIL');
};