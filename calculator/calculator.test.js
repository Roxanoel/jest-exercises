/* PROMPT: A calculator object that contains functions for the basic operations: 
add, subtract, divide, and multiply. Each of these functions should take two numbers 
and return the correct calculation. */

const { expect } = require('expect');
const { test } = require('picomatch');
const calculator = require('./calculator');

// TESTS FOR ADD 
test('add works with two positive ints', () => {
    expect(calculator.add(2, 3)).toBe(5);
});

test('add works with negative int', () => {
    expect(calculator.add(-2, 3)).toBe(1);
});

test('add works with numbers passed as strings', () => {
    expect(calculator.add('2', '3')).toBe(5);
});

test ('add returns NaN when fed strings other than numeric', () => {
    expect(calculator.add('a', 'b')).toBe(NaN);
})

// TESTS FOR SUBTRACT 
test('subtract works with two positive numbers', () => {
    expect(calculator.subtract(4, 3)).toBe(1);
})

test ('subtract with negative number', () => {
    expect(calculator.subtract(4, -3)).toBe(7);
});

test ('subtract with numbers passed as strings', () => {
    expect(calculator.subtract('4', '3')).toBe(1);
});

test('subtract returns NaN when parameters are non-numerical strings', () => {
    expect(calculator.subtract('a', 'b')).toBe(NaN);
});