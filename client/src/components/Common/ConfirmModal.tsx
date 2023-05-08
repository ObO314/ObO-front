import React from 'react';
import styled from 'styled-components';
import { IoWarningOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useModalStore } from '@/store/store';

export default function ConfirmModal() {
    const navigate = useNavigate();
    const { noIsShow } = useModalStore();
    const textContent = '로그인이 필요한 메뉴입니다.\n로그인 하시겠습니까?';
    const handleConfirm = () => {
        navigate('/login');
        noIsShow();
    };

    const handleCancel = () => {
        noIsShow();
    };

    return (
        <StyledModalWrapper>
            <StyledModalContent>
                <StyledTextContainer>
                    <StyledIoWarningOutline />
                    {textContent}
                </StyledTextContainer>

                <StyledButtonContainer>
                    <StyledModalButton onClick={handleConfirm}>예</StyledModalButton>
                    <StyledModalButton onClick={handleCancel}>아니오</StyledModalButton>
                </StyledButtonContainer>
            </StyledModalContent>
        </StyledModalWrapper>
    );
}

const StyledModalWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`;

const StyledModalContent = styled.div`
    width: 450px;
    height: 200px;
    background-color: var(--white);
    border-radius: 10px;
    font-family: 'NotoSansKR';
    font-weight: 600;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    white-space: pre-wrap;
`;

const StyledTextContainer = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    line-height: normal;
`;

const StyledIoWarningOutline = styled(IoWarningOutline)`
    width: 20%;
    color: var(--warning-yellow);
    font-size: 40px;
`;

const StyledButtonContainer = styled.div`
    width: 70%;
    height: auto;
    display: flex;
    justify-content: space-between;
`;

const StyledModalButton = styled.button`
    width: 120px;
    height: 40px;
    font-size: 14px;
    font-weight: 500;
    border-radius: 5px;
    background-color: var(--button-gray);
    &:hover {
        box-shadow: 3px 3px 6px 2px var(--input-shadow-gray);
        font-weight: 600;
    }
`;
