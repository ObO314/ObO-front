import React from 'react';
import styled from 'styled-components';
import { StyledWrapperContainer } from '@/pages/ReadMe';
import TitleHeader from '@/components/Common/TitleHeader';
import Category from '@/components/ToDo/Category';
import RenderCategoryContent from '@/components/ToDo/RenderCategoryContent';
import { useCategoryStore } from '@/store/store';

export default function Todo() {
    const titleText = 'To-Do';
    const { categoryName } = useCategoryStore();

    return (
        <StyledWrapperContainer>
            <StyledTitleContainer>
                <TitleHeader titleText={titleText} />
                <Category />
            </StyledTitleContainer>
            {RenderCategoryContent(categoryName)}
        </StyledWrapperContainer>
    );
}
export const StyledTitleContainer = styled.div`
    width: 100%;
    height: 13%;
    display: flex;
    flex-direction: column;
`;
