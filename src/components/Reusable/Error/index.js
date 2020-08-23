import React from 'react';

import './Error.scss';

const ErrorMessage = ({ errorMessage }) => {
  return <div className='error__message'>{errorMessage}</div>;
};

export default ErrorMessage;
