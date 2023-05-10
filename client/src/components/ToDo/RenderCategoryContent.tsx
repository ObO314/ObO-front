import React from 'react';
import Routine from '@/components/ToDo/Routine';
import Day from '@/components/ToDo/Day';
import MonthWeeks from '@/components/ToDo/MonthWeeks';

export default function RenderCategoryContent(categoryName: string) {
    switch (categoryName) {
        case 'Routine':
            return <Routine />;
        case 'Day':
            return <Day />;
        case 'Month/Weeks':
            return <MonthWeeks />;
        default:
            return null;
    }
}
