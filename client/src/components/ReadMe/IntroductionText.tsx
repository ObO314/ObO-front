import React from 'react';
import styled from 'styled-components';

export default function IntroductionText() {
    const textTitle = '자기를 한줄로 표현하는 글입니다.';
    const textContent =
        '자기소개입니다.자기소개입니다.자기소개입니다.자기소개입니다.자기소개입니다.자기소개입니다.자기소개입니다.자기소개입니다.자기소개입니다.자기소개입니다.자기소개입니다.자기소개입니다.자기소개입니다.자기소개입니다.자기소개입니다.자기소개입니다.자기소개입니다.자기소개입니다.자기소개입니다.자기소개입니다.자기소개입니다.';
    const textTag = ['#나를', '#표현하는', '#해시태그'];
    return (
        <StyledTextContainer>
            <StyledTextTitle>{textTitle}</StyledTextTitle>
            <StyledTextContent>{textContent}</StyledTextContent>
            <StyledTextTagContainer>
                {textTag.map((elem: string, idx: number) => (
                    <StyledTextTag key={idx}>{elem}</StyledTextTag>
                ))}
            </StyledTextTagContainer>
        </StyledTextContainer>
    );
}

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
