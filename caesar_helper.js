var CaesarCipher = function (shift) {
    // TODO: Complete the CaesarCipher object
    // convert word to an array of numbers
    function toNumArray(str) {
        console.log(str);
        let strArray = str.split('');
        return strArray.map((cur) => {
            return cur.charCodeAt() - 64;
        });
    }
    // convert array of shifted numbers to word
    return {
        encode: function encode(str) {

            return toNumArray(str.toUpperCase());
        },
        decode: function decode(str) {
            console.log(str);
        }
    }
};

var c = new CaesarCipher(5); // creates a CipherHelper with a shift of five

console.log('HTIJBFWX', c.encode('Codewars'));
console.log('WAFFLES', c.decode('BFKKQJX'));