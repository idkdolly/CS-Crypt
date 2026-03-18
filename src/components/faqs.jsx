import { useState } from 'react';
import './faqs.css';

export default function FAQs() {
  const [expanded, setExpanded] = useState({});

  const faqData = [
    {
      id: 1,
      question: 'What is encryption?',
      answer: 'Encryption is the process of converting information into a code to prevent unauthorized access. It uses mathematical algorithms to scramble data so that only authorized parties with the correct decryption key can read it.'
    },
    {
      id: 2,
      question: 'What ciphers are supported?',
      answer: 'We support multiple encryption methods including Base64, Caesar Cipher, Morse Code, Vigenere Cipher, Playfair Cipher, and Rail Fence Cipher. Each has different use cases and security levels.'
    },
    {
      id: 3,
      question: 'Is my data secure?',
      answer: 'This tool performs encryption in your browser. No data is sent to external servers. However, for highly sensitive information, we recommend using industry-standard encryption tools.'
    },
    {
      id: 4,
      question: 'What is a Caesar Cipher?',
      answer: 'A Caesar Cipher is a simple substitution cipher where each letter is shifted by a fixed number of positions. For example, with a shift of 3, A becomes D, B becomes E, and so on.'
    },
    {
      id: 5,
      question: 'What is the difference between encryption and hashing?',
      answer: 'Encryption is reversible - you can decrypt data back to its original form. Hashing is one-way - you cannot reverse a hash. Both serve different security purposes.'
    },
    {
      id: 6,
      question: 'Can I decrypt any cipher?',
      answer: 'To decrypt, you need the correct key or password used during encryption. Without it, decryption is not feasible (that\'s the point of encryption!).'
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
      <h2 style={{
        color: 'white',
        textAlign: 'center',
        fontSize: '2rem',
        fontWeight: 'bold',
        background: "black"
      }}>Frequently Asked Questions
      </h2>

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
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
