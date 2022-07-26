/* PROMPT: An analyzeArray function that takes an array of numbers and returns an 
object with the following properties: average, min, max, and length. */

const { expect } = require('expect');
const analyzeArray = require('./analyze-array');

test('Average is correct (with numbers)', () => {
    expect(analyzeArray([1,8,3,4,2,6]).average).toBe(4);
});

test('Min is correct (with numbers)', () => {
    expect(analyzeArray([1,8,3,4,2,6]).min).toBe(1);
});

test('Max is correct (with numbers)', () => {
    expect(analyzeArray([1,8,3,4,2,6]).max).toBe(8);
});

test('Length is correct (with numbers)', () => {
    expect(analyzeArray([1,8,3,4,2,6]).length).toBe(6);
});

test('Not using an array as arg throws an error', () => {
    expect(() => (analyzeArray('hello'))).toThrow();
});

test('Error gets thrown when values in array are not numbers', () => {
    expect(() => (analyzeArray('a', 'b', 'c'))).toThrow();
});
