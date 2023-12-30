// AnimatedButton.js
import React from 'react';
import './AnimatedButton.css';

const AnimatedButton = ({ onClick, className, text }) => {
  return (
    <button onClick={onClick} className={`animated-button ${className}`}>
      {text}
    </button>
  );
};

export default AnimatedButton;
