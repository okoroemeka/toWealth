import React from 'react';

import Button from '../../UI/Button';
import './floating.scss';

const FloatingButton = (props) => {
  const { className, children } = props;
  return (
    <Button
      className={`floating__button ${className ? className : ''}`}
      type='button'
      {...props}
    >
      {children}
    </Button>
  );
};

export default FloatingButton;
