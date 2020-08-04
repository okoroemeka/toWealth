import React from 'react';

import Button from '../../UI/Button';
import './floatingButtonCotent.scss';

const FloatingButtonContent = (props) => {
  const { children, buttonClassName = '' } = props;
  return (
    <Button
      {...props}
      className={`floating__button__content ${buttonClassName}`}
      type='button'
    >
      {children}
    </Button>
  );
};

export default FloatingButtonContent;
