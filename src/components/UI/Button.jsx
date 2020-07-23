import React from 'react';

const Button = (props) => {
  const { className, children, type } = props;
  return (
    <button {...props} className={className} type={type}>
      {children}
    </button>
  );
};

export default Button;
