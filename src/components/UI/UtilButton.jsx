import React from 'react';
import styled from 'styled-components';

const StyleButton = styled.button`
  color: ${(props) => props.color || '#ffffff'};
  display: flex;
  min-width: 5rem;
  width: ${(props) => props.width || '5rem'};
  height: ${(props) => props.height || '2rem'};
  justify-content: center;
  align-items: center;
  margin-left: ${(props) => props.marginLeft || '1rem'};
  border: ${(props) => props.border || 'none'};
  border-radius: 10px;
  text-transform: ${(props) => props.textTransform || 'capitalize'};
  background-color: ${(props) => props.backgroundColor || '#ff0000'};
  background-position: center;
  transition: background 0.8s;
  outline: none;
  cursor: pointer;
  box-shadow: 0 0 4px #999;

  &:active {
    background-color: ${(props) =>
      props.backgroundColorRippleColor || '#f24f4f'};
    background-size: 100%;
    transition: background 0s;
  }
`;

const UtilButton = (props) => {
  const { handleClick, buttonText } = props;
  return (
    <StyleButton onClick={handleClick} {...props}>
      {buttonText}
    </StyleButton>
  );
};

export default UtilButton;
