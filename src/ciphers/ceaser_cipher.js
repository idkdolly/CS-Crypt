export function encode_ceaser(data, key) {
  data = data.toLowerCase();

  var result = '';
  var charcode = 0;

  for (let i = 0; i < data.length; i++) {
      charcode = (data[i].charCodeAt(0) - 97 + key) % 26 + 97;
      result += String.fromCharCode(charcode);
  }

  return result;
}

export function decode_ceaser(data, key) {
  data = data.toLowerCase();

  var result = '';
  var charcode = 0;

  for (let i = 0; i < data.length; i++) {
      charcode = (data[i].charCodeAt(0) - 97 - key) % 26 + 97;
      result += String.fromCharCode(charcode);
  }

  return result;
}
