import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { HiOutlinePencil } from 'react-icons/hi2';
import { TitleTextProps } from '@/types/variableType';
import { useValidation } from '@/hooks/useValidation';

export default function TitleHeader({ titleText }: TitleTextProps) {
    const { pathname } = useValidation();
    const navigate = useNavigate();
    return (
        <StyledTitleContainer>
            <div></div>
            <StyledTitle onClick={() => navigate(pathname)}>{titleText}</StyledTitle>
            <StyledIconContainer>
                <StyledPencilIcon />
            </StyledIconContainer>
        </StyledTitleContainer>
    );
}

export const StyledTitleContainer = styled.div`
    display: flex;
    width: 100%;
    height: 10%;
    justify-content: space-around;
`;

export const StyledTitle = styled.button`
    width: auto;
    height: auto;
    font-family: 'Heebo';
    font-weight: 700;
    font-size: 2.5rem;
    color: var(--oboDeepGreen);
`;

export const StyledIconContainer = styled.button`
    width: auto;
    height: auto;
`;

export const StyledPencilIcon = styled(HiOutlinePencil)`
    font-size: 32px;
    color: var(--oboLightGreen);
`;
