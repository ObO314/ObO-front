import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { menuValueProps, subMenuProps } from '@/types/variableType';

const MY = 'My';
const GROUP = 'Group';
const BLOG = 'Blog';
const COMMUNITY = 'Community';

export default function SubMenu(subMenu: subMenuProps) {
    const mySubMenuArray = ['Read ME', 'ToDo'];
    const BlogSubMenuArray = ['Home', 'My Blog'];
    const communitySubMenuArray = ['Member Recruit', 'Anonymous', 'Question & Answer'];
    const [subMenuArray, setSubMenuArray] = useState<string[]>([]);

    useEffect(() => {
        switch (subMenu.subMenu) {
            case MY:
                setSubMenuArray(mySubMenuArray);
                break;
            case GROUP:
                setSubMenuArray(mySubMenuArray);
                break;
            case BLOG:
                setSubMenuArray(BlogSubMenuArray);
                break;
            case COMMUNITY:
                setSubMenuArray(communitySubMenuArray);
                break;
            default:
                setSubMenuArray([]);
                break;
        }
    }, [subMenu]);

    return (
        <>
            {subMenuArray.map((elem, index) => (
                <StyledSubMenuContainer key={`${elem}-${index}`} menuValue={subMenu.subMenu}>
                    {elem}
                </StyledSubMenuContainer>
            ))}
        </>
    );
}

export const StyledSubMenuContainer = styled.div<menuValueProps>`
    width: 68%;
    height: auto;
    margin: ${props =>
        props.menuValue === MY ? '1% 0 1% 33%' : props.menuValue === GROUP ? '1% 0 1% 47%' : props.menuValue === BLOG ? '1% 0 1% 63%' : props.menuValue === COMMUNITY ? '1% 0 1% 76%' : '0'};
    font-size: 24px;
    color: var(--oboBlack);
`;
