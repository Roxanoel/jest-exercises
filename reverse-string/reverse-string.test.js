// PROMPT: A reverseString function that takes a string and returns it reversed.
const { expect } = require('expect');
const reverseString = require('./reverse-string');

test('single word, lowercase', () => {
    expect(reverseString('apple')).toBe('elppa');
});
test('single word, mixed case', () => {
    expect(reverseString('ApplE')).toBe('ElppA');
});
test('composite string, mixed case', () => {
    expect(reverseString('This is an apple')).toBe('elppa na si sihT');
});
test('not a string', () => {
    expect(reverseString(232323)).toBe('Not a string');
});
test('accents', () => {
    expect(reverseString('Noël')).toBe('lëoN');
});