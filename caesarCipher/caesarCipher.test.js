/* PROMPT: A caesarCipher function that takes a string and returns it with each
 character “shifted”. Read more about how a Caesar cipher works on this website. 
 http://practicalcryptography.com/ciphers/caesar-cipher/

Don’t forget to test wrapping from z to a.
Don’t forget to test keeping the same case.
Don’t forget to test punctuation!
For this one, you may want to split the final function into a few smaller functions. 
One concept of Testing is that you don’t need to explicitly test every function you write… 
Just the public ones. So in this case you only need tests for the final caesarCipher function. 
If it works as expected you can rest assured that your smaller helper functions are doing what 
they’re supposed to. */ 

const { expect } = require('expect');
const caesarCipher = require('./caesarCipher');

test('works with one word.', () => {
    expect(caesarCipher('attack', 5)).toBe('fyyfhp');
});

test('works with string of more than one word (preserves spaces).', () => {
    expect(caesarCipher('attack at dawn', 5)).toBe('fyyfhp fy ifbs');
});

test('works with punctuation', () => {
    expect(caesarCipher('attack, at dawn.', 5).toBe('fyyfhp, fy ifbs.'));
});

test('works no matter the case', () => {
    expect(caesarCipher('Attack at dawn', 5)).toBe('fyyfhp fy ifbs');
});

test('wraps correctly.', () => {
    expect('attackz at dawnz', 5).toBe('fyyfhpe fy ifbse');
});

test('only accepts strings as 1st param.', () => {
    expect(() => {
        caesarCipher(233, 5)}).toThrow();
});

test('Only accepts numbers as second param.', () => {
    expect(() => {
        caesarCipher(5, 'attack at dawn')}).toThrow();
});
