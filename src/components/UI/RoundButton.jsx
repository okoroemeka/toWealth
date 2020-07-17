import React from 'react';

const RoundButton = (props) => {
  const { width, height, borderRadius, color } = props;
  return (
    <div
      {...props}
      style={{
        width,
        height,
        borderRadius,
        backgroundColor: color,
      }}
    ></div>
  );
};

export default RoundButton;
