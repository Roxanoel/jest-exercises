function capitalize(string) {
    if (typeof string === 'string' || string instanceof String) {
        const firstLetterIndex = string.match(/[A-zÀ-ÿ]/i).index;

        return string.substring(0, firstLetterIndex + 1).toUpperCase() + string.substring(firstLetterIndex + 1).toLowerCase();
    } else {
        return ('Not a string');
    }
}

module.exports = capitalize;