function capitalize(string) {
    if (typeof string === 'string' || string instanceof String) {
        return string[0].toUpperCase() + string.substring(1).toLowerCase();
    } else {
        return ('Not a string');
    }
}

module.exports = capitalize;