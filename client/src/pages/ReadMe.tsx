import React, { useState } from 'react';
import TestHeader from '@/components/TestHeader';
import { StyledContainer } from '@/pages/SignUp';
import styled from 'styled-components';
import { HiOutlinePencil } from 'react-icons/hi2';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineUpload } from 'react-icons/ai';
import { useParams, useNavigate } from 'react-router-dom';
import LottieAnimation from '@/components/Common/LottieAnimation';
import animationData from '@assets/lotties/profile-image.json';
import { disabeldProps } from '@/types/editButtonType';

export default function ReadMe() {
    const [disabled, setDisabled] = useState(true);
    const navigate = useNavigate();
    const { id } = useParams();
    const titleText = 'Read ME';
    const userName = '홍길동';
    const textTitle = '자기를 한줄로 표현하는 글입니다.';
    const textContent =
        '자기소개입니다.자기소개입니다.자기소개입니다.자기소개입니다.자기소개입니다.자기소개입니다.자기소개입니다.자기소개입니다.자기소개입니다.자기소개입니다.자기소개입니다.자기소개입니다.자기소개입니다.자기소개입니다.자기소개입니다.자기소개입니다.자기소개입니다.자기소개입니다.자기소개입니다.자기소개입니다.자기소개입니다.';
    const textTag = ['#나를', '#표현하는', '#해시태그'];
    const userProfileImage = '유저이미지';
    const handleButtonClick = () => {
        setDisabled(!disabled);
    };

    return (
        <>
            <TestHeader />
            <StyledReadMeContainer>
                <StyledTitleContainer>
                    <div></div>
                    <StyledTitle onClick={() => navigate(`/readme/${id}`)}>{titleText}</StyledTitle>
                    <StyledIconContainer>
                        <StyledPencilIcon />
                    </StyledIconContainer>
                </StyledTitleContainer>
                <StyledContentContainer>
                    <StyledProfileContainer>
                        <StyledProfileImage>{userProfileImage ? <LottieAnimation animationData={animationData} /> : <FaUserCircle />}</StyledProfileImage>
                        <StyledInputLabel disabled={disabled}>
                            <StyledFileUpload type="file" disabled={disabled} />
                            <AiOutlineUpload />
                        </StyledInputLabel>
                        <StyledProfileNameInput type="text" value={userName} disabled={disabled} />
                        <StyledProfileEditButton onClick={handleButtonClick}>
                            <StyledPencilIconGray />
                            {disabled ? 'Edit Profile' : 'Save Profile'}
                        </StyledProfileEditButton>
                    </StyledProfileContainer>
                    <StyledTextContainer>
                        <StyledTextTitle>{textTitle}</StyledTextTitle>
                        <StyledTextContent>{textContent}</StyledTextContent>
                        <StyledTextTagContainer>
                            {textTag.map((elem: string, idx: number) => (
                                <StyledTextTag key={idx}>{elem}</StyledTextTag>
                            ))}
                        </StyledTextTagContainer>
                    </StyledTextContainer>
                </StyledContentContainer>
            </StyledReadMeContainer>
        </>
    );
}

const StyledReadMeContainer = styled(StyledContainer)`
    flex-direction: column;
    padding: 0 2%;
`;

const StyledTitleContainer = styled.div`
    display: flex;
    width: 100%;
    height: 10%;
    justify-content: space-around;
`;

const StyledTitle = styled.button`
    width: auto;
    height: auto;
    font-family: 'Heebo';
    font-weight: 700;
    font-size: 2.5rem;
    color: var(--oboDeepGreen);
`;

const StyledIconContainer = styled.button`
    width: auto;
    height: auto;
`;

const StyledPencilIcon = styled(HiOutlinePencil)`
    font-size: 32px;
    color: var(--oboLightGreen);
`;

const StyledContentContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
`;

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

const StyledTextContainer = styled.div`
    width: 70%;
    height: 50%;
    display: flex;
    flex-direction: column;
    font-family: 'NotoSansKR';
    margin-left: 2%;
`;

const StyledTextTitle = styled.div`
    width: 100%;
    height: 20%;
    font-size: 36px;
    font-weight: 600;
`;
const StyledTextContent = styled.div`
    width: 100%;
    height: 50%;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 2%;
`;

const StyledTextTagContainer = styled.div`
    width: auto;
    height: auto;
    display: flex;
    font-size: 22px;
    font-weight: 600;
    color: var(--oboLightGreen);
`;

const StyledTextTag = styled.div`
    margin-right: 10%;
`;
