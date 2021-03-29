const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!members || members === 0) {
        return false;
    }

    let teamName = [];

    for (let i = 0; i < members.length; i++) {
        if (typeof members[i] === 'string' && members[i]) {
            teamName.push(members[i].trim().charAt(0).toUpperCase());
        }
    }

    return teamName.sort().join('');


    // let text;
    // let names = members.join(' ').split(' ');
    // for (let i = 0; i < names.length; i++) {
    //     if (typeof(names[i] === 'string')) {
    //         text += names[i].substr(0, 1);
    //     } else {
    //         return names.splice(i, 1)
    //     }

    // }
    // return text;
}