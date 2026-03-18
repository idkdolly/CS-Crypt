const MORSE_CODES = {
  a: '🙃🙂',   b: '🙂🙃🙃🙃', c: '🙂🙃🙂🙃', d: '🙂🙃🙃',
  e: '🙃',     f: '🙃🙃🙂🙃', g: '🙂🙂🙃',   h: '🙃🙃🙃🙃',
  i: '🙃🙃',   j: '🙃🙂🙂🙂', k: '🙂🙃🙂',   l: '🙃🙂🙃🙃',
  m: '🙂🙂',   n: '🙂🙃',     o: '🙂🙂🙂',   p: '🙃🙂🙂🙃',
  q: '🙂🙂🙃🙂', r: '🙃🙂🙃', s: '🙃🙃🙃',   t: '🙂',
  u: '🙃🙃🙂', v: '🙃🙃🙃🙂', w: '🙃🙂🙂',   x: '🙂🙃🙃🙂',
  y: '🙂🙃🙂🙂', z: '🙂🙂🙃🙃',
  '0': '🙂🙂🙂🙂🙂', '1': '🙃🙂🙂🙂🙂', '2': '🙃🙃🙂🙂🙂',
  '3': '🙃🙃🙃🙂🙂', '4': '🙃🙃🙃🙃🙂', '5': '🙃🙃🙃🙃🙃',
  '6': '🙂🙃🙃🙃🙃', '7': '🙂🙂🙃🙃🙃', '8': '🙂🙂🙂🙃🙃',
  '9': '🙂🙂🙂🙂🙃'
};

const REVERSE_MORSE = Object.fromEntries(Object.entries(MORSE_CODES).map(([k, v]) => [v, k]));

export function morse_code_encrypt(text) {
  return text
    .toLowerCase()
    .split(' ')
    .map(word =>
      word.split('').map(char => MORSE_CODES[char] ?? char).join('  ')
    )
    .join('  |  ');
}

export function morse_code_decrypt(text) {
  return text
    .split('  |  ')
    .map(word =>
      word.split('  ').map(code => REVERSE_MORSE[code] ?? code).join('')
    )
    .join(' ');
}

