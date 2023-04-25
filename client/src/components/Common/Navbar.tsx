import React from 'react';
import styled from 'styled-components';
import { FiLogIn } from 'react-icons/fi';

const oboLogoPath = '/images/obo.png';
const oboLogo = process.env.PUBLIC_URL + oboLogoPath;

export default function TestHeader() {
    const menuNameArray = ['My', 'Group', 'Blog', 'Community'];
    return (
        <StyledTestHeader>
            <StyledLogo />
            <StyledMenuContainer>
                <StyledMenuList>
                    {menuNameArray.map((elem, index) => {
                        return <StyledMenuItem key={`${elem}-${index}`}>{elem}</StyledMenuItem>;
                    })}
                </StyledMenuList>
                <StyledLoginIcon />
            </StyledMenuContainer>
        </StyledTestHeader>
    );
}

const StyledTestHeader = styled.div`
    width: 100%;
    height: 88px;
    display: flex;
    justify-content: space-between;
    color: var(--oboBlack);
    background-color: var(--oboGreen);
`;

const StyledLogo = styled.img.attrs({
    src: `${oboLogo}`,
})`
    width: 10%;
    height: 80%;
    object-fit: cover;
    cursor: pointer;
`;

const StyledMenuContainer = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 2% 2% 0;
`;

const StyledMenuList = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`;

const StyledMenuItem = styled.li`
    margin-left: 12%;
    font-size: 28px;
    cursor: pointer;
`;

const StyledLoginIcon = styled(FiLogIn)`
    font-size: 40px;
    color: var(--white);
    cursor: pointer;
`;
