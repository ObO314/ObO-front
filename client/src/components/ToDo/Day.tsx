import React from 'react';
import DateSelector from '@/components/ToDo/DateSelector';
import TodoTimetable from '@/components/ToDo/TodoTimetable';

export default function Day() {
    return (
        <>
            <DateSelector />
            <TodoTimetable />
        </>
    );
}
