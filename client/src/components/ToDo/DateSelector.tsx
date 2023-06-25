import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BsCaretRightSquare } from 'react-icons/bs';
import { dateToyymmdd } from '@/utils/transformDateFormat';

export default function DateSelector() {
    const left = 'left';
    const right = 'right';

    const date = dateToyymmdd(new Date());
    const [showDate, setShowDate] = useState(date);
    const [formatedDate, setFormatedDate] = useState(new Date());
    const decreasedDate = new Date(formatedDate);
    decreasedDate.setDate(decreasedDate.getDate() - 1);
    const increasedDate = new Date(formatedDate);
    increasedDate.setDate(increasedDate.getDate() + 1);

    useEffect(() => {
        const hypenDate = showDate.replace('.', '-');
        setFormatedDate(new Date(hypenDate));
    }, [showDate]);

    const handleOnClick = (direction: string) => {
        switch (direction) {
            case 'left':
                setShowDate(dateToyymmdd(decreasedDate));
                break;
            case 'right':
                setShowDate(dateToyymmdd(increasedDate));
                break;
            default:
                break;
        }
    };

    return (
        <StyledWrapper>
            <StyledSelectorContainer>
                <StyledButtonContainer onClick={() => handleOnClick(left)}>
                    <StyledTriangleIcon direction={left} />
                </StyledButtonContainer>
                <StyledDateContainer>{showDate}</StyledDateContainer>
                <StyledButtonContainer onClick={() => handleOnClick(right)}>
                    <StyledTriangleIcon direction={right} />
                </StyledButtonContainer>
            </StyledSelectorContainer>
        </StyledWrapper>
    );
}

interface directionProps {
    direction: string;
}

const StyledWrapper = styled.div`
    width: 100%;
    height: 5%;
    margin-top: 2%;
    display: flex;
    justify-content: center;
`;

const StyledSelectorContainer = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledButtonContainer = styled.button`
    width: auto;
    height: auto;
`;

const StyledTriangleIcon = styled(BsCaretRightSquare)<directionProps>`
    font-size: 32px;
    color: var(--triangle-gray);
    ${props => (props.direction === 'left' ? 'transform:rotate(180deg)' : null)}
`;

const StyledDateContainer = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
`;
