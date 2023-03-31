import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TestPage from '@pages/TestPage';
import SignUp from '@pages/SignUp';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TestPage />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
