import React from 'react';
import styled from 'styled-components';

const StyledCardWrapper = styled.div`
    width: ${props => props.width || '33.33%'};
    min-height: ${props => props.height || '12rem'};
    padding: ${props=>props.padding||'1rem'};
    background-color: white;
`;

const CardHeader = styled.div`
  width: 100%auto;
  display: flex;
`;

const CancelButton = styled.span`
  font-size: 1.5rem;
  font-weight: normal;
  margin-left:auto;
  cursor:pointer;
`;

const CardTitle = styled.h5`
  color: #3a3b3f;
  font-size: 1.2rem;
  text-transform: capitalize;
  margin: 0;
`;


const ColorPallete = ({cardTitle, handleCancel, children}) => {

    return (
      <StyledCardWrapper>
        <CardHeader>
            <CardTitle>{cardTitle}</CardTitle>
            <CancelButton onClick={handleCancel}>&times;</CancelButton>
        </CardHeader>
        {children}
      </StyledCardWrapper>

  );
}

export default ColorPallete;