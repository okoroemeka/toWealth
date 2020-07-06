import React from 'react';

const DashboardIcon = (props) => {
  return (
    <svg
      width='20'
      height='21'
      viewBox='0 0 20 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={props.className}
    >
      <mask
        id='mask0'
        mask-type='alpha'
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='20'
        height='20'
      >
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M0.800781 0.649963H9.22604V11.2815H0.800781V0.649963ZM19.7576 0.649963H11.3324V7.0289H19.7576V0.649963ZM7.11973 9.15521V2.77628H2.9071V9.15521H7.11973ZM17.6513 4.90259V2.77628H13.4387V4.90259H17.6513ZM17.6513 11.2815V17.6605H13.4387V11.2815H17.6513ZM7.11973 17.6605V15.5342H2.9071V17.6605H7.11973ZM19.7576 9.15521H11.3324V19.7868H19.7576V9.15521ZM0.800781 13.4078H9.22604V19.7868H0.800781V13.4078Z'
          fill='white'
        />
      </mask>
      <g mask='url(#mask0)'>
        <rect
          x='-2'
          y='-1.89557'
          width='24'
          height='24.2278'
          fill={props.fill}
        />
      </g>
    </svg>
  );
};

export default DashboardIcon;
