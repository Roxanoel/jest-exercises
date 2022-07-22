function reverseString(string) {
   if (!(typeof string === 'string' || string instanceof String)) return 'Not a string';
   
    const stringArray = string.split('');
   const reversed = [];

   for (let i = stringArray.length - 1; i >= 0; i--) {
        reversed.push(stringArray[i]);
   }
   return reversed.join(''); 
}

module.exports = reverseString;