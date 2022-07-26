function analyzeArray(array) {
    return {
        average: calculateAverage(array),
        min: calculateMin(array),
        max: calculateMax(array),
        length: array.length,
    }
}

function calculateAverage(array) {
    let total = 0;
    array.forEach(value => total += value);
    return total / array.length;
}

function calculateMin(array) {
    let min = array[0];
    array.reduce((previousValue, currentValue) => {
        if(previousValue > currentValue) min = currentValue;
    })

    return min;
}

function calculateMax(array) {
    let max = array[0];
    array.reduce((previousValue, currentValue) => {
        if(previousValue < currentValue) max = currentValue;
    })

    return max;
}

module.exports = analyzeArray;