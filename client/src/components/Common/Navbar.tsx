import React, { useState } from 'react';
import styled from 'styled-components';
import { FiLogIn } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import SubMenu from '@/components/ReadMe/SubMenu';

const oboLogoPath = '/images/obo.png';
const oboLogo = process.env.PUBLIC_URL + oboLogoPath;

export default function TestHeader() {
    const [subMenu, setSubMenu] = useState('');
    const menuNameArray = ['My', 'Group', 'Blog', 'Community'];
    const navigate = useNavigate();
    return (
        <>
            <StyledHeader>
                <StyledLogo onClick={() => navigate('/')} />
                <StyledMenuContainer>
                    <StyledMenuList>
                        {menuNameArray.map((elem, index) => {
                            return (
                                <StyledMenuItem key={`${elem}-${index}`} onMouseEnter={() => setSubMenu(elem)}>
                                    {elem}
                                </StyledMenuItem>
                            );
                        })}
                        <StyledDetailedMenuContainer>{subMenu && <SubMenu subMenu={subMenu} />}</StyledDetailedMenuContainer>
                    </StyledMenuList>
                    <StyledLoginIcon />
                </StyledMenuContainer>
            </StyledHeader>
        </>
    );
}

const StyledHeader = styled.div`
    width: 100%;
    height: 88px;
    display: flex;
    justify-content: space-between;
    color: var(--oboBlack);
    background-color: var(--oboGreen);
    position: relative;
`;

const StyledLogo = styled.img.attrs({
    src: `${oboLogo}`,
})`
    width: 10%;
    height: 80%;
    object-fit: cover;
    cursor: pointer;
`;

const StyledDetailedMenuContainer = styled.div`
    width: 100%;
    height: 180%;
    background-color: var(--hover-green);
    position: absolute;
    top: 100%;
    left: 0;
    display: none;
    &:hover {
        display: block;
    }
`;

const StyledMenuContainer = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-right: 2%;
`;

const StyledMenuList = styled.ul`
    width: 100%;
    height: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledMenuItem = styled.li`
    width: 100%;
    height: inherit;
    text-align: center;
    margin-right: 10%;
    font-size: 28px;
    padding: 3% 2% 2% 0;
    cursor: pointer;
    &:hover {
        & ~ ${StyledDetailedMenuContainer} {
            display: block;
        }
        color: var(--white);
    }
`;

const StyledLoginIcon = styled(FiLogIn)`
    font-size: 40px;
    color: var(--white);
    cursor: pointer;
`;
