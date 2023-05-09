import React from 'react';
import styled from 'styled-components';
import { StyledContainer } from '@/pages/SignUp';
import TitleHeader from '@components/Common/TitleHeader';
import IntroductionText from '@/components/ReadMe/IntroductionText';
import UserProfile from '@/components/ReadMe/UserProfile';
import PencilIcon from '@/components/Common/PencilIcon';

export default function ReadMe() {
    const titleText = 'Read ME';

    return (
        <>
            <StyledWrapperContainer>
                <StyledTitleContainer>
                    <div></div>
                    <TitleHeader titleText={titleText} />
                    <PencilIcon />
                </StyledTitleContainer>

                <StyledContentContainer>
                    <UserProfile />
                    <IntroductionText />
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
