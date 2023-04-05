import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useGoogleLogin } from '@react-oauth/google';
import GoogleLogo from '@assets/images/google-logo.png';

interface GoogleLoginResponse {
    code: string;
    scope: string;
}

/* 백엔드에 승인코드 전달 */
const postGoogleCode = async (code: string) => {
    try {
        const response = await axios.post('http://localhost:8000/api/google-authenticate', code, { headers: { 'Content-Type': 'application/json' } });
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};

export default function GoogleLoginButton() {
    const login = useGoogleLogin({
        onSuccess: (codeResponse: GoogleLoginResponse) => {
            postGoogleCode(codeResponse.code);
        },
        flow: 'auth-code',
        onError: () => console.log('Login Failed'),
    });
    return <StyledSignUpLogoButton onClick={login} image={GoogleLogo} />;
}
export const StyledSignUpLogoButton = styled.button<{ image: string }>`
    width: 4rem;
    height: 4rem;
    border: 1px solid var(--gray-color);
    border-radius: 7px;
    background-image: url(${props => props.image});
    background-size: contain;
    cursor: pointer;
`;
