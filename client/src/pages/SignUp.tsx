import React from 'react';
import TestHeader from '@components/TestHeader';
import styled from 'styled-components';
import RocketAnimation from '@components/RocketAnimation';
import { Link } from 'react-router-dom';
import GoogleLogo from '@assets/images/google-logo.png';

export default function SignUp() {
    return (
        <>
            <TestHeader />
            <StyledContainerBox>
                <StyledAnimationBox>
                    <RocketAnimation />
                </StyledAnimationBox>
                <StyledSignUpContainer>
                    <StyledSignUpBox>
                        <StyledSignUpTopContainer>
                            <StyledSignUpTopTileBox>Sign up</StyledSignUpTopTileBox>
                            <StyledSignUpTopLoginContainer>
                                <StyledSignUpTopLoginBox>
                                    이미 계정이 있으신가요?
                                    <StyledSignUpTopLoginLink>
                                        <Link to="/login">로그인</Link>
                                    </StyledSignUpTopLoginLink>
                                </StyledSignUpTopLoginBox>
                                <StyledSignUpTopLogoBox>
                                    <StyledSignUpTopLogoImage src={GoogleLogo} />
                                </StyledSignUpTopLogoBox>
                            </StyledSignUpTopLoginContainer>
                        </StyledSignUpTopContainer>
                        <StyledSignUpBottomContainer />
                    </StyledSignUpBox>
                </StyledSignUpContainer>
            </StyledContainerBox>
        </>
    );
}

const StyledContainerBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    margin-top: 3rem;
`;

const StyledAnimationBox = styled.div`
    width: 50%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
`;
const StyledSignUpContainer = styled.div`
    width: 50%;
    height: 60%;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledSignUpBox = styled.div`
    width: 90%;
    height: 90%;
    border: 1px solid #c7c7c7;
    border-radius: 10px;
    background-color: #ffffff;
    padding: 1rem;
`;

const StyledSignUpTopContainer = styled.div`
    width: 100%;
    height: 40%;
    border: 1px solid black;
`;

const StyledSignUpTopTileBox = styled.div`
    width: 100%;
    height: 20%;
    font-size: 3rem;
    font-family: 'NovaRound';
`;
const StyledSignUpTopLoginContainer = styled.div`
    width: 100%;
    height: 80%;
    padding: 1rem 1rem;
    font-size: 1.25rem;
    font-family: 'NotoSansKR';
    font-weight: 600;
`;

const StyledSignUpTopLoginBox = styled.div`
    width: 100%;
    height: 30%;
`;

const StyledSignUpTopLoginLink = styled.a`
    color: var(--oboGreen);
    margin-left: 2rem;
    cursor: pointer;
`;

const StyledSignUpTopLogoBox = styled.div`
    width: 100%;
    height: 70%;
`;
const StyledSignUpTopLogoImage = styled.img`
    width: 3rem;
    height: 3rem;
    border: 1px solid #c7c7c7;
    border-radius: 7px;
`;
const StyledSignUpBottomContainer = styled.div`
    width: 100%;
    height: 60%;
    border: 1px solid black;
`;
