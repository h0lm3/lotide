function obfuscate(inputString) {
  function replaceCharacters(str, charMap) {
    for (const [original, replacement] of charMap) {
      str = str.replace(new RegExp(original, 'g'), replacement);
    }
    return str;
  }

  const charMap = [
    ['a', '4'],
    ['e', '3'],
    ['o', '0'],
    ['l', '1']
  ];

  return replaceCharacters(inputString, charMap);
}

const originalString = 'Hello, world!';
const obfuscatedResult = obfuscate(originalString);

console.log('Original string:', originalString);
console.log('Obfuscated string:', obfuscatedResult);
