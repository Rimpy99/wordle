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
        ['A', 'C', 'D', 'E', 'F'],
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
            state.value[0][action.payload.index] = action.payload.letter
        },
    }
})

export const { changeLetter } = boardSlice.actions;

export default boardSlice.reducer;