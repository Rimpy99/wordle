import { createSlice} from '@reduxjs/toolkit';

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
        changeWord: (state, { payload }) => { state.value = payload }, 
    }
});

export const { changeWord } = wordSlice.actions;

export default wordSlice.reducer;