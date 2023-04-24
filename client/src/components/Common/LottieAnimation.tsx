import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import styled from 'styled-components';
import { LottieAnimationProps } from '@/types/lottieType';

export default function LottieAnimation({ animationData }: LottieAnimationProps) {
    return <Player autoplay loop src={animationData} />;
}

export const StyledLottieContainer = styled.div`
    height: 100%;
    width: 100%;
    pointer-events: none;
`;
export const StyledRocketContainer = styled.div`
    height: 60%;
    width: 60%;
    pointer-events: none;
    transform: rotate(30deg);
`;
