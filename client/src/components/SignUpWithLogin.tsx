import React from 'react';
import styled from 'styled-components';
import HoriZontalRule from '@components/HoriZontalRule';
import GoogleLogo from '@assets/images/google-logo.png';
import GithubLogo from '@assets/images/github-logo.png';
import { Link, useParams } from 'react-router-dom';

export default function SignUpWithLogin() {
    const { params } = useParams();
    return (
        <StyledSignUpContainer>
            <StyledSignUpTileBox>{params === 'login' ? 'Log in' : 'Sign up'}</StyledSignUpTileBox>
            <StyledSignUpLoginContainer>
                <StyledSignUpLoginBox>
                    {params === 'login' ? '아직 계정이 없으신가요?' : '이미 계정이 있으신가요?'}
                    <StyledSignUpLoginLink to={params === 'login' ? 'signup' : '/login'}>{params === 'login' ? '회원가입' : '로그인'}</StyledSignUpLoginLink>
                </StyledSignUpLoginBox>
                <StyledSignUpLogoBox>
                    <StyledSignUpLogoImage src={GoogleLogo} />
                    <StyledSignUpLogoImage src={GithubLogo} />
                </StyledSignUpLogoBox>
                <HoriZontalRule />
            </StyledSignUpLoginContainer>
        </StyledSignUpContainer>
    );
}

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
