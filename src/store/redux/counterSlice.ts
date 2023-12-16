import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};

const counterSlice = createSlice({
    name: 'COUNTER',
    initialState,
    reducers: {
        increment: (state: CounterState, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
        decrement: (state: CounterState, action: PayloadAction<number>) => {
            state.value -= action.payload;
        },
        multiply: (state: CounterState, action: PayloadAction<number>) => {
            state.value *= action.payload;
        },
        divide: (state: CounterState, action: PayloadAction<number>) => {
            state.value /= action.payload;
        },
    },
});

export const { increment, decrement, multiply, divide } = counterSlice.actions;
export default counterSlice.reducer;
