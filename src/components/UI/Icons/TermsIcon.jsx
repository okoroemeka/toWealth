import React from 'react';

const Terms = ({ fill }) => {
  return (
    <svg
      width='16px'
      height='21px'
      viewBox='0 0 16 21'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>Mask</title>
      <defs>
        <path
          d='M35.1111111,91.7748344 L23.1111111,91.7748344 C21.4222222,91.7748344 20,93.2390126 20,94.9777243 L20,108.704395 C20,110.443107 21.4222222,111.907285 23.1111111,111.907285 L35.1111111,111.907285 C35.6444444,111.907285 36,111.54124 36,110.992173 L36,92.6899458 C36,92.140879 35.6444444,91.7748344 35.1111111,91.7748344 Z M23.2857143,93.7880795 L34,93.7880795 L34,105.506968 L23.2857143,105.506968 C22.8571429,105.506968 22.4285714,105.597114 22,105.86755 L22,95.140259 C22,94.4190966 22.6,93.7880795 23.2857143,93.7880795 Z M23.2857143,109.89404 C22.6,109.89404 22,109.189404 22,108.384106 C22,107.578808 22.6,106.874172 23.2857143,106.874172 L34,106.874172 L34,109.89404 L23.2857143,109.89404 Z'
          id='path-1'
        ></path>
      </defs>
      <g
        id='Page-1'
        stroke='none'
        stroke-width='1'
        fill='none'
        fill-rule='evenodd'
      >
        <g id='MY-GOAL' transform='translate(-36.000000, -760.000000)'>
          <g id='Menu' transform='translate(0.000000, 77.000000)'>
            <g id='support-menu' transform='translate(16.000000, 592.000000)'>
              <mask id='mask-2' fill='white'>
                <use></use>
              </mask>
              <use id='Mask' fill={fill} fill-rule='nonzero'></use>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Terms;
