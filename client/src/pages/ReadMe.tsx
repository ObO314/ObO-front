import React from 'react';
import styled from 'styled-components';
import { StyledContainer } from '@/pages/SignUp';
import Navbar from '@/components/Common/Navbar';
import TitleHeader from '@components/Common/TitleHeader';
import UserProfile from '@/components/ReadMe/UserProfile';
import IntroductionText from '@/components/ReadMe/IntroductionText';

export default function ReadMe() {
    const titleText = 'Read ME';

    return (
        <>
            <Navbar />
            <StyledReadMeContainer>
                <TitleHeader titleText={titleText} />
                <StyledContentContainer>
                    <UserProfile />
                    <IntroductionText />
                </StyledContentContainer>
            </StyledReadMeContainer>
        </>
    );
}

const StyledReadMeContainer = styled(StyledContainer)`
    flex-direction: column;
    padding: 0 2%;
`;

const StyledContentContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
`;
