import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { StyledContainer } from '@/pages/SignUp';
import TitleHeader from '@components/Common/TitleHeader';
import { IntroductionText } from '@/components/ReadMe/IntroductionText';
import { UserProfile } from '@/components/ReadMe/UserProfile';
import { HiOutlinePencil } from 'react-icons/hi2';
import { BiCheck } from 'react-icons/bi';
import { customAxios } from '@/apis/customAxios';

export default function ReadMe() {
    const titleText = 'Read ME';
    const [disabled, setDisabled] = useState(true);
    const editContent = () => {
        setDisabled(!disabled);
        if (!disabled) {
            postReadMeData();
        }
    };
    const titleRef = useRef<HTMLTextAreaElement>(null);
    const contentRef = useRef<HTMLTextAreaElement>(null);
    const [defaultData, setDefaultData] = useState({ title: '', content: '' });
    const textTag = ['#나를', '#표현하는', '#해시태그'];
    const instance = customAxios();
    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await instance.get(`/readme/read`);
                setDefaultData(data);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);

    const postReadMeData = async () => {
        if (titleRef.current && contentRef.current) {
            const title = titleRef.current.value;
            const content = contentRef.current.value;
            const userData = {
                title,
                content,
            };

            const { data } = await instance.post(`/readme/update`, JSON.stringify(userData));
            console.log(data);
        }
    };
    return (
        <>
            <StyledWrapperContainer>
                <StyledTitleContainer>
                    <TitleHeader titleText={titleText} />

                    <StyledIconContainer onClick={editContent}>
                        {disabled ? (
                            <StyledIconButton>
                                <StyledPencilIcon />
                            </StyledIconButton>
                        ) : (
                            <StyledButton>
                                <StyledCircle>
                                    <StyledCheckIcon />
                                </StyledCircle>
                                <p>Save</p>
                            </StyledButton>
                        )}
                    </StyledIconContainer>
                </StyledTitleContainer>

                <StyledContentContainer>
                    <UserProfile />
                    <StyledTextContainer>
                        <StyledTextTitle ref={titleRef} defaultValue={defaultData.title} disabled={disabled} />
                        <StyledTextContent ref={contentRef} defaultValue={defaultData.content} disabled={disabled} />
                        <StyledTextTagContainer>
                            {textTag.map((elem: string, idx: number) => (
                                <StyledTextTag defaultValue={elem} disabled key={idx} />
                            ))}
                        </StyledTextTagContainer>
                    </StyledTextContainer>
                </StyledContentContainer>
            </StyledWrapperContainer>
        </>
    );
}

export const StyledTitleContainer = styled.div`
    display: flex;
    width: 100%;
    height: 10%;
    justify-content: space-around;
    padding-left: 30%;
`;

export const StyledWrapperContainer = styled(StyledContainer)`
    flex-direction: column;
    padding: 0 2%;
`;

const StyledContentContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
`;

export const StyledIconContainer = styled.div`
    width: 100px;
    display: flex;
    align-items: center;
`;

export const StyledIconButton = styled.button`
    width: 100px;
    height: auto;
`;

export const StyledPencilIcon = styled(HiOutlinePencil)`
    font-size: 32px;
    color: var(--oboLightGreen);
`;

export const StyledButton = styled.button`
    width: 85px;
    height: 35px;
    font-weight: 500;
    border-radius: 5px;
    color: var(--white);
    background-color: var(--button-green);
    display: flex;
    padding: 0 10px;
    justify-content: space-around;
    align-items: center;
    &:hover {
        box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.2);
    }
    transition: all 0.3s ease-in-out;
`;

export const StyledCircle = styled.div`
    width: 16px;
    height: 16px;
    border: none;
    border-radius: 50%;
    background-color: var(--button-light-green);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledCheckIcon = styled(BiCheck)`
    color: var(--white);
`;

const StyledTextContainer = styled.div`
    width: 70%;
    height: 50%;
    display: flex;
    flex-direction: column;
    font-family: 'NotoSansKR';
    margin-left: 2%;
`;

const StyledTextTitle = styled.textarea`
    width: 100%;
    height: 20%;
    font-size: 36px;
    font-weight: 600;
`;
const StyledTextContent = styled.textarea`
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
    justify-content: space-around;
`;

const StyledTextTag = styled.textarea`
    margin-right: 10%;
    font-size: 22px;
    font-weight: 600;
    color: var(--oboLightGreen);
`;
