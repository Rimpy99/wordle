import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BoardState{
    value: string[][],
}

const initialState: BoardState = {
    value: [
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
    ],
}

export const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        changeLetter: (state, { payload }) => { 
            state.value[payload.index] = payload.letter
        },
    }
})

export const { changeLetter } = boardSlice.actions;

export default boardSlice.reducer;