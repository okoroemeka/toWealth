import React from 'react';

const Button = (props) => {
  const { className, children } = props;
  return (
    <button {...props} className={className} type='submit'>
      {children}
    </button>
  );
};

export default Button;
