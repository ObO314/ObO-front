import React from 'react';
import styled from 'styled-components';

export default function HoriZontalRule() {
    return (
        <StyledSignUpHorizontalRuleBox>
            <StyledSignUpHorizontalRule />
            <StyledOrText>or</StyledOrText>
            <StyledSignUpHorizontalRule />
        </StyledSignUpHorizontalRuleBox>
    );
}

export const StyledSignUpHorizontalRuleBox = styled.div`
    width: 100%;
    height: auto;
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    font-family: 'Heebo';
    font-weight: 300;
    color: var(--input-text-color);
`;
export const StyledOrText = styled.div`
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const StyledSignUpHorizontalRule = styled.hr`
    width: 45%;
    height: 1px;
    color: var(--gray-color);
`;
