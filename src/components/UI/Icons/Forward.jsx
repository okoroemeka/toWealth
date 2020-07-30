import React from 'react';

const ForwardIcon = ({ fill, className, handleClick }) => {
  return (
    <svg
      width='10'
      height='17'
      viewBox='0 0 10 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      onClick={handleClick}
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M0 15.0025L6.18084 8.5L0 1.9975L1.90283 0L10 8.5L1.90283 17L0 15.0025Z'
        fill={fill || 'white'}
      />
    </svg>
  );
};

export default ForwardIcon;
