import styled from 'styled-components';
import React from 'react';

export default function TestHeader() {
    return <StyledTestHeader>header</StyledTestHeader>;
}

const StyledTestHeader = styled.div`
    height: 88px;
    color: var(--oboBlack);
    background-color: var(--oboGreen);
`;
