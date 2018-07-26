function toCamelCase(str){
  let strArray;
  if (str.includes('-')) {
    strArray = str.split('-');
  } else if (str.includes('_')) {
    strArray = str.split('_');
  } else {
    return '';
  }

  return strArray.map((word, i) => {
    if (i === 0) { return word }
    else {
      let camelWord = word.replace(word[0], word[0].toUpperCase());
      return camelWord;
      }
    }).join('');
}