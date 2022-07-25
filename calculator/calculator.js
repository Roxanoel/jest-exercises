// Factory for calculator object
const calculator = (() => {
    'use struct';

    return {
        add: (num1, num2) => {
            return +num1 + +num2;
        },
        subtract: (num1, num2) => { 
            return num1 - num2;
         },
        multiply: () => { console.log('not implemented') },
        divide: () => { console.log('not implemented') },
    }
    
})();

module.exports = calculator;