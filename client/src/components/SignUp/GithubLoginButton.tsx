import React from 'react';
import { StyledSignUpLogoButton } from '@/components/SignUp/GoogleLoginButton';
import GithubLogo from '@assets/images/github-logo.png';
import { v4 as uuidv4 } from 'uuid';

export default function GithubLoginButton() {
    const clientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    const redirectUrl = process.env.REACT_APP_GITHUB_CALLBACK_ADDRESS;
    const state = uuidv4();
    const githubURL = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}&state=${state}`;
    const handleLogin = () => {
        window.location.href = githubURL;
    };
    return <StyledSignUpLogoButton onClick={handleLogin} image={GithubLogo} />;
}
