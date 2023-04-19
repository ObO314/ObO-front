import React from 'react';
import styled from 'styled-components';
import HoriZontalRule from '@/components/SignUp/HoriZontalRule';
import GoogleLoginButton from '@/components/SignUp/GoogleLoginButton';
import GithubLoginButton from '@/components/SignUp/GithubLoginButton';
import { Link } from 'react-router-dom';
import { useValidation } from '@/hooks/useValidation';

export default function SignUpWithLogin() {
    const { pathname } = useValidation();
    return (
        <StyledSignUpContainer>
            <StyledSignUpTileBox>{pathname === '/login' ? 'Log in' : 'Sign up'}</StyledSignUpTileBox>
            <StyledSignUpLoginContainer>
                <StyledSignUpLoginBox>
                    {pathname === '/login' ? '아직 계정이 없으신가요?' : '이미 계정이 있으신가요?'}
                    <StyledSignUpLoginLink to={pathname === '/login' ? '/signup' : '/login'}>{pathname === '/login' ? '회원가입' : '로그인'}</StyledSignUpLoginLink>
                </StyledSignUpLoginBox>
                <StyledSignUpLogoBox>
                    <GoogleLoginButton />
                    <GithubLoginButton />
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
