import React from 'react';
import { GlobalStyle } from '@styles/GlobalStyle';
import Router from './router';

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Router />
        </div>
    );
}

export default App;
