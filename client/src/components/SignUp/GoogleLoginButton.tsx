import React from 'react';
import styled from 'styled-components';
import { useGoogleLogin } from '@react-oauth/google';
import GoogleLogo from '@assets/images/google-logo.png';
import { customAxios } from '@/apis/customAxios';

interface GoogleLoginResponse {
    code: string;
    scope: string;
}

/* 백엔드에 승인코드 전달 */
const postGoogleCode = async (code: string) => {
    try {
        const instance = customAxios();
        console.log(code);
        const response = await instance.post('http://ec2-13-209-7-29.ap-northeast-2.compute.amazonaws.com:3000/user/login/google', { code });
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
    background-repeat: no-repeat;
    background-image: url(${props => props.image});
    background-size: contain;

    cursor: pointer;
`;
