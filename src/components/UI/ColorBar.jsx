import React from 'react';

const ColorBar = (props) => {
  const { color, className = '', children, handleClick } = props;
  return (
    <div
      className={`color__bar__item ${className}`}
      style={{ backgroundColor: color }}
      onClick={handleClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default ColorBar;
