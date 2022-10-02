import { createSlice } from '@reduxjs/toolkit';

interface BoardState{
    value: string[][],
}

// interface ActionObject{
//     index: number,
//     letter: string,
// }

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
        changeLetter: (state, action) => { 
            state.value[action.payload.rowIndex][action.payload.letterIndex] = action.payload.letter
        },
    }
})

export const { changeLetter } = boardSlice.actions;

export default boardSlice.reducer;