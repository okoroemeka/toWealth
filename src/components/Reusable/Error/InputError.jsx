import React from 'react';
import styled from 'styled-components';

const StyledError = styled.h6`
    color: #f44336b3;
    font-weight: normal;
    font-size: 0.7rem;
    margin: 0;
    text-align: left;
`;

const InputError = ({errorText}) => {
    return (
        <StyledError>{errorText}</StyledError>
     );
}

export default InputError;