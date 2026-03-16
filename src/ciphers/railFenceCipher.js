export function railFenceEncrypt(text, rails) {
  if (rails < 2 || rails >= text.length) throw new Error("Invalid number of rails.");

  const fence = Array.from({ length: rails }, () => []);
  let currentRail = 0;
  let direction = 1;

  for (let i = 0; i < text.length; i++) {
    fence[currentRail].push(text[i]);
    if (currentRail === 0) direction = 1;
    else if (currentRail === rails - 1) direction = -1;
    currentRail += direction;
  }

  return fence.map(rail => rail.join("")).join("");
}

export function railFenceDecrypt(cipher, rails) {
  if (rails < 2 || rails >= cipher.length) throw new Error("Invalid number of rails.");

  const n = cipher.length;
  const railForIndex = new Array(n);
  let currentRail = 0;
  let direction = 1;

  for (let i = 0; i < n; i++) {
    railForIndex[i] = currentRail;
    if (currentRail === 0) direction = 1;
    else if (currentRail === rails - 1) direction = -1;
    currentRail += direction;
  }

  const charsPerRail = new Array(rails).fill(0);
  railForIndex.forEach(r => charsPerRail[r]++);

  const railChars = [];
  let sliceStart = 0;
  for (let r = 0; r < rails; r++) {
    railChars.push(cipher.slice(sliceStart, sliceStart + charsPerRail[r]).split(""));
    sliceStart += charsPerRail[r];
  }

  const readIndex = new Array(rails).fill(0);
  let plaintext = "";
  for (let i = 0; i < n; i++) {
    const r = railForIndex[i];
    plaintext += railChars[r][readIndex[r]++];
  }

  return plaintext;
}


