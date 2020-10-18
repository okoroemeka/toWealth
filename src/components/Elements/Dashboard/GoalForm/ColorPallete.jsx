import React from 'react';
import styled from 'styled-components';

import { goalTypes } from '../../../../helper/Reducers/goal';
import ColorBar from '../../../UI/ColorBar';
import CustomCard from "../../../UI/CustomCard";
import CustomButton from "../../../UI/CustomButton";
import tick from '../../../../assets/images/tick1.svg';

const ColorContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  height: auto;
  padding-top: 1rem;
`;

const CustomButtonWrapper = styled.div`
 display: flex;
 justify-content: flex-end;
`;

const ColorPallete = (props) => {
  const {
    handleCancel: closeModal,
    colorsState = [],
    handleSelectColor = () => null,
  } = props;

  const handleClick = (colorId, color) =>{
    handleSelectColor({
      type: goalTypes.selectColor,
      payload: { colorId, color },
    })
  }

  return (
    <CustomCard cardTitle="choose color" handleCancel={closeModal}>
      <ColorContainer>
        {colorsState.slice(4)?.map(({ colorId, color, active }) => (
          <ColorBar
            margin="0.1rem"
            key={colorId}
            color={color}
            handleClick={
              () => handleClick(colorId, color)
            }
          >
            {active && <img src={tick} alt='mark' className='mark' />}
          </ColorBar>
        ))}
      </ColorContainer>
      <CustomButtonWrapper>
        <CustomButton title="continue" handleClick={closeModal} paddindLeftRight="1.5rem" borderRadius="1.5rem" paddingTopDown="0.7rem"/>
      </CustomButtonWrapper>
    </CustomCard>
    );
}

export default ColorPallete;