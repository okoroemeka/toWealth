import React from 'react';

const Wallet = ({ className, fill }) => {
  return (
    <svg
      width='26'
      height='22'
      viewBox='0 0 26 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M25 3.66667H16.25C12.1079 3.66667 8.75 6.94991 8.75 11C8.75 15.0501 12.1079 18.3333 16.25 18.3333H25V20.7778C25 21.4528 24.4404 22 23.75 22H1.25C0.559644 22 0 21.4528 0 20.7778V1.22222C0 0.547208 0.559644 0 1.25 0H23.75C24.4404 0 25 0.547208 25 1.22222V3.66667ZM16 6H26V16H16C13.2386 16 11 13.7614 11 11C11 8.23858 13.2386 6 16 6ZM20 12H16V10H20V12Z'
        fill={fill || '#ffffff'}
      />
    </svg>
  );
};

export default Wallet;
