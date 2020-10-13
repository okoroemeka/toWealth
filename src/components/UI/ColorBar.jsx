import React from 'react';
import styled from 'styled-components';

const ColorBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 0.8rem;
  position: relative;
  margin: ${props=>props.margin ||0};
  cursor: pointer;
  background-color: ${props => props.backgroundColor || 'white'};

  .bar__icon {
    width: 0.8rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .mark {
    width: 0.8rem;
  }
`;

const ColorBar = (props) => {
  const { color, children, handleClick = () => null } = props;
  return (
    <ColorBox backgroundColor={color} onClick={handleClick} {...props}>
      {children}
    </ColorBox>
  );
};

export default ColorBar;
