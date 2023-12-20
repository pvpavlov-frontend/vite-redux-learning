// todoSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 } from "uuid"

interface Todo {
    id: string;
    text: string;
}

interface TodoState {
    todos: Todo[];
}

const initialState: TodoState = {
    todos: [],
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (
            state: TodoState,
            { payload }: PayloadAction<string>
        ) => {
            const newTodo: Todo = {
                id: v4(),
                text: payload,
            };
            state.todos = [...state.todos, { ...newTodo }]
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        clearTodos: (state) => initialState,
    },
});

export const { addTodo, removeTodo, clearTodos } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
