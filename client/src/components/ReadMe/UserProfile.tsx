import React, { useState } from 'react';
import styled from 'styled-components';
import { disabeldProps } from '@/types/variableType';
import animationData from '@assets/lotties/profile-image.json';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineUpload } from 'react-icons/ai';
import LottieAnimation from '@/components/Common/LottieAnimation';
import { StyledPencilIcon } from '@components/Common/TitleHeader';

export default function UserProfile() {
    const [disabled, setDisabled] = useState(true);
    const userName = '홍길동';
    const userProfileImage = '유저이미지';
    const handleButtonClick = () => {
        setDisabled(!disabled);
    };

    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files;
        if (!file) {
            alert('파일을 선택해주세요.');
            return;
        }
        console.log(file[0].name);
    };
    /* 1. api get 요청으로 사용자 프로필 이미지 & 사용자 name 받아옴
   2. api patch 요청으로 사용자 프로필 이미지 or 사용자 name 수정하도록 함
*/
    return (
        <StyledProfileContainer>
            <StyledProfileImage>{userProfileImage ? <LottieAnimation animationData={animationData} /> : <FaUserCircle />}</StyledProfileImage>
            <StyledInputLabel disabled={disabled}>
                <StyledFileUpload type="file" disabled={disabled} accept=".jpg, .png" onChange={handleFileUpload} />
                <AiOutlineUpload />
            </StyledInputLabel>
            <StyledProfileNameInput type="text" value={userName} disabled={disabled} />
            <StyledProfileEditButton onClick={handleButtonClick}>
                <StyledPencilIconGray />
                {disabled ? 'Edit Profile' : 'Save Profile'}
            </StyledProfileEditButton>
        </StyledProfileContainer>
    );
}

const StyledProfileContainer = styled.div`
    width: 30%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledProfileImage = styled.div`
    width: auto;
    height: auto;
    font-size: 200px;
    color: var(--oboDeepGreen);
`;

const StyledInputLabel = styled.label<disabeldProps>`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    font-size: 36px;
    color: var(--oboLightGreen);
    cursor: ${props => (props.disabled ? 'default' : 'pointer')};
`;

const StyledFileUpload = styled.input`
    display: none;
`;
const StyledProfileNameInput = styled.input`
    width: 60%;
    height: auto;
    color: var(--oboBlack);
    font-family: 'NotoSansKR';
    font-weight: 500;
    font-size: 36px;
    text-align: center;
    margin-bottom: 10%;
    padding: 10px 10px;
`;

const StyledPencilIconGray = styled(StyledPencilIcon)`
    color: var(--edit-font-gray);
    font-size: 20px;
`;

const StyledProfileEditButton = styled.button`
    width: 60%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 22px;
    color: var(--edit-font-gray);
    background-color: var(--edit-gray);
    border: none;
    border-radius: 1rem;
    &:hover {
        background-color: var(--edit-hover-gray);
    }
`;
