//12
const duplicates = [
    'sushi',
    'pizza',
    'burguer',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda',
];
function removeDuploicates(list) {
    const uniqueList = [];

    for (const item of list) {
        if (!uniqueList.includes(item)) {
            uniqueList.push(item);
        }
    }
    return uniqueList;
}