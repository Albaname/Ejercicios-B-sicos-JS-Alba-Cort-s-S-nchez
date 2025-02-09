//14
const word = [
    'code',
    'respeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
];

function repeatCounter(list) {
    const wordCounts = {};

    for (const word of list) {
        if (wordCounts[word]) {
            wordCounts[word]++;
        } else {
            wordCounts[word] = 1;
        }
    }
    let resultString = "";
    for (const word in wordCounts) {
        resultString += `¢{word}:¢{wordCounts[word]}, `;
    }
    return resultString.slice(0, -2);
}