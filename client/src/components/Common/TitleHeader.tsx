import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { TitleTextProps } from '@/types/variableType';
import { useValidation } from '@/hooks/useValidation';

export default function TitleHeader({ titleText }: TitleTextProps) {
    const { pathname } = useValidation();
    const navigate = useNavigate();
    return <StyledTitle onClick={() => navigate(pathname)}>{titleText}</StyledTitle>;
}

export const StyledTitle = styled.button`
    width: auto;
    height: auto;
    font-family: 'Heebo';
    font-weight: 700;
    font-size: 2.5rem;
    color: var(--oboDeepGreen);
`;
