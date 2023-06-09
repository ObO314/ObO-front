import React from 'react';
import styled from 'styled-components';
import { BiCheck } from 'react-icons/bi';

export const Button = () => {
    return (
        <StyledButton>
            <StyledCircle>
                <StyledCheckIcon />
            </StyledCircle>
            <p>Save</p>
        </StyledButton>
    );
};

const StyledButton = styled.button`
    width: 85px;
    height: 35px;
    font-weight: 500;
    border-radius: 5px;
    color: var(--white);
    background-color: var(--button-green);
    display: flex;
    padding: 0 10px;
    justify-content: space-around;
    align-items: center;
    &:hover {
        box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.2);
    }
    transition: all 0.3s ease-in-out;
`;

const StyledCircle = styled.div`
    width: 16px;
    height: 16px;
    border: none;
    border-radius: 50%;
    background-color: var(--button-light-green);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledCheckIcon = styled(BiCheck)`
    color: var(--white);
`;
