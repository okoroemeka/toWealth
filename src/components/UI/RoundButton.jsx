import React from 'react';

const RoundButton = (props) => {
  const { className, width, height, borderRadius, color, children } = props;
  return (
    <div
      className={className}
      {...props}
      style={{
        width,
        height,
        borderRadius,
        backgroundColor: color,
      }}
    >
      {children}
    </div>
  );
};

export default RoundButton;
