import React from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

/* 백엔드에 승인코드 전달 */
const postGithubCode = async (code: string) => {
    try {
        const response = await axios.post('http://localhost:8000/api/github-authenticate', code, { headers: { 'Content-Type': 'application/json' } });
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};

export default function Callback() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const code = params.get('code');
    const state = params.get('state');

    code && postGithubCode(code);
    return null;
}
