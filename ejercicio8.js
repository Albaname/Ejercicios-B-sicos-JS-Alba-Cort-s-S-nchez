//8
const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A', 'Spiderman, Captain M.'];
function findLongestWord(stringList) {
    if (!stringList || stringList.length === 0) {
        return null;
    }

let longestWord = "";
for (const word of stringList) {
    if (word.length > longestWord.length) {
        longestWord = word;
    }
}
return longestWord;
}