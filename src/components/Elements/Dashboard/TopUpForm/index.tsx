import * as React from 'react';
import styled from "styled-components";
import Input from '../../../Reusable/GoalInput/Input';
import goalIcon from '../../../../assets/images/goalValue.svg';
import Button from '../../../UI/UtilButton';

export interface TopupFormProps {
    handleTopUp(amount:string): void;
    handleCloseModal(): void;
}

const Card = styled.div`
    width: 30%;
    min-height:20vh;
    padding: 1rem;
    background-color: #ffffff;
    border-radius: 13px;
    position: relative;
`
const Title = styled.h4`
    margin: 0;
    margin-bottom: 1rem;
`;

const CancelButton = styled.span`
    font-size: 1.5rem;
    position: absolute;
    top: 1rem;
    right:1rem;
    cursor: pointer;
`;

const InputArea = styled.div`
    width: 100%;
`;

const ButtonArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

const TopupForm: React.FC<TopupFormProps> = ({ handleTopUp, handleCloseModal }: TopupFormProps): JSX.Element => {
    const [amount, setAmount] = React.useState('')
    return (
        <Card>
            <Title>Add deposit</Title>
            <CancelButton onClick={ handleCloseModal }>&times;</CancelButton>
            <InputArea>
                <Input required icon={goalIcon} inputValue={amount} handleChange={ (e)=> setAmount(e.target.value) } inputName="Amount" labelTitle="amount" inputType="number"></Input>
            </InputArea>
            <ButtonArea>
                <Button backgroundColor="#1665D8" borderRadius="1.2rem" handleClick={()=>handleTopUp(amount)} backgroundColorRippleColor="#347af0" buttonText="ADD"/>
            </ButtonArea>
        </Card>
     );
}

export default TopupForm;