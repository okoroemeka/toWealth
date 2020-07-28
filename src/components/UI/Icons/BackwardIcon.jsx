import React from 'react';

const BackwardIcon = ({ fill, className }) => {
  return (
    <svg
      width='10'
      height='17'
      viewBox='0 0 10 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M10 15.0025L3.81916 8.5L10 1.9975L8.09717 0L0 8.5L8.09717 17L10 15.0025Z'
        fill={fill || 'white'}
      />
    </svg>
  );
};

export default BackwardIcon;
