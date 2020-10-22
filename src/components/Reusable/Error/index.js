import React from 'react';
import styled from 'styled-components';

const Error = styled.div`
  display: flex;
  font-size: 0.8rem;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  width: ${props=>props.width||'80%'};
  height: 2rem;
  background: #f44336b3;
  border-radius: 8px;
`;

const ErrorMessage = (props) => {
  const { errorMessage } = props;
  return <Error {...props}>{errorMessage}</Error>;
};

export default ErrorMessage;
