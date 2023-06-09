import { dateTohhmm, hourtomilliseconds } from '@/utils/transformDateFormat';
import React, { useState } from 'react';
import styled from 'styled-components';

type TodoType = {
    todoId: string;

    userId: string;

    name: string;

    startTime: Date;

    endTime: Date;

    completed: boolean;
};

export default function TodoTimetable() {
    const times = Array.from({ length: 24 }, (value, index) => index);
    const [isDragging, setIsDragging] = useState(false);
    const [todoOrder, setTodoOrder] = useState<number[]>(times);
    const todos: TodoType[] = [
        {
            todoId: 'a1234',
            userId: 'testuser',
            name: '빨래널기',
            startTime: new Date(),
            endTime: new Date(new Date().getTime() + hourtomilliseconds(3)),
            completed: false,
        },
        {
            todoId: 'b1436',
            userId: 'testuser',
            name: '영희네 반찬 가져다주기',
            startTime: new Date(new Date().getTime() + hourtomilliseconds(6)),
            endTime: new Date(new Date().getTime() + hourtomilliseconds(9)),
            completed: false,
        },
        {
            todoId: 't2677',
            userId: 'testuser',
            name: '엄마 심부름 하기 (카레 재료 구입)',
            startTime: new Date(new Date().getTime() + hourtomilliseconds(10)),
            endTime: new Date(new Date().getTime() + hourtomilliseconds(13)),
            completed: false,
        },
    ];
    const renderTimes = (time: number) => {
        if (time === 0) {
            return '오전 12';
        } else if (time === 6) {
            return '오전 6';
        } else if (time === 12) {
            return '오후 12';
        } else if (time > 24) {
            return time - 24;
        } else {
            return time > 12 ? time - 12 : time;
        }
    };

    const dragStart = (event: React.DragEvent<HTMLDivElement>, todoId: string) => {
        setIsDragging(true);
        event.dataTransfer?.setData('text/plain', todoId);
    };
    const dragEnd = () => {
        setIsDragging(false);
    };
    const dragOver = (event: React.DragEvent) => {
        event.preventDefault();
    };
    const handleDrop = (event: React.DragEvent, todoId: string) => {
        if (todoId !== event.dataTransfer.getData('text/plain')) {
            console.log('다른 개체에 드롭');
        }
    };

    return (
        <StyledWrapper>
            <StyledContainer>
                <StyledTimeLineContainer>
                    <StyledVerticalLine />
                    <StyledTimeLine>
                        {times.map(time => (
                            <StyledTime key={time}>{`${renderTimes(time)}시`}</StyledTime>
                        ))}
                    </StyledTimeLine>
                    <StyledTodoContainer onDragOver={dragOver}>
                        {todos.map(todo => (
                            <StyledTodo key={todo.todoId} draggable="true" onDragStart={event => dragStart(event, todo.todoId)} onDragEnd={dragEnd} onDrop={event => handleDrop(event, todo.todoId)}>
                                {todo.name}
                            </StyledTodo>
                        ))}
                    </StyledTodoContainer>
                </StyledTimeLineContainer>
            </StyledContainer>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
    width: 100%;
    height: 50%;
    margin-top: 2%;
    padding: 0 4%;
`;
const StyledContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    overflow-y: scroll;
    /* -ms-overflow-style: none;
    scrollbar-width: none;

    ::-webkit-scrollbar {
        display: none;
    } */
`;

const StyledTimeLineContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }
    font-family: 'NotoSansKR';
    border: 2px solid var(--triangle-gray);
    position: relative;
`;

const StyledVerticalLine = styled.div`
    width: 1px;
    height: 240%;
    background-color: var(--triangle-gray);
    position: absolute;
    left: 20%;
`;

const StyledTimeLine = styled.div`
    width: 20%;
    height: 240%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid var(--triangle-gray);
`;
const StyledTime = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid var(--triangle-gray);
`;

const StyledTodoContainer = styled.div`
    width: 80%;
    height: 240%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledTodo = styled.div`
    width: 100%;
    height: 4%;
    display: flex;
    align-items: center;
    padding-left: 10px;
    margin-bottom: 1px;
    background-color: var(--todo-skyblue);
    &:active {
        background-color: var(--todo-deep-skyblue);
    }
`;
