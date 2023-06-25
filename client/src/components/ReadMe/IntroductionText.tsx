import { customAxios } from '@/apis/customAxios';
import { getCookie } from '@/utils/controlCookie';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

type Props = {
    disabled: boolean;
};
export const IntroductionText = (props: Props) => {
    const titleRef = useRef(null);
    const contentRef = useRef(null);
    const [defaultData, setDefaultData] = useState({ title: '', content: '' });
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
            const userData = titleRef.current;
            console.log(userData);
            // const token: string = JSON.parse(getCookie('login')).accessToken;
            // const { data } = await instance.post(`/readme/update`, JSON.stringify(userData));
        }
    };

    const textTag = ['#나를', '#표현하는', '#해시태그'];
    return (
        <StyledTextContainer>
            <StyledTextTitle ref={titleRef} defaultValue={defaultData.title} disabled={props.disabled} />
            <StyledTextContent ref={contentRef} defaultValue={defaultData.content} disabled={props.disabled} />
            <StyledTextTagContainer>
                {textTag.map((elem: string, idx: number) => (
                    <StyledTextTag defaultValue={elem} disabled key={idx} />
                ))}
            </StyledTextTagContainer>
        </StyledTextContainer>
    );
};

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
