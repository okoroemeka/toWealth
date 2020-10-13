import React from 'react';
import styled from 'styled-components';

import './Styles/CustomButton.scss';

const Button = styled.button`
  color: ${props=>props.color || 'white'};
  padding: ${props=>props.paddingTopDown || '0.9rem'} ${props=>props.paddindLeftRight||'3rem'};
  margin: ${props => props.marginTopDown || '1rem'} ${props => props.marginLeftRight || 0};
  border: none;
  text-transform: uppercase;
  border-radius: ${props=>props.borderRadius||'1rem'};
  background: ${props=>props.background||'#347af0'};
  cursor: pointer;
  outline: none;
`;

const CustomButton = (props) => {
  const { title = '', handleClick = () => null } = props
  return (
    <Button type='submit' onClick={handleClick} {...props}>
      {title}
    </Button>
  );
};

export default CustomButton;
