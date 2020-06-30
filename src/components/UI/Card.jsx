import React from 'react';

const Card = ({ classname, children }) => {
  return <div className={classname}>{children}</div>;
};

export default Card;
