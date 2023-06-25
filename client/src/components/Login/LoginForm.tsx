import React from 'react';
import { StyledSignUpFormWrapper, StyledInputBox, StyledInputField, StyledSignUpSubmitButton } from '@/components/SignUp/SignUpForm';
import { useValidation } from '@/hooks/useValidation';
import { SubmitHandler } from 'react-hook-form';
import { FormInputs } from '@/types/signUpFormType';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setCookie } from '@/utils/controlCookie';
import { customAxios } from '@/apis/customAxios';

export default function LoginForm() {
    const { register, errors, reset, handleSubmit, pathname } = useValidation();
    const navigate = useNavigate();

    const OnSubmitFunction: SubmitHandler<FormInputs> = async data => {
        try {
            const instance = customAxios();
            const { confirmPassword, ...userData } = data;
            if (pathname === '/login') {
                const response = await instance.post(`/user/login/local`, JSON.stringify(userData));
                setCookie({ cookieName: 'login', cookieValue: response.data, exp: 5 });

                navigate('/');
            } else if (pathname === '/signup') {
                await instance.post(`/user/signup`, JSON.stringify(userData));
                navigate('/login');
            }
        } catch (error) {
            console.log(error);
            alert('오류가 발생했습니다. 관리자에게 문의하세요.');
            const failedPath = pathname === '/login' ? '/login' : '/signup';
            navigate(failedPath);
            reset();
        }
    };

    return (
        <StyledSignUpFormWrapper onSubmit={handleSubmit(OnSubmitFunction)}>
            <StyledInputBox>
                <StyledInputField
                    {...register('email', {
                        required: '이메일을 입력해주세요.',
                        maxLength: { value: 50, message: '50글자 이내로 입력해주세요.' },
                        pattern: {
                            value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                            message: '이메일 형식에 맞지 않습니다.',
                        },
                    })}
                    type="email"
                    placeholder="Email"
                    hasError={Boolean(errors.email)}
                />
                {errors.email?.message}
            </StyledInputBox>
            <StyledInputBox>
                <StyledInputField
                    {...register('password', {
                        required: '비밀번호를 입력해주세요.',
                        maxLength: { value: 20, message: '20글자 이내로 입력해주세요.' },
                    })}
                    type="password"
                    placeholder="Password"
                    hasError={Boolean(errors.password)}
                />
                {errors.password?.message}
            </StyledInputBox>
            <StyledSignUpSubmitButton>{pathname === '/login' ? 'Log in' : 'Create Account'}</StyledSignUpSubmitButton>
        </StyledSignUpFormWrapper>
    );
}
