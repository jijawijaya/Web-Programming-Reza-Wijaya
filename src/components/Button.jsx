import React from 'react';

const Button = ({ text, onClick, style }) => {
  return (
    <button 
      onClick={onClick} 
      style={{ 
        padding: '4px 8px', 
        fontSize: '0.8rem', 
        cursor: 'pointer',
        ...style 
      }}
    >
      {text}
    </button>
  );
};

export default Button;