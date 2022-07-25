function caesarCipher(string, key) {
    // declare a variable for the cipher text
    let result = '';
    // go through each character, check if it is a letter 
    for (let i = 0; i < string.length; i++) {
        if(isLetter(string[i])) {
            // use charcode to get the shifted character
            result += getShiftedChar(string[i], key);
        } else {
            result += string[i];
        }
    }
    return result;
}

function isLetter(char) {
    return /[a-z]/.test(char);
}

function getShiftedChar(char, key) {
    return String.fromCharCode((char.charCodeAt(0) - 97 + key)%26 + 97);
}

module.exports = caesarCipher;