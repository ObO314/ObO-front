import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { isClickedArrayProps, isClickedProps } from '@/types/variableType';
import { StyledWrapperContainer } from '@/pages/ReadMe';
import TitleHeader from '@/components/Common/TitleHeader';
import Routine from '@/components/ToDo/Routine';
import Day from '@/components/ToDo/Day';
import MonthWeeks from '@/components/ToDo/MonthWeeks';

export default function Todo() {
    const titleText = 'To-Do';
    const [routineIsClicked, setRoutineIsClicked] = useState(false);
    const [dayIsClicked, setDayIsClicked] = useState(false);
    const [monthWeeksIsClicked, setMonthWeeksIsClicked] = useState(false);
    const [categoryName, setCategoryName] = useState('');

    const isClickedArray: isClickedArrayProps[] = [
        { name: 'Routine', setValue: setRoutineIsClicked, value: routineIsClicked },
        { name: 'Day', setValue: setDayIsClicked, value: dayIsClicked },
        { name: 'Month/Weeks', setValue: setMonthWeeksIsClicked, value: monthWeeksIsClicked },
    ];

    const handleOnClick = (item: isClickedArrayProps, index: number) => {
        const setValue = item.setValue;
        isClickedArray.forEach((item, idx) => {
            if (idx === index) {
                setValue(true);
                setCategoryName(item.name);
            } else {
                item.setValue(false);
            }
        });
    };

    return (
        <StyledWrapperContainer>
            <StyledTitleContainer>
                <TitleHeader titleText={titleText} />
                <StyledCategoryContainer>
                    {isClickedArray.map((item, index) => {
                        return (
                            <StyledCategoryButton key={`${item.name}-${index}`} onClick={() => handleOnClick(item, index)} isClicked={item.value}>
                                {item.name}
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
