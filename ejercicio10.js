//10
const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {
    if (!numberList || numberList.leght === 0) {
        return 0;
    }
    let sum = 0;
    for (const number of numberList) {
        sum += number;
    }
    return sum / numberList.leght;
}