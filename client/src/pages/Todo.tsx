import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import TitleHeader from '@/components/Common/TitleHeader';
import { StyledWrapperContainer } from '@/pages/ReadMe';
import { Link } from 'react-router-dom';
import Routine from '@/components/ToDo/Routine';
import Day from '@/components/ToDo/Day';
import MonthWeeks from '@/components/ToDo/MonthWeeks';

export default function Todo() {
    const titleText = 'To-Do';
    const categoryNames = ['Routine', 'Day', 'Month/Weeks'];
    const buttonRefs = [useRef<HTMLButtonElement>(null), useRef<HTMLButtonElement>(null), useRef<HTMLButtonElement>(null)];
    const [isClicked, setIsClicked] = useState(false);
    const [categoryName, setCategoryName] = useState('');
    const handleOnClick = (item: string, index: number) => {
        if (buttonRefs[index].current) {
            const currentButton = buttonRefs[index].current?.textContent;
            setIsClicked(item === currentButton);
            console.log(isClicked);
        }
        if (isClicked) setCategoryName(item);
    };
    return (
        <StyledWrapperContainer>
            <StyledTitleContainer>
                <TitleHeader titleText={titleText} />
                <StyledCategoryContainer>
                    {categoryNames.map((item, index) => {
                        return (
                            <StyledCategoryButton key={`${item}-${index}`} ref={buttonRefs[index]} onClick={() => handleOnClick(item, index)} isClicked={isClicked}>
                                {item}
                            </StyledCategoryButton>
                        );
                    })}
                </StyledCategoryContainer>
            </StyledTitleContainer>
            {categoryName === 'Routine' ? <Routine /> : categoryName === 'Day' ? <Day /> : categoryName === 'Month/Weeks' ? <MonthWeeks /> : null}
        </StyledWrapperContainer>
    );
}
export const StyledTitleContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const StyledCategoryContainer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    padding: 0 10%;
    margin-top: 3%;
    justify-content: space-around;
`;

interface isClickedProps {
    isClicked: boolean;
}

export const StyledCategoryButton = styled.button<isClickedProps>`
    width: 18%;
    height: auto;
    font-size: 20px;
    font-weight: 600;
    color: var(--oboGreen);
    background-color: var(--white);

    border: ${props => (props.isClicked ? '2px solid var(--oboGreen)' : 'none')};
    border-radius: 30px;
`;
