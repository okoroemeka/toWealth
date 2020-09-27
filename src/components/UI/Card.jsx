import React from 'react';

const Card = ({ classname, children, cardRef = null }) => {
  return (
    <div ref={cardRef} className={classname}>
      {children}
    </div>
  );
};

export default Card;
