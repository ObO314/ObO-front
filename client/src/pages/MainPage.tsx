import React from 'react';
import styled from 'styled-components';
import LottieAnimation from '@/components/Common/LottieAnimation';
import todoAnimationData from '@assets/lotties/todo-list.json';
import chartAnimationData from '@assets/lotties/graph-chart.json';
import teamAnimationData from '@assets/lotties/team-image.json';
import manageAnimationData from '@assets/lotties/manage-image.json';

export default function MainPage() {
    const animationDataLeftArray = [todoAnimationData, chartAnimationData];
    const animationDataRightArray = [teamAnimationData, manageAnimationData];
    const explainTextArray = ['할 일을 한눈에 편하게 관리해보세요', '얼마나 할 일을 잘해냈는지 차트로 확인할 수 있어요'];
    return (
        <StyledMainWrapper>
            {animationDataLeftArray.map((item, index) => {
                return (
                    <StyledSectionContainer key={`${item}-${index}`}>
                        <StyledLeftAnimationContainer>
                            <LottieAnimation animationData={item} />
                        </StyledLeftAnimationContainer>
                        <StyledTextContainer>{explainTextArray[index]}</StyledTextContainer>
                    </StyledSectionContainer>
                );
            })}
            {animationDataRightArray.map((item, index) => {
                return (
                    <StyledSectionContainer key={`${item}-${index}`}>
                        <StyledRightAnimationContainer>
                            <LottieAnimation animationData={item} />
                        </StyledRightAnimationContainer>
                    </StyledSectionContainer>
                );
            })}
        </StyledMainWrapper>
    );
}

const StyledMainWrapper = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid black;
`;

const StyledSectionContainer = styled.div`
    width: inherit;
    height: calc(100% - 88px);
    border: 1px solid blue;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledLeftAnimationContainer = styled.div`
    width: 40%;
    height: 40%;
`;

const StyledRightAnimationContainer = styled.div`
    width: 40%;
    height: 40%;
`;

const StyledTextContainer = styled.div`
    font-family: 'NotoSansKR';
    font-size: 40px;
    font-weight: 500;
`;
