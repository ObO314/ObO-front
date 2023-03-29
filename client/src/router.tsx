import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TestPage from './pages/TestPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TestPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
