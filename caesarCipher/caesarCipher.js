function caesarCipher(string, key) {
    // declare a variable for the cipher text
    let lowercaseString = string.toLowerCase();
    let result = '';
    // go through each character, check if it is a letter 
    for (let i = 0; i < lowercaseString.length; i++) {
        if(isLetter(lowercaseString[i])) {
            // use charcode to get the shifted character
            result += getShiftedChar(lowercaseString[i], key);
        } else {
            result += lowercaseString[i];
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