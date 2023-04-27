import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { menuValueProps, subMenuProps } from '@/types/variableType';
import { useNavigate } from 'react-router-dom';
import ConfirmModal from '@/components/Common/ConfirmModal';

const MY = 'My';
const GROUP = 'Group';
const BLOG = 'Blog';
const COMMUNITY = 'Community';

export default function SubMenu(subMenu: subMenuProps) {
    const mySubMenuArray = ['Read ME', 'ToDo'];
    const BlogSubMenuArray = ['Home', 'My Blog'];
    const communitySubMenuArray = ['Member Recruit', 'Anonymous', 'Question & Answer'];
    const [subMenuArray, setSubMenuArray] = useState<string[]>([]);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    /* 사용자 고유 id값 로그인 시 상태값 업데이트,
    전역상태 관리로 관리하여 가져와야함.(zustand) */
    const id = undefined;

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

    const handleOnClick = (elem: string) => {
        const subMenuName = elem.replaceAll(' ', '').toLocaleLowerCase();
        const MenuName = subMenu.subMenu.replaceAll(' ', '').toLocaleLowerCase();

        if (!id) {
            setShowModal(prev => !prev);
        } else {
            if (subMenu.subMenu === MY || subMenu.subMenu === GROUP) {
                navigate(`/${MenuName}/${subMenuName}/${id}`);
            } else if (subMenu.subMenu === BLOG) {
                switch (subMenuName) {
                    case 'home':
                        navigate(`/${MenuName}`);
                        break;
                    case 'myblog':
                        navigate(`/${MenuName}/${id}`);
                        break;
                    default:
                        break;
                }
            } else if (subMenu.subMenu === COMMUNITY) {
                switch (subMenuName) {
                    case 'memberrecruit':
                        navigate(`/board/member-recruit`);
                        break;
                    case 'question&answer':
                        navigate(`/board/qna`);
                        break;
                    default:
                        navigate(`/board/${subMenuName}`);
                        break;
                }
            } else {
                navigate(`/${subMenuName}/${id}`);
            }
        }
        return null;
    };

    return (
        <>
            {showModal ? <ConfirmModal /> : null}
            {subMenuArray.map((elem, index) => (
                <StyledSubMenuContainer key={`${elem}-${index}-${index}`} menuValue={subMenu.subMenu} onClick={() => handleOnClick(elem)}>
                    {elem}
                </StyledSubMenuContainer>
            ))}
        </>
    );
}

export const StyledSubMenuContainer = styled.button<menuValueProps>`
    width: 68%;
    height: auto;
    font-weight: 600;
    text-align: left;
    cursor: pointer;
    margin: ${props =>
        props.menuValue === MY ? '1% 0 0 31%' : props.menuValue === GROUP ? '1% 0 0 45%' : props.menuValue === BLOG ? '1% 0 0 60%' : props.menuValue === COMMUNITY ? '1% 0 0 74%' : '0'};
    font-size: 24px;
    color: var(--oboBlack);
`;
