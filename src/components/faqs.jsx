import { useState } from 'react';
import './faqs.css';

export default function FAQs() {
  const [expanded, setExpanded] = useState({});

  const faqData = [
    {
      id: 1,
      question: 'What is encryption?',
      answer: [
        'Encryption is the process of converting information into a code to prevent unauthorized access.',
        'It uses mathematical algorithms to scramble data.',
        'Only authorized parties with the correct decryption key can read encrypted data.'
      ]
    },
    {
      id: 2,
      question: 'What ciphers are supported?',
      answer: [
        'Base64 - Encodes data using 64 characters for safe transmission',
        'Caesar Cipher - Shifts letters by a fixed position',
        'Morse Code - Converts characters to dots and dashes',
        'Vigenere Cipher - Uses a keyword to shift letters variably',
        'Playfair Cipher - Encrypts pairs of letters using a 5x5 grid',
        'Rail Fence Cipher - Arranges text in a zigzag pattern across multiple rails',
        'Standard Galactic Alphabet - Cryptic runic symbols popularized by video games',
        'ROT13 - A Caesar cipher variant that shifts letters by exactly 13 places'
      ]
    },
    {
      id: 3,
      question: 'Who are we and what is our mission?',
      answer: [
        'We are a vibrant community of tech enthusiasts united by a common goal – to foster a dynamic coding environment through an exciting array of tech and semi-tech events.',
        'Our mission is to inspire innovation, collaboration, and continuous learning!'
      ]
    },
    {
      id: 4,
      question: 'What are the key differences between encryption methods?',
      answer: [
        'Base64 is for encoding, not security',
        'Caesar Cipher uses fixed shifts',
        'Vigenere Cipher uses variable shifts with keywords',
        'Playfair Cipher encrypts letter pairs',
        'Rail Fence is a transposition cipher',
        'Standard Galactic Alphabet substitutes letters rather than encrypting mathematically',
        'ROT13 is a specific, fully reversible subset of the Caesar cipher'
      ]
    },
    {
      id: 5,
      question: 'What is the difference between encryption and hashing?',
      answer: [
        'Encryption is reversible - you can decrypt data back to its original form',
        'Hashing is one-way - you cannot reverse a hash',
        'Both serve different security purposes'
      ]
    },
    {
      id: 6,
      question: 'Can I decrypt any cipher?',
      answer: [
        'You need the correct key or password used during encryption',
        'Without the key, decryption is not feasible',
        'That\'s the fundamental purpose of encryption'
      ]
    }
  ];

  const toggleExpanded = (id) => {
    setExpanded(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="faqs-container">
      <h2>Frequently Asked Questions</h2>

      <div className="faq-list">
        {faqData.map(faq => (
          <div key={faq.id} className="faq-item">
            <button
              className={`faq-question ${expanded[faq.id] ? 'active' : ''}`}
              onClick={() => toggleExpanded(faq.id)}
            >
              <span className="question-text">{faq.question}</span>
              <span className="toggle-icon">+</span>
            </button>
            {expanded[faq.id] && (
              <div className="faq-answer">
                {Array.isArray(faq.answer) ? (
                  <ul className="answer-list">
                    {faq.answer.map((line, idx) => (
                      <li key={idx}>{line}</li>
                    ))}
                  </ul>
                ) : (
                  faq.answer
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
