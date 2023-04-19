import React from 'react';
import { StyledSignUpFormWrapper, StyledInputBox, StyledInputField, StyledSignUpSubmitButton } from '@/components/SignUp/SignUpForm';
import { useValidation } from '@/hooks/useValidation';
import { SubmitHandler } from 'react-hook-form';
import { FormInputs } from '@/types/signUpFormType';
import { useNavigate } from 'react-router';
import axios from 'axios';

export default function LoginForm() {
    const { register, errors, reset, handleSubmit, pathname } = useValidation();
    const navigate = useNavigate();

    const OnSubmitFunction: SubmitHandler<FormInputs> = async data => {
        try {
            const { confirmPassword, ...userData } = data;
            if (pathname === '/login') {
                const response = await axios.get(`/api${pathname}`);
                console.log('전송된 데이터 : ', response.data, '상태 코드 : ', response.status);
            } else if (pathname === '/signup') {
                await axios.post(`/api/${pathname}`, userData, { headers: { 'Content-Type': 'application/json' } });
            }
            navigate('/');
        } catch (error) {
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
