import React from 'react';
import TestHeader from '@components/TestHeader';
import SignUpForm from '@/components/SignUp/SignUpForm';
import styled from 'styled-components';
import RocketAnimation from '@/components/SignUp/RocketAnimation';
import SignUpWithLogin from '@/components/SignUp/SignUpWithLogin';

export default function SignUp() {
    return (
        <>
            <TestHeader />
            <StyledContainer>
                <StyledBox>
                    <RocketAnimation />
                </StyledBox>
                <StyledBox>
                    <StyledSignUpBox>
                        <SignUpWithLogin />
                        <SignUpForm />
                    </StyledSignUpBox>
                </StyledBox>
            </StyledContainer>
        </>
    );
}

export const StyledContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    margin-top: 3rem;
`;
export const StyledBox = styled.div`
    width: 50%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const StyledSignUpBox = styled.div`
    width: 90%;
    height: 60vh;
    border: 1px solid var(--gray-color);
    border-radius: 10px;
    background-color: #ffffff;
    padding: 1rem;
`;
