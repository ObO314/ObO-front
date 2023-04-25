import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from '@pages/SignUp';
import Callback from '@/pages/Callback';
import Login from '@/pages/Login';
import ReadMe from '@/pages/ReadMe';
import MainPage from '@/pages/MainPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/readme/:id" element={<ReadMe />} />
                <Route path="/callback" element={<Callback />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
