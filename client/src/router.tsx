import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TestPage from '@pages/TestPage';
import SignUp from '@pages/SignUp';
import Callback from '@/pages/Callback';
import Login from '@/pages/Login';
import ReadMe from '@/pages/ReadMe';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TestPage />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/readme/:id" element={<ReadMe />} />
                <Route path="/callback" element={<Callback />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
