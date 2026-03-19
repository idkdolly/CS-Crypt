// Standard Galactic Alphabet — from Minecraft
const SGA_MAP = {
  a: 'ᔑ', b: 'ʖ', c: 'ᓵ', d: '↸', e: 'ᒷ', f: '⎓', g: '⊣', h: '⍑',
  i: '╎', j: '⋮', k: 'ꖌ', l: 'ꖎ', m: 'ᒲ', n: 'リ', o: '𝙹', p: '!¡',
  q: ' ᑑ', r: '∷', s: 'ᓭ', t: 'ℸ', u: '⚍', v: '⍊', w: '∴', x: ' ̇/',
  y: '||', z: '⨅'
};

// Reverse map for decryption
const REVERSE_SGA = Object.fromEntries(
  Object.entries(SGA_MAP).map(([k, v]) => [v, k])
);

function encrypt(text) {
  return text
    .toLowerCase()
    .split('')
    .map(char => SGA_MAP[char] ?? char)
    .join('');
}

function decrypt(text) {
  // Multi-char symbols need a greedy pass — try longer tokens first
  const symbols = Object.keys(REVERSE_SGA).sort((a, b) => b.length - a.length);
  let result = '';
  let i = 0;
  while (i < text.length) {
    let matched = false;
    for (const sym of symbols) {
      if (text.startsWith(sym, i)) {
        result += REVERSE_SGA[sym];
        i += sym.length;
        matched = true;
        break;
      }
    }
    if (!matched) {
      result += text[i]; // pass through spaces, punctuation, etc.
      i++;
    }
  }
  return result;
}

// Export the functions
export { encrypt, decrypt, SGA_MAP, REVERSE_SGA };
