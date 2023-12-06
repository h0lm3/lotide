function obfuscate(inputString) {
    let obfuscatedString = inputString.replace(/a/g, '4');
  
    obfuscatedString = obfuscatedString.replace(/e/g, '3');
  
    obfuscatedString = obfuscatedString.replace(/o/g, '0');
  
    obfuscatedString = obfuscatedString.replace(/l/g, '1');
  
    return obfuscatedString;
  }
  
  const originalString = 'Hello, world!';
  const obfuscatedResult = obfuscate(originalString);
  console.log('Original string:', originalString);
  console.log('Obfuscated string:', obfuscatedResult);
  
  git clone "https://gist.github.com/h0lm3/8c075bb36c0de0525b71acf737547355.js"

  C:\Users\bethi\Bootcamp\varant\8c075bb36c0de0525b71acf737547355