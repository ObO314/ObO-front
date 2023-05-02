import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import styled from 'styled-components';
import { LottieAnimationProps } from '@/types/lottieType';
import { useModalStore } from '@/store/store';
import { isShowProps } from '@/types/variableType';

export default function LottieAnimation({ animationData }: LottieAnimationProps) {
    const { isShow } = useModalStore();

    return <StyledPlayer isShow={isShow} src={animationData} />;
}

export const StyledRocketContainer = styled.div`
    height: 60%;
    width: 60%;
    pointer-events: none;
    transform: rotate(30deg);
`;
const StyledPlayer = styled(Player).attrs(({ isShow }: isShowProps) => ({
    loop: true,
    autoplay: true,
    // autoplay: isShow ? 'false' : 'true',
}))<isShowProps>`
    opacity: ${props => (props.isShow ? '0.3' : '1')};
`;
