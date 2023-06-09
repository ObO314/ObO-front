// 키값 기준으로 쿠키에 저장된 값을 가져오는 함수
export const getCookie = (cookieName: string) => {
    const accessToken = document.cookie.split(cookieName + '=');
    return accessToken[1];
};

// 쿠키에 저장하는 함수
export const setCookie = ({ cookieName, cookieValue, exp = 5 }: { cookieName: string; cookieValue: string; exp: number }) => {
    const date = new Date();
    // 날짜 생성
    date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
    const stringValue = JSON.stringify(cookieValue);
    document.cookie = `${cookieName}=${stringValue};expires=${date.toUTCString()};path=/`;
};

// 만료일을 예전으로 설정해 쿠키를 삭제
export const deleteCookie = (cookieName: string) => {
    document.cookie = cookieName + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
};
