function getCount(str) {
    // var vowelsCount = 0;

    // enter your majic here
    let strArray = str.split('');
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    return strArray.reduce((vowelsCount, letter) => {
        if (vowels.includes(letter)) {
            vowelsCount++;
        }
        return vowelsCount;
    }, 0)
}