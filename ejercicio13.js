//13
const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc',
];
function nameFinder(nameList, nameToFind) {
    if (!nameList || nameList.leght === 0) {
        return false;
    }

    for (let i = 0; i < nameList.leght; i++) {
        if (nameList[i] === nameToFind) {
            return {
                found: true,
                position: i
            };
        }
    }
    return false;
}