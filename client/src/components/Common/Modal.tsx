import { deleteCookie } from '@/utils/controlCookie';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

type cancelType = {
    cancel: boolean;
};

export const Modal = ({ acting, message }: { acting: string; message: string }) => {
    const [isCancel, setIsCancel] = useState(false);
    const navigate = useNavigate();

    const clickCancel = () => {
        setIsCancel(true);
    };

    const clickConfirm = () => {
        deleteCookie('login');
        navigate('/');
    };

    return (
        <StyledModalContainer cancel={isCancel}>
            {message}
            <StyledButtonContainer>
                <StyledButton onClick={clickCancel}>취소</StyledButton>
                <StyledButton onClick={clickConfirm}>확인</StyledButton>
            </StyledButtonContainer>
        </StyledModalContainer>
    );
};

const StyledModalContainer = styled.div<cancelType>`
    width: 500px;
    height: 300px;
    border-radius: 30px;
    border: none;
    color: var(--oboBlack);
    font-family: 'NotoSansKR';
    font-size: 16px;
    opacity: cancel ? 0 : 1;
`;

const StyledButtonContainer = styled.div`
    width: 300px;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 20px;
`;

const StyledButton = styled.button`
    width: 100px;
    height: 60px;
    border-radius: 10px;
    border: none;
    color: var(--white);
    background-color: var(--oboGreen);
    &:hover {
        background-color: var(--oboDeepGreen);
    }
`;
