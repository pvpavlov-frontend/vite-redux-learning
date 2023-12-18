import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FeedbackState } from "./types"

const initialState: FeedbackState = {
    likes: 0,
    dislikes: 0,
};

const feedbackSlice = createSlice({
    name: 'FEEDBACK',
    initialState: initialState,
    reducers: {
        incrementLikes: (state: FeedbackState) => {
            state.likes += 1;
        },
        incrementDislikes: (state: FeedbackState) => {
            state.dislikes += 1;
        },
        resetResults: (state: FeedbackState) => initialState,
    },
});

export const actions = feedbackSlice.actions;
export const feedbackReducer = feedbackSlice.reducer;
