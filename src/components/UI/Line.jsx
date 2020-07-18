import React from 'react';

const Line = ({ className, width, borderColor }) => {
  return (
    <div
      className={className}
      style={{
        width: width || '100%',
        borderBottom: `1px solid ${borderColor}`,
      }}
    ></div>
  );
};

export default Line;
