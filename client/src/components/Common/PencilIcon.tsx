import React from 'react';
import styled from 'styled-components';
import { HiOutlinePencil } from 'react-icons/hi2';

export default function PencilIcon() {
    return (
        <StyledIconContainer>
            <StyledPencilIcon />
        </StyledIconContainer>
    );
}

export const StyledIconContainer = styled.button`
    width: auto;
    height: auto;
`;

export const StyledPencilIcon = styled(HiOutlinePencil)`
    font-size: 32px;
    color: var(--oboLightGreen);
`;
