import React, { useState } from 'react';
import styled from 'styled-components';
import { StyledContainer } from '@/pages/SignUp';
import TitleHeader from '@components/Common/TitleHeader';
import { IntroductionText } from '@/components/ReadMe/IntroductionText';
import { UserProfile } from '@/components/ReadMe/UserProfile';
import { HiOutlinePencil } from 'react-icons/hi2';
import { Button } from '@/components/Common/Button';

export default function ReadMe() {
    const titleText = 'Read ME';
    const [disabled, setDisabled] = useState(true);
    const editContent = () => {
        setDisabled(!disabled);
    };
    return (
        <>
            <StyledWrapperContainer>
                <StyledTitleContainer>
                    <TitleHeader titleText={titleText} />
                    <StyledIconButton onClick={editContent}>{disabled ? <StyledPencilIcon /> : <Button />}</StyledIconButton>
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

export const StyledIconButton = styled.button`
    width: 100px;
    height: auto;
`;

export const StyledPencilIcon = styled(HiOutlinePencil)`
    font-size: 32px;
    color: var(--oboLightGreen);
`;
