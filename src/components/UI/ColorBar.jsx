import React from 'react';

const ColorBar = ({ color, className = '', children, handleClick }) => {
  return (
    <div
      className={`color__bar__item ${className}`}
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default ColorBar;
