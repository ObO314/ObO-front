import React from 'react';
import Router from './router';
import { GlobalStyle } from '@styles/GlobalStyle';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
    const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID || 'defaultClientId';
    return (
        <div className="App">
            <GlobalStyle />
            <GoogleOAuthProvider clientId={clientId}>
                <Router />
            </GoogleOAuthProvider>
        </div>
    );
}

export default App;
