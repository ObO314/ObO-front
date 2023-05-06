import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LottieAnimation from '@/components/Common/LottieAnimation';
import todoAnimationData from '@assets/lotties/todo-list.json';
import chartAnimationData from '@assets/lotties/graph-chart.json';
import teamAnimationData from '@assets/lotties/team-image.json';
import manageAnimationData from '@assets/lotties/manage-image.json';
import { indexProps } from '@/types/variableType';

export default function MainPage() {
    const navigate = useNavigate();
    const animationDataArray = [todoAnimationData, chartAnimationData, teamAnimationData, manageAnimationData];
    const explainTextArray = [
        '할 일을\n한눈에 편하게 관리해보세요',
        '얼마나 할 일을 잘해냈는지\n차트로 확인할 수 있어요',
        '그룹을 만들어\n동료들과 함께\n일정을 관리해보세요',
        '이 모든 것, ObO로\n지금 시작해보세요',
    ];

    return (
        <StyledMainWrapper>
            {animationDataArray.map((item, index) => {
                return (
                    <StyledSectionContainer key={index} index={index}>
                        {index <= 1 ? null : index === 3 ? (
                            <StyledSubWrapper>
                                <StyledTextContainer>{explainTextArray[index]}</StyledTextContainer>
                                <StyledButton onClick={() => navigate('/login')}>일정 관리하기</StyledButton>
                            </StyledSubWrapper>
                        ) : (
                            <StyledTextContainer>{explainTextArray[index]}</StyledTextContainer>
                        )}

                        <StyledAnimationContainer>
                            <LottieAnimation animationData={item} />
                        </StyledAnimationContainer>
                        {index <= 1 ? <StyledTextContainer>{explainTextArray[index]}</StyledTextContainer> : null}
                    </StyledSectionContainer>
                );
            })}
        </StyledMainWrapper>
    );
}

const StyledMainWrapper = styled.div`
    width: 100%;
    height: 100%;
    font-family: 'NotoSansKR';
`;

const StyledSectionContainer = styled.div<indexProps>`
    width: inherit;
    height: ${props => (props.index === 0 ? 'calc(100% - 88px)' : '100%')};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledAnimationContainer = styled.div`
    width: 40%;
    height: 40%;
`;

const StyledTextContainer = styled.div`
    font-size: 48px;
    font-weight: 500;
    white-space: pre-wrap;
    line-height: normal;
`;

const StyledButton = styled.button`
    width: 55%;
    height: 6%;
    border-radius: 20px;
    margin-top: 10%;
    font-size: 40px;
    color: var(--white);
    background-color: var(--oboCoral);
    &:hover {
        background-color: var(--oboDeepCoral);
    }
`;

const StyledSubWrapper = styled.div`
    width: 50%;
    height: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
