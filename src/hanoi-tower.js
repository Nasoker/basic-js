const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let object;

    if (disksNumber >= 2) {
        let t = Math.pow(2, disksNumber) - 1;
        let s = Math.floor(t * 3600 / turnsSpeed);

        object = {
            turns: t,
            seconds: s
        }

        return object;
    } else {
        return false;
    }
}