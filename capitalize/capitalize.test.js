// PROMPT: A capitalize function that takes a string and returns it with the first 
// character capitalized.

const { expect } = require('expect');
const capitalize = require('./capitalize');

test('single word, lowercase', () => {
    expect(capitalize('apple')).toBe('Apple');
});

test('two words, lowercase', () => {
    expect(capitalize('this apple')).toBe('This apple');
});

test('one word, all uppercase', () => {
    expect(capitalize('APPLE')).toBe('Apple');
});