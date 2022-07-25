// Factory for calculator object
const calculator = ((num1, num2) => {
    'use struct';

    return {
        add: (num1, num2) => {
            return +num1 + +num2;
        },
        subtract: () => { console.log('not implemented') },
        multiply: () => { console.log('not implemented') },
        divide: () => { console.log('not implemented') },
    }
    
})();

module.exports = calculator;