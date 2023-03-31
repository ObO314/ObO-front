import React from 'react';
import Lottie from 'react-lottie';
import animationData from '@assets/lotties/rocket.json';
import styled from 'styled-components';

export default function RocketAnimation() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <StyledLottieContainer>
            <Lottie options={defaultOptions} />
        </StyledLottieContainer>
    );
}

const StyledLottieContainer = styled.div`
    height: 60%;
    width: 60%;
    pointer-events: none;
    transform: rotate(30deg);
`;
