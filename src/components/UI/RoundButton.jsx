import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: ${(props) => props.display};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.backgroundColor};
`;

const RoundButton = (props) => {
  const { width, height, borderRadius, color, children } = props;
  return (
    <StyledDiv
      width={width}
      height={height}
      borderRadius={borderRadius}
      backgroundColor={color}
      {...props}
    >
      {children}
    </StyledDiv>
    // <div
    //   className={className}
    //   {...props}
    //   style={{
    //     width,
    //     height,
    //     borderRadius,
    //     backgroundColor: color,
    //   }}
    // >
    //   {children}
    // </div>
  );
};

export default RoundButton;
