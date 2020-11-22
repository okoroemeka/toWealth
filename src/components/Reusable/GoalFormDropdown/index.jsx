import React from 'react';
import styled from 'styled-components';

import Caret from '../../UI/Icons/Caret';
import staticData from '../../../utils/data/staticData';
import categoryImage from '../../../assets/images/category.svg';
import './DropdownCaret.scss';
import { useEffect } from 'react';

const Container = styled.div`
  width: 100%;
`;
const InputWrap = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;

const StyledInputField = styled.div`
  display: flex;
  align-items: center;
  width: 93%;
  height: 2.7rem;
  padding-right: 0.5rem;
  border-bottom: 1px solid #b5bbc9;
  position: relative;
`;

const DropdownIcon = styled.span`
  display: inline-block;
  margin-left: auto;
  cursor: pointer;
`;

const DropDown = styled.div`
  width: 93%;
  height: auto;
  padding: 0.5rem 0;
  position: absolute;
  top: 3rem;
  left: calc(7% - 0.5rem);
  background: rgba(181, 187, 201, 0.7);
  border-radius: 10px;
`;

const DropDownItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 0.2rem 0.5rem;
  margin: 0.2rem 0;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    background-color: #d8d8d8;
  }
`;

const IconWrapper = styled.span`
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: ${(props) => props.background || '#cfd2d8'};
`;

const TextDrop = styled.span`
  font-size: 1rem;
  padding-left: 0.5rem;
  text-transform: capitalize;
`;

const Title = styled.label`
  color: #3f51b5;
  padding: 0 1.7rem;
  font-size: 0.8rem;
  font-weight: normal;
`;

const IconArea = styled.div`
  width: 5%;
  display: flex;
  align-items: flex-end;
`;

const SelectedItem = styled.span`
  display: inline-block;
  width: auto;
  padding: 0.4rem 0.3rem;
  border: 1px solid black;
  border-radius: 20px;
`;

const SelectedText = styled.span`
  margin: 0 0.5rem;
`;

const CancelIcon = styled.span`
  cursor: pointer;
`;

const Image = styled.img``;

const { category } = staticData;

const GoalDropdown = ({ handleSelectCategory }) => {
  const [showDropdown, setShowDropdown] = React.useState(false);
  const [selectedCategory, setCategory] = React.useState('');

  const dropDownRef = React.useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleCancel = () => {
    setCategory('');
  };

  const handleChange = ({ color, category: newCategory }) => {
    setCategory(newCategory);
    handleSelectCategory({ color, category: newCategory });
    toggleDropdown();
  };

  const handleBlur = () => {
    toggleDropdown();
  };

  useEffect(() => {
    if (showDropdown) {
      dropDownRef.current.focus();
    }
  }, [showDropdown]);

  return (
    <>
      <Container>
        <Title>Category</Title>
        <InputWrap>
          <IconArea>
            <Image src={categoryImage} alt={categoryImage} />
          </IconArea>
          <StyledInputField>
            {selectedCategory ? (
              <SelectedItem>
                <SelectedText>{selectedCategory}</SelectedText>
                <CancelIcon onClick={() => handleCancel()}>&times;</CancelIcon>
              </SelectedItem>
            ) : null}
            <DropdownIcon>
              <Caret
                className={`caret__drop ${
                  showDropdown ? 'drop__down__icon__caret' : ''
                }`}
                fill='#cfd2d8'
                handleClick={toggleDropdown}
              />
            </DropdownIcon>
          </StyledInputField>
          {showDropdown ? (
            <DropDown ref={dropDownRef} onBlur={handleBlur}>
              {category.map((item) => (
                <DropDownItem
                  key={item.color}
                  onClick={() =>
                    handleChange({
                      color: item.color,
                      category: item.name,
                    })
                  }
                >
                  <IconWrapper background={item.color}>
                    <Image src={item.img} alt={item.name} />
                  </IconWrapper>
                  <TextDrop>{item.name}</TextDrop>
                </DropDownItem>
              ))}
              <DropDownItem>
                <IconWrapper>+</IconWrapper>
                <TextDrop>Create new category</TextDrop>
              </DropDownItem>
            </DropDown>
          ) : null}
        </InputWrap>
      </Container>
    </>
  );
};

export default GoalDropdown;
