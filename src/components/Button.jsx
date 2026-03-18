import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button 
      onClick={onClick} 
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
