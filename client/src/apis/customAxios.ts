import { getCookie, setCookie } from '@/utils/controlCookie';
import axios, { HttpStatusCode } from 'axios';

export const customAxios = () => {
    function newAbortSignal(timeoutMs: number) {
        const abortController = new AbortController();
        setTimeout(() => abortController.abort(), timeoutMs || 0);

        return abortController.signal;
    }
    const customAxios = axios.create({
        baseURL: process.env.REACT_APP_BASE_URL,
        headers: {
            'Content-Type': 'application/json',
        },
        signal: newAbortSignal(5000),
    });
    customAxios.interceptors.request.use(
        config => {
            const url = window.location.href.split('/');
            if (url[url.length - 1] !== 'login' && url[url.length - 1] !== 'signup') {
                const token = getCookie('login');
                const accessToken: string = JSON.parse(token).accessToken;
                config.headers['Authorization'] = `Bearer ${accessToken}`;
            }

            return config;
        },
        error => {
            return Promise.reject(error);
        },
    );
    customAxios.interceptors.response.use(
        response => {
            return response;
        },
        error => {
            if (error.response && error.response.status === HttpStatusCode.Unauthorized) {
                const token: string = getCookie('login');
                const refreshToken = JSON.parse(token).refreshToken;
                error.config.headers['Authorization'] = `Bearer ${refreshToken}`;
                return axios(error.config) // 재요청
                    .then(response => setCookie({ cookieName: 'login', cookieValue: response.data.accessToken, exp: 5 }))
                    .catch(error => console.log(error));
            }
            return Promise.reject(error);
        },
    );
    return customAxios;
};
