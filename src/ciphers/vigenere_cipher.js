export function vigenereCipher(text, key, decrypt = false) {
  const result = [];
  key = key.toUpperCase();
  let keyIndex = 0;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    
    if (/[A-Za-z]/.test(char)) {
      const isUpperCase = char === char.toUpperCase();
      const charCode = isUpperCase ? 65 : 97;
      const keyChar = key[keyIndex % key.length];
      const shift = keyChar.charCodeAt(0) - 65;
      
      let charIndex = char.toUpperCase().charCodeAt(0) - 65;
      charIndex = decrypt ? (charIndex - shift + 26) % 26 : (charIndex + shift) % 26;
      
      result.push(String.fromCharCode(charIndex + charCode));
      keyIndex++;
    } else {
      result.push(char);
    }
  }

  return result.join('');
}

const text = "sarthak";
const key = "malhotra";
const encrypted = vigenereCipher(text, key);
const decrypted = vigenereCipher(encrypted, key, true);
console.log("Encrypted:", encrypted); 
console.log("Decrypted:", decrypted); 