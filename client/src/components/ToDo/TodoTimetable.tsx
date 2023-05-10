import React from 'react';
import styled from 'styled-components';

export default function TodoTimetable() {
    return (
        <StyledWrapper>
            <StyledContainer>
                <StyledTimeTable />
                <StyledTimeLine />
            </StyledContainer>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
    width: 100%;
    height: 50%;
    margin-top: 2%;
    padding: 0 4%;
`;
const StyledContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    overflow-y: scroll;
    /* -ms-overflow-style: none;
    scrollbar-width: none;

    ::-webkit-scrollbar {
        display: none;
    } */
`;

const StyledTimeTable = styled.div`
    width: 20%;
    height: 100%;
    border: 2px solid var(--triangle-gray);
`;

const StyledTimeLine = styled(StyledTimeTable)`
    width: 80%;
`;
