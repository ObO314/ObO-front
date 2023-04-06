import React from 'react';
import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormInputs {
    name: string;
    nickName: string;
    email: string;
    password: string;
}

interface InputProps {
    hasError?: boolean;
}

const onSubmit: SubmitHandler<FormInputs> = data => console.log(data);
export default function SignUpForm() {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<FormInputs>();

    return (
        <StyledSignUpFormWrapper onSubmit={handleSubmit(onSubmit)}>
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
                />{' '}
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
                />{' '}
                {errors.password?.message}
            </StyledInputBox>
            <StyledSignUpSubmitButton>Create Account</StyledSignUpSubmitButton>
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
    margin-top: 2rem;
    font-size: 1.5rem;
    color: #ffffff;
    background-color: var(--oboCoral);
    border: 1px solid var(--gray-color);
    border-radius: 10px;
`;
