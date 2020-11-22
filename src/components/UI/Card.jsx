import React from 'react';

const Card = (props) => {
  const { classname, children, cardRef = null } = props;
  return (
    <div ref={cardRef} className={classname} {...props}>
      {children}
    </div>
  );
};

export default Card;
