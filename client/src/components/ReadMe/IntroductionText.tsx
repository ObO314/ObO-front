import { getCookie } from '@/utils/controlCookie';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

type Props = {
    disabled: boolean;
};
export const IntroductionText = (props: Props) => {
    const token = JSON.parse(getCookie('login')).accessToken;
    const [defaultData, setDefaultData] = useState({ title: '', content: '' });
    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/readme/read`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setDefaultData(data);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);

    const textTag = ['#나를', '#표현하는', '#해시태그'];
    return (
        <StyledTextContainer>
            <StyledTextTitle defaultValue={defaultData.title} disabled={props.disabled} />
            <StyledTextContent defaultValue={defaultData.content} disabled={props.disabled} />
            <StyledTextTagContainer>
                {textTag.map((elem: string, idx: number) => (
                    <StyledTextTag defaultValue={elem} disabled={props.disabled} key={idx} />
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
