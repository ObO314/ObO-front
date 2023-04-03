import React from 'react';
import TestHeader from '@components/TestHeader';
import styled from 'styled-components';
import RocketAnimation from '@components/RocketAnimation';
import { Link } from 'react-router-dom';
import GoogleLogo from '@assets/images/google-logo.png';
import GithubLogo from '@assets/images/github-logo.png';

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
                        <StyledSignUpContainer>
                            <StyledSignUpTileBox>Sign up</StyledSignUpTileBox>
                            <StyledSignUpLoginContainer>
                                <StyledSignUpLoginBox>
                                    이미 계정이 있으신가요?
                                    <StyledSignUpLoginLink to="/login">로그인</StyledSignUpLoginLink>
                                </StyledSignUpLoginBox>
                                <StyledSignUpLogoBox>
                                    <StyledSignUpLogoImage src={GoogleLogo} />
                                    <StyledSignUpLogoImage src={GithubLogo} />
                                </StyledSignUpLogoBox>
                                <StyledSignUpHorizontalRuleBox>
                                    <StyledSignUpHorizontalRule />
                                    <StyledOrText>or</StyledOrText>
                                    <StyledSignUpHorizontalRule />
                                </StyledSignUpHorizontalRuleBox>
                            </StyledSignUpLoginContainer>
                        </StyledSignUpContainer>
                        <StyledSignUpFormWrapper>
                            <StyledInputContainer>
                                <StyledNameInputField type="text" required placeholder="Name" />
                                <StyledNameInputField type="text" required placeholder="NickName" />
                            </StyledInputContainer>
                            <StyledInputField type="email" required placeholder="Email" />
                            <StyledInputField type="password" required placeholder="Password" />
                            <StyledSignUpSubmitButton>Create Account</StyledSignUpSubmitButton>
                        </StyledSignUpFormWrapper>
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

export const StyledSignUpContainer = styled.div`
    width: 100%;
    height: 40%;
`;

export const StyledSignUpTileBox = styled.div`
    width: 100%;
    height: 20%;
    font-size: 3rem;
    font-family: 'NovaRound';
    margin-bottom: 1rem;
`;
export const StyledSignUpLoginContainer = styled.div`
    width: 100%;
    height: 80%;
    font-size: 1.25rem;
    font-family: 'NotoSansKR';
    font-weight: 600;
`;

export const StyledSignUpLoginBox = styled.div`
    width: 100%;
    height: 30%;
    padding: 1rem 1rem;
`;

export const StyledSignUpLoginLink = styled(Link)`
    color: var(--oboGreen);
    margin-left: 2rem;
    cursor: pointer;
`;

export const StyledSignUpLogoBox = styled.div`
    width: 40%;
    height: auto;
    display: flex;
    justify-content: space-around;
`;
export const StyledSignUpLogoImage = styled.img`
    width: 4rem;
    height: 4rem;
    border: 1px solid var(--gray-color);
    border-radius: 7px;
    cursor: pointer;
`;

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

export const StyledSignUpFormWrapper = styled.form`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
`;
export const StyledInputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
`;

export const StyledInputField = styled.input`
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid var(--gray-color);
    border-radius: 10px;
    color: var(--input-text-color);
    background-color: var(--input-bg-color);
`;
export const StyledNameInputField = styled(StyledInputField)`
    margin-bottom: 0;
    width: 49%;
`;
export const StyledSignUpSubmitButton = styled.button`
    width: 100%;
    height: var(--input-height);
    font-weight: 400;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    color: #ffffff;
    background-color: var(--oboCoral);
    border: 1px solid var(--gray-color);
    border-radius: 10px;
`;
