function buildMatrix(key) {
  key = key.toUpperCase().replace(/J/g, "I").replace(/[^A-Z]/g, "");
  const seen = new Set();
  const order = [];

  for (const ch of key + "ABCDEFGHIKLMNOPQRSTUVWXYZ") {
    if (!seen.has(ch)) {
      seen.add(ch);
      order.push(ch);
    }
  }

  const matrix = [];
  for (let r = 0; r < 5; r++) {
    matrix.push(order.slice(r * 5, r * 5 + 5));
  }
  return matrix;
}

function findPosition(matrix, ch) {
  for (let row = 0; row < 5; row++)
    for (let col = 0; col < 5; col++)
      if (matrix[row][col] === ch) return [row, col];
  throw new Error(`Character '${ch}' not found in matrix.`);
}

function prepareText(text) {
  text = text.toUpperCase().replace(/J/g, "I").replace(/[^A-Z]/g, "");

  let prepared = "";
  let i = 0;
  while (i < text.length) {
    prepared += text[i];
    if (i + 1 < text.length) {
      if (text[i] === text[i + 1]) {
        prepared += "X";
      } else {
        prepared += text[i + 1];
        i++;
      }
    }
    i++;
  }

  if (prepared.length % 2 !== 0) prepared += "X";
  return prepared;
}

export function playfairEncrypt(text, key) {
  const matrix = buildMatrix(key);
  const prepared = prepareText(text);
  let cipher = "";

  for (let i = 0; i < prepared.length; i += 2) {
    const a = prepared[i];
    const b = prepared[i + 1];
    const [row1, col1] = findPosition(matrix, a);
    const [row2, col2] = findPosition(matrix, b);

    if (row1 === row2) {
      cipher += matrix[row1][(col1 + 1) % 5] + matrix[row2][(col2 + 1) % 5];
    } else if (col1 === col2) {
      cipher += matrix[(row1 + 1) % 5][col1] + matrix[(row2 + 1) % 5][col2];
    } else {
      cipher += matrix[row1][col2] + matrix[row2][col1];
    }
  }

  return cipher;
}

export function playfairDecrypt(cipher, key) {
  const matrix = buildMatrix(key);
  cipher = cipher.toUpperCase().replace(/J/g, "I").replace(/[^A-Z]/g, "");
  if (cipher.length % 2 !== 0) cipher += "X";

  let plaintext = "";

  for (let i = 0; i < cipher.length; i += 2) {
    const a = cipher[i];
    const b = cipher[i + 1];
    const [row1, col1] = findPosition(matrix, a);
    const [row2, col2] = findPosition(matrix, b);

    if (row1 === row2) {
      plaintext += matrix[row1][(col1 + 4) % 5] + matrix[row2][(col2 + 4) % 5];
    } else if (col1 === col2) {
      plaintext += matrix[(row1 + 4) % 5][col1] + matrix[(row2 + 4) % 5][col2];
    } else {
      plaintext += matrix[row1][col2] + matrix[row2][col1];
    }
  }

  return plaintext;
}