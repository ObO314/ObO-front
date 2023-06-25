import React, { useState } from 'react';
import styled from 'styled-components';
import { StyledContainer } from '@/pages/SignUp';
import TitleHeader from '@components/Common/TitleHeader';
import { IntroductionText } from '@/components/ReadMe/IntroductionText';
import { UserProfile } from '@/components/ReadMe/UserProfile';
import { HiOutlinePencil } from 'react-icons/hi2';
import { BiCheck } from 'react-icons/bi';

export default function ReadMe() {
    const titleText = 'Read ME';
    const [disabled, setDisabled] = useState(true);
    const editContent = () => {
        setDisabled(!disabled);
        if (!disabled) {
            // postReadMeData();
        }
    };

    return (
        <>
            <StyledWrapperContainer>
                <StyledTitleContainer>
                    <TitleHeader titleText={titleText} />

                    <StyledIconContainer onClick={editContent}>
                        {disabled ? (
                            <StyledIconButton>
                                <StyledPencilIcon />
                            </StyledIconButton>
                        ) : (
                            <StyledButton onClick={editContent}>
                                <StyledCircle>
                                    <StyledCheckIcon />
                                </StyledCircle>
                                <p>Save</p>
                            </StyledButton>
                        )}
                    </StyledIconContainer>
                </StyledTitleContainer>

                <StyledContentContainer>
                    <UserProfile />
                    <IntroductionText disabled={disabled} />
                </StyledContentContainer>
            </StyledWrapperContainer>
        </>
    );
}

export const StyledTitleContainer = styled.div`
    display: flex;
    width: 100%;
    height: 10%;
    justify-content: space-around;
    padding-left: 30%;
`;

export const StyledWrapperContainer = styled(StyledContainer)`
    flex-direction: column;
    padding: 0 2%;
`;

const StyledContentContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
`;

export const StyledIconContainer = styled.div`
    width: 100px;
    display: flex;
    align-items: center;
`;

export const StyledIconButton = styled.button`
    width: 100px;
    height: auto;
`;

export const StyledPencilIcon = styled(HiOutlinePencil)`
    font-size: 32px;
    color: var(--oboLightGreen);
`;

export const StyledButton = styled.button`
    width: 85px;
    height: 35px;
    font-weight: 500;
    border-radius: 5px;
    color: var(--white);
    background-color: var(--button-green);
    display: flex;
    padding: 0 10px;
    justify-content: space-around;
    align-items: center;
    &:hover {
        box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.2);
    }
    transition: all 0.3s ease-in-out;
`;

export const StyledCircle = styled.div`
    width: 16px;
    height: 16px;
    border: none;
    border-radius: 50%;
    background-color: var(--button-light-green);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledCheckIcon = styled(BiCheck)`
    color: var(--white);
`;
