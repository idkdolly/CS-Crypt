const B64_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

export function b64_encrypt(text) {
  let binary = '';
  for (let i = 0; i < text.length; i++) {
    binary += text.charCodeAt(i).toString(2).padStart(8, '0');
  }

  while (binary.length % 6 !== 0) binary += '0';

  let result = '';
  for (let i = 0; i < binary.length; i += 6) {
    result += B64_CHARS[parseInt(binary.slice(i, i + 6), 2)];
  }

  return result; 
}

export function b64_decrypt(text) {
  let binary = '';
  for (const char of text) {
    const idx = B64_CHARS.indexOf(char);
    if (idx === -1) return "Invalid Base64 string";
    binary += idx.toString(2).padStart(6, '0');
  }

  let result = '';
  for (let i = 0; i + 8 <= binary.length; i += 8) {
    result += String.fromCharCode(parseInt(binary.slice(i, i + 8), 2));
  }
  return result;
}
