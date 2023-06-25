import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from '@pages/SignUp';
import Callback from '@/pages/Callback';
import Login from '@/pages/Login';
import ReadMe from '@/pages/ReadMe';
import MainPage from '@/pages/MainPage';
import Todo from '@/pages/Todo';
import Navbar from '@/components/Common/Navbar';
import { useModalStore } from '@/store/store';
import ConfirmModal from '@/components/Common/ConfirmModal';

const Router = () => {
    const { isShow } = useModalStore();
    return (
        <BrowserRouter>
            <Navbar />
            {isShow ? <ConfirmModal /> : null}
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/my/readme/:id" element={<ReadMe />} />
                <Route path="/my/todo/:id" element={<Todo />} />
                <Route path="/callback" element={<Callback />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
