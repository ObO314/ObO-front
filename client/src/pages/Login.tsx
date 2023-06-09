import React from 'react';
import animationData from '@assets/lotties/rocket.json';
import LottieAnimation, { StyledRocketContainer } from '@/components/Common/LottieAnimation';
import SignUpWithLogin from '@/components/SignUp/SignUpWithLogin';
import { StyledContainer, StyledSignUpBox, StyledBox } from '@pages/SignUp';
import LoginForm from '@/components/Login/LoginForm';

export default function Login() {
    return (
        <>
            <StyledContainer>
                <StyledBox>
                    <StyledRocketContainer>
                        <LottieAnimation animationData={animationData} />
                    </StyledRocketContainer>
                </StyledBox>
                <StyledBox>
                    <StyledSignUpBox>
                        <SignUpWithLogin />
                        <LoginForm />
                    </StyledSignUpBox>
                </StyledBox>
            </StyledContainer>
        </>
    );
}
