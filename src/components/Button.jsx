import React, { useRef } from 'react';
import gsap from 'gsap';

const GLYPHS = "!@#$%^&*()_+-=<>?/\\[]{}Xx";

const runScrambleAnimation = (element, text, duration = 0.35, onComplete) => {
  const chars = text.split("");
  const lockedIndices = new Set();
  const totalFrames = Math.floor((duration * 1000) / 40);
  let currentFrame = 0;

  const interval = setInterval(() => {
    currentFrame++;
    const progress = currentFrame / totalFrames;

    let displayText = "";
    for (let i = 0; i < chars.length; i++) {
      if (Math.random() < progress) {
        lockedIndices.add(i);
      }
      if (lockedIndices.has(i)) {
        displayText += chars[i];
      } else {
        displayText += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }
    }

    if (element) {
      element.textContent = displayText;
    }

    if (currentFrame >= totalFrames || lockedIndices.size === chars.length) {
      clearInterval(interval);
      if (element) {
        element.textContent = text;
      }
      if (onComplete) onComplete();
    }
  }, 40);
};

const Button = ({ onClick, children, scramble = false, scrambleDuration = 0.35 }) => {
  const buttonRef = useRef(null);

  const handleClick = async (e) => {
    if (scramble && buttonRef.current) {
      await new Promise((resolve) => {
        runScrambleAnimation(buttonRef.current, children, scrambleDuration, resolve);
      });
    }
    if (onClick) onClick(e);
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      style={{
        padding: '12px 24px',
        backgroundColor: '#121212',
        color: '#ffa212',
        border: '2px solid #ffa212',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '18px',
        fontWeight: 'bold',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 14px 0 rgba(255, 162, 18, 0.39)',
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = '#1e1e1e'
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = '#121212'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      {children}
    </button>
  );
};

export default Button;
