import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WordState{
    value: string[],
}

const initialState: WordState = {
    value: ['', '', '', '', ''],
}

export const wordSlice = createSlice({
    name: 'word',
    initialState,
    reducers: {
        changeWord: (state, action: PayloadAction<string[]>) => { state.value = action.payload }, 
    }
});

export const { changeWord } = wordSlice.actions;

export default wordSlice.reducer;