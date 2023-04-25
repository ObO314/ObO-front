import React from 'react';
import Navbar from '@/components/Common/Navbar';
import SignUpForm from '@/components/SignUp/SignUpForm';
import styled from 'styled-components';
import animationData from '@assets/lotties/rocket.json';
import LottieAnimation, { StyledRocketContainer } from '@/components/Common/LottieAnimation';
import SignUpWithLogin from '@/components/SignUp/SignUpWithLogin';

export default function SignUp() {
    return (
        <>
            <Navbar />
            <StyledContainer>
                <StyledBox>
                    <StyledRocketContainer>
                        <LottieAnimation animationData={animationData} />
                    </StyledRocketContainer>
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
    height: calc(100% - 88px - 3rem);
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
    background-color: var(--white);
    padding: 1rem;
`;
