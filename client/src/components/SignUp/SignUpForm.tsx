import React, { useRef } from 'react';
import styled from 'styled-components';
import { InputProps, FormInputs } from '@/types/signUpFormType';
import { useValidation } from '@/hooks/useValidation';
import { SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SignUpForm() {
    const { register, watch, errors, reset, handleSubmit, pathname } = useValidation();
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

    const password = useRef({});
    password.current = watch('password', '');
    /* confirmPassword 필드에 대한 유효성 검사 함수 */
    const validateConfirmPassword = (value: string) => {
        if (value !== password.current) {
            return '비밀번호가 일치하지 않습니다.';
        }
        return true;
    };

    return (
        <StyledSignUpFormWrapper onSubmit={handleSubmit(OnSubmitFunction)}>
            <StyledInputContainer>
                <StyledNameInputBox>
                    <StyledNameInputField
                        {...register('name', { required: '이름을 입력해주세요.', maxLength: { value: 10, message: '10글자 이내로 입력해주세요.' } })}
                        type="text"
                        placeholder="Name"
                        hasError={Boolean(errors.name)}
                    />
                    {errors.name?.message}
                </StyledNameInputBox>
                <StyledNameInputBoxRight>
                    <StyledNameInputField
                        {...register('nickName', {
                            required: '닉네임을 입력해주세요',
                            minLength: { value: 2, message: '2글자 이상 입력해주세요.' },
                            maxLength: { value: 10, message: '10글자 이내로 입력해주세요.' },
                        })}
                        type="text"
                        placeholder="NickName"
                        hasError={Boolean(errors.nickName)}
                    />
                    {errors.nickName?.message}
                </StyledNameInputBoxRight>
            </StyledInputContainer>
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
            <StyledInputBox>
                <StyledInputField
                    {...register('confirmPassword', {
                        required: '비밀번호를 다시 한번 입력해주세요.',
                        maxLength: { value: 20, message: '20글자 이내로 입력해주세요.' },
                        validate: validateConfirmPassword,
                    })}
                    type="password"
                    placeholder="confirm-Password"
                    hasError={Boolean(errors.confirmPassword)}
                />
                {errors.confirmPassword?.message}
            </StyledInputBox>
            <StyledSignUpSubmitButton>{pathname === '/login' ? 'Log in' : 'Create Account'}</StyledSignUpSubmitButton>
        </StyledSignUpFormWrapper>
    );
}

export const StyledSignUpFormWrapper = styled.form`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
`;
export const StyledInputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const StyledInputBox = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 14px;
    color: var(--input-error-red);
`;
export const StyledNameInputBox = styled(StyledInputBox)`
    flex: 1;
    margin-right: 1rem;
`;
export const StyledNameInputBoxRight = styled(StyledNameInputBox)`
    margin-right: 0;
`;
export const StyledInputField = styled.input<InputProps>`
    padding: 1rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    border: 1px solid ${props => (props.hasError ? 'var(--input-error-red)' : 'var(--gray-color)')};
    border-radius: 10px;
    color: var(--input-text-color);
    background-color: var(--input-bg-color);
    &:focus {
        border: 2px solid var(--input-focus-color);
    }
`;
export const StyledNameInputField = styled(StyledInputField)<InputProps>`
    margin-bottom: 0.5rem;
`;
export const StyledSignUpSubmitButton = styled.button`
    width: 100%;
    height: var(--input-height);
    font-weight: 400;
    margin-top: 1.5rem;
    font-size: 1.5rem;
    color: #ffffff;
    background-color: var(--oboCoral);
    border: 1px solid var(--gray-color);
    border-radius: 10px;
`;
