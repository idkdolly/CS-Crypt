import React, { useState, useEffect } from 'react';
import { b64_encrypt, b64_decrypt } from '../ciphers/base64';
import { encode_ceaser, decode_ceaser } from '../ciphers/ceaser_cipher';
import { morse_code_encrypt, morse_code_decrypt } from '../ciphers/morse_code';
import { playfairEncrypt, playfairDecrypt } from '../ciphers/playfairCipher';
import { railFenceEncrypt, railFenceDecrypt } from '../ciphers/railFenceCipher';
import { vigenereCipher } from '../ciphers/vigenere_cipher';
import { encrypt as sga_encrypt, decrypt as sga_decrypt } from '../ciphers/standard_galactic_alphabet';

const CIPHERS = [
  { id: 'base64', name: 'Base64', needsKey: false },
  { id: 'caesar', name: 'Caesar Cipher', needsKey: true, keyType: 'number' },
  { id: 'morse', name: 'Emoji Morse Code', needsKey: false },
  { id: 'playfair', name: 'Playfair Cipher', needsKey: true, keyType: 'text' },
  { id: 'railfence', name: 'Rail Fence Cipher', needsKey: true, keyType: 'number' },
  { id: 'vigenere', name: 'Vigenère Cipher', needsKey: true, keyType: 'text' },
  { id: 'sga', name: 'Standard Galactic Alphabet', needsKey: false },
  { id: 'rot13', name: 'ROT13', needsKey: false }
];

export default function EncryptDecryptPage() {
  const [plainText, setPlainText] = useState('');
  const [cipherText, setCipherText] = useState('');
  const [cipher, setCipher] = useState('base64');
  const [key, setKey] = useState('');
  const [lastEdited, setLastEdited] = useState('plain');
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const currentCipher = CIPHERS.find(c => c.id === cipher);

  const performCipher = (text, isEncrypt, cipherId, keyVal) => {
    if (!text) return '';
    const selectedCipher = CIPHERS.find(c => c.id === cipherId);
    const parsedKey = selectedCipher.keyType === 'number' ? parseInt(keyVal, 10) || 0 : keyVal;

    if (selectedCipher.needsKey && !keyVal) {
      return `[Waiting for ${selectedCipher.keyType} key...]`;
    }

    try {
      switch(cipherId) {
        case 'base64':
          return isEncrypt ? b64_encrypt(text) : b64_decrypt(text);
        case 'caesar':
          return isEncrypt ? encode_ceaser(text, parsedKey) : decode_ceaser(text, parsedKey);
        case 'morse':
          return isEncrypt ? morse_code_encrypt(text) : morse_code_decrypt(text);
        case 'playfair':
          return isEncrypt ? playfairEncrypt(text, parsedKey) : playfairDecrypt(text, parsedKey);
        case 'railfence':
          return isEncrypt ? railFenceEncrypt(text, parsedKey) : railFenceDecrypt(text, parsedKey);
        case 'vigenere':
          return vigenereCipher(text, parsedKey, !isEncrypt);
        case 'sga':
          return isEncrypt ? sga_encrypt(text) : sga_decrypt(text);
        case 'rot13':
          return isEncrypt ? encode_ceaser(text, 13) : decode_ceaser(text, 13);
        default:
          return 'Cipher not implemented yet.';
      }
    } catch (e) {
      return `Error: ${e.message}`;
    }
  };

  useEffect(() => {
    if (lastEdited === 'plain' && plainText) {
      setCipherText(performCipher(plainText, true, cipher, key));
    } else if (lastEdited === 'cipher' && cipherText) {
      setPlainText(performCipher(cipherText, false, cipher, key));
    }
  }, [cipher, key]);

  const handlePlainChange = (e) => {
    const val = e.target.value;
    setPlainText(val);
    setLastEdited('plain');
    setCipherText(performCipher(val, true, cipher, key));
  };

  const handleCipherChange = (e) => {
    const val = e.target.value;
    setCipherText(val);
    setLastEdited('cipher');
    setPlainText(performCipher(val, false, cipher, key));
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: 'transparent',
      color: '#ffffff',
      padding: isMobile ? '6rem 1rem 2rem' : '8rem 2rem 4rem',
      boxSizing: 'border-box',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: isMobile ? '1rem' : '2rem',
        maxWidth: '1000px',
        width: '100%',
        padding: isMobile ? '1rem' : '2rem',
        borderRadius: isMobile ? '16px' : '24px',
        backgroundColor: 'rgba(20, 20, 25, 0.2)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)'
      }}>
        <div style={{ display: 'flex', gap: isMobile ? '0.5rem' : '1rem', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '150px' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ffa212', fontWeight: 'bold', fontSize: isMobile ? '0.95rem' : '1.25rem' }}>Select Cipher Algorithm</label>
            <select 
              value={cipher} 
              onChange={(e) => setCipher(e.target.value)}
              style={{
                width: '100%', padding: isMobile ? '0.75rem' : '1rem', borderRadius: '12px',
                backgroundColor: 'rgba(0,0,0,0.8)', color: '#ffa212', border: '1px solid rgba(255, 162, 18, 0.4)', outline: 'none',
                fontSize: isMobile ? '0.95rem' : '1.15rem', cursor: 'pointer', minHeight: isMobile ? '44px' : 'auto'
              }}
            >
              {CIPHERS.map(c => (
                <option key={c.id} value={c.id} style={{ backgroundColor: '#000000', color: '#ffa212', fontSize: isMobile ? '0.9rem' : '1.1rem', padding: '0.5rem' }}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
          {currentCipher.needsKey && (
            <div style={{ flex: 1, minWidth: '150px' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ffa212', fontWeight: 'bold', fontSize: isMobile ? '0.95rem' : '1.25rem' }}>
                Key ({currentCipher.keyType})
              </label>
              <input 
                type={currentCipher.keyType === 'number' ? 'number' : 'text'}
                value={key}
                onChange={(e) => setKey(e.target.value)}
                placeholder={`Enter ${currentCipher.keyType} key...`}
                style={{
                  width: '100%', padding: isMobile ? '0.75rem' : '1rem', borderRadius: '12px', boxSizing: 'border-box',
                  backgroundColor: 'rgba(0,0,0,0.5)', color: 'white', border: '1px solid rgba(255, 162, 18, 0.4)', outline: 'none',
                  fontSize: isMobile ? '0.95rem' : '1.15rem', minHeight: isMobile ? '44px' : 'auto'
                }}
              />
            </div>
          )}
        </div>

        <div style={{ display: 'flex', gap: isMobile ? '0' : '1rem', alignItems: 'stretch', flexDirection: isMobile ? 'column' : 'row' }}>
          <textarea 
            value={plainText}
            onChange={handlePlainChange}
            placeholder="[Readable Text] Type your message here to Encrypt..."
            style={{
              flex: 1, minHeight: isMobile ? '150px' : '250px', padding: isMobile ? '1rem' : '1.5rem', borderRadius: '16px',
              backgroundColor: 'rgba(0,0,0,0.3)', color: 'white', border: '1px solid rgba(255, 255, 255, 0.1)',
              resize: 'none', outline: 'none', fontSize: isMobile ? '1rem' : '1.25rem', lineHeight: '1.6', boxSizing: 'border-box'
            }}
          />
          
          <div style={{ display: 'flex', flexDirection: isMobile ? 'row' : 'column', gap: isMobile ? '0.5rem' : '1rem', justifyContent: 'center', alignItems: 'center', padding: isMobile ? '0.5rem 0' : '0 1rem' }}>
            <div style={{
              fontSize: isMobile ? '2rem' : '3rem', color: '#ffa212', opacity: 0.8,
              textShadow: '0 0 20px rgba(255, 162, 18, 0.8)', transform: isMobile ? 'rotate(90deg)' : 'none'
            }}>
              ⟷
            </div>
          </div>

          <textarea 
            value={cipherText}
            onChange={handleCipherChange}
            placeholder="[Secret Text] Paste cipher here to Decrypt..."
            style={{
              flex: 1, minHeight: isMobile ? '150px' : '250px', padding: isMobile ? '1rem' : '1.5rem', borderRadius: '16px',
              backgroundColor: 'rgba(0,0,0,0.5)', color: '#ffa212', border: '1px solid rgba(255, 162, 18, 0.4)',
              resize: 'none', outline: 'none', fontSize: isMobile ? '1rem' : '1.25rem', lineHeight: '1.6', boxSizing: 'border-box'
            }}
          />
        </div>
      </div>
    </div>
  );
}
