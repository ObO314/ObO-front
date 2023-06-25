import React, { useState, useEffect, useRef } from 'react';
import Router from './router';
import styled from 'styled-components';
import { GlobalStyle } from '@styles/GlobalStyle';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useInitialScrollStore, useScrollStore } from '@/store/store';

function App() {
    const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID || 'defaultClientId';
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const [prevScrollPosition, setPrevScrollPosition] = useState<number>(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);
    const { setScrollIndex } = useScrollStore();
    const { initialScrollState, setInitialScrollState } = useInitialScrollStore();
    const handleOnScroll = () => {
        if (scrollRef.current) {
            const scrollTop = scrollRef.current.scrollTop;
            setScrollPosition(scrollTop);
            const scrollHeight = scrollRef.current.scrollHeight;
            const clientHeight = scrollRef.current.clientHeight;
            const maxScrollTop = scrollHeight - clientHeight;
            const maxSectionIndex = Math.floor(scrollHeight / clientHeight) - 1;
            const minScrollHeight = 100;
            const delta = scrollPosition - prevScrollPosition;
            /* 스크롤 내릴때 동작 */
            if (delta > 0) {
                setInitialScrollState(false);
                if (scrollPosition < minScrollHeight) {
                    setCurrentIndex(0);
                } else if (scrollPosition >= minScrollHeight && scrollPosition < clientHeight) {
                    setCurrentIndex(1);
                } else if (scrollPosition >= clientHeight + minScrollHeight && scrollPosition < clientHeight * 2) {
                    setCurrentIndex(2);
                } else if (scrollPosition >= clientHeight * 2 + minScrollHeight && scrollPosition <= maxScrollTop) {
                    setCurrentIndex(maxSectionIndex);
                }
            }
            setPrevScrollPosition(scrollPosition);

            // /* 스크롤 올릴때 동작 */
            // if (delta < 0) {
            //     if (currentIndex > 0) {
            //         setCurrentIndex(currentIndex => currentIndex - 1);
            //     } else {
            //         setCurrentIndex(0);
            //     }
            // }
        }
    };
    useEffect(() => {
        if (currentIndex >= 0 && currentIndex <= 3) {
            setScrollIndex(currentIndex);
        }
    }, [currentIndex]);
    return (
        <div className="App" ref={scrollRef} onScroll={handleOnScroll}>
            <GlobalStyle />
            <GoogleOAuthProvider clientId={clientId}>
                <StyledMaxWidthWrapper>
                    <Router />
                </StyledMaxWidthWrapper>
            </GoogleOAuthProvider>
        </div>
    );
}

const StyledMaxWidthWrapper = styled.div`
    max-width: 1200px;
    height: inherit;
    margin: 0 auto;
    padding: 0 20px;
`;

export default App;
