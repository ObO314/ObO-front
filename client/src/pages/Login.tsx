import React from 'react';
import TestHeader from '@components/TestHeader';
import RocketAnimation from '@/components/SignUp/RocketAnimation';
import SignUpWithLogin from '@/components/SignUp/SignUpWithLogin';
import { StyledContainer, StyledSignUpBox, StyledBox } from '@pages/SignUp';
import LoginForm from '@/components/Login/LoginForm';

export default function Login() {
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
                        <LoginForm />
                    </StyledSignUpBox>
                </StyledBox>
            </StyledContainer>
        </>
    );
}
