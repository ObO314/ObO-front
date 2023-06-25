import React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import HeeboLight from '@assets/fonts/Heebo-Light.ttf';
import HeeboRegular from '@assets/fonts/Heebo-Regular.ttf';
import HeeboMedium from '@assets/fonts/Heebo-Medium.ttf';
import HeeboSemiBold from '@assets/fonts/Heebo-SemiBold.ttf';
import HeeboBold from '@assets/fonts/Heebo-Bold.ttf';
import HeeboExtraBold from '@assets/fonts/Heebo-ExtraBold.ttf';
import HeeboBlack from '@assets/fonts/Heebo-Black.ttf';

import NotoSansKRLight from '@assets/fonts/NotoSansKR-Light.otf';
import NotoSansKRRegular from '@assets/fonts/NotoSansKR-Regular.otf';
import NotoSansKRMedium from '@assets/fonts/NotoSansKR-Medium.otf';
import NotoSansKRBold from '@assets/fonts/NotoSansKR-Bold.otf';
import NotoSansKRBlack from '@assets/fonts/NotoSansKR-Black.otf';

import NovaRoundRegular from '@assets/fonts/NovaRound-Regular.ttf';

export const GlobalStyle = createGlobalStyle`
    ${reset}

    @font-face {
        font-family: "Heebo";
        src: local("Heebo"), url(${HeeboLight}) format('ttf'); 
        font-weight: 300;
    }

    @font-face {
        font-family: "Heebo";
        src: local("Heebo"), url(${HeeboRegular}) format('ttf'); 
        font-weight: 400;
    }

    @font-face {
        font-family: "Heebo";
        src: local("Heebo"), url(${HeeboMedium}) format('ttf'); 
        font-weight: 500;
    }
    @font-face {
        font-family: "Heebo";
        src: local("Heebo"), url(${HeeboSemiBold}) format('ttf'); 
        font-weight: 600;
    }

    @font-face {
        font-family: "Heebo";
        src: local("Heebo"), url(${HeeboBold}) format('ttf'); 
        font-weight: 700;
    }

    @font-face {
        font-family: "Heebo";
        src: local("Heebo"), url(${HeeboExtraBold}) format('ttf'); 
        font-weight: 800;
    }

    @font-face {
        font-family: "Heebo";
        src: local("Heebo"), url(${HeeboBlack}) format('ttf'); 
        font-weight: 900;
    }

    @font-face {
        font-family: "NotoSansKR";
        src: local("NotoSansKR"), url(${NotoSansKRLight}) format('otf'); 
        font-weight: 300;
    }

    @font-face {
        font-family: "NotoSansKR";
        src: local("NotoSansKR"), url(${NotoSansKRRegular}) format('otf'); 
        font-weight: 400;
    }

    @font-face {
        font-family: "NotoSansKR";
        src: local("NotoSansKR"), url(${NotoSansKRMedium}) format('otf'); 
        font-weight: 500;
    }
        @font-face {
        font-family: "NotoSansKR";
        src: local("NotoSansKR"), url(${NotoSansKRBold}) format('otf'); 
        font-weight: 700;
    }
    @font-face {
        font-family: "NotoSansKR";
        src: local("NotoSansKR"), url(${NotoSansKRBlack}) format('otf'); 
        font-weight: 900;
    }

    @font-face {
        font-family: "NovaRound";
        src: local("NovaRound"), url(${NovaRoundRegular}) format('ttf'); 
        font-weight: 400;
    }
    :root {
        font-family: "Heebo";
        background-color: #ffffff;
        color: black;
        font-size: 18px;
        --white : #ffffff;
        --oboGreen : #009874;
        --oboLightGreen : #00B59A;
        --oboDeepGreen : #005541;
        --oboCoral : #FF8577;
        --oboLightCoral : #FFB6AD;
        --oboDeepCoral : #E4796D;
        --oboBlack : #1D2422;
        --gray-color: #c7c7c7;
        --input-bg-color: #f5f5f5;
        --input-text-color: #606060;
        --input-height: 4.5rem;
        --input-error-red:#ec3257;
        --input-focus-color: #00c1a2;
        --input-shadow-gray: #D2D2D2;
        --edit-gray: #F1F5F8;
        --edit-hover-gray: #DAE1E7;
        --edit-font-gray: #3D4852;
        --hover-green: #E9F0EE;
        --button-gray: #EEEEEE;
        --warning-yellow: #FFB412;
        --triangle-gray: #D9D9D9;
        --todo-skyblue: #E3EFF2;
        --todo-deep-skyblue: #C3DBDA;
        --todo-yellow-green: #F3F1DE;
        --todo-deep-yellow-green: #DBD5BD;
        --todo-salmon: #FFD0CC;
        --todo-deep-salmon: #E8AEBA;
        --button-light-green: #85E0A3;
        --button-green: #54A08E;
        /* --vh: 100%; */
    }
    *{
         box-sizing: border-box;
    }
    .App {        
        /* max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px; */
        height: calc(var(--vh, 1vh) * 100);
        overflow-y: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    .App::-webkit-scrollbar {
        display: none;
    }
    a {
        text-decoration: none;
        color: inherit;
    }

    input, button {
        background-color: transparent;
        border: none;
        outline: none;
        font-family: "NotoSansKR";
        font-weight: 300;
        font-style: 18px;
        color: inherit;
        font-size: 18px;
    }
    button {
        cursor: pointer;
    }
    ol, ul, li {
        list-style: none;
    }
    textarea {
    resize: none; /* 크기 조정 제거 */
    border: none; /* 테두리 제거 */
    padding: 0; /* 안쪽 여백 제거 */
    background-color: transparent; /* 배경 제거 */
    font-family: inherit; /* 폰트 설정 */
    font-size: inherit; /* 폰트 크기 설정 */
    outline: none;    
  }
`;
