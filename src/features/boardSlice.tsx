import { createSlice } from '@reduxjs/toolkit';

interface BoardState{
    value: {key: string, color: string}[][],
}

// interface ActionObject{
//     index: number,
//     letter: string,
// }

const initialState: BoardState = {
    value: [
        [{key: '',color: '',}, {key: '',color: '',}, {key: '',color: '',}, {key: '',color: '',}, {key: '',color: '',}],
        [{key: '',color: '',}, {key: '',color: '',}, {key: '',color: '',}, {key: '',color: '',}, {key: '',color: '',}],
        [{key: '',color: '',}, {key: '',color: '',}, {key: '',color: '',}, {key: '',color: '',}, {key: '',color: '',}],
        [{key: '',color: '',}, {key: '',color: '',}, {key: '',color: '',}, {key: '',color: '',}, {key: '',color: '',}],
        [{key: '',color: '',}, {key: '',color: '',}, {key: '',color: '',}, {key: '',color: '',}, {key: '',color: '',}],
        [{key: '',color: '',}, {key: '',color: '',}, {key: '',color: '',}, {key: '',color: '',}, {key: '',color: '',}],
    ],
}

export const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        changeLetter: (state, action) => { 
            state.value[action.payload.rowIndex][action.payload.letterIndex].key = action.payload.letterData.key;
            state.value[action.payload.rowIndex][action.payload.letterIndex].color = action.payload.letterData.color;
        },
        refreshBoard: (state) => {
            state.value = [
                [{key: '',color: '',}, {key: '',color: '',}, {key: '',color: '',}, {key: '',color: '',}, {key: '',color: '',}],
                [{key: '',color: '',}, {key: '',color: '',}, {key: '',color: '',}, {key: '',color: '',}, {key: '',color: '',}],
                [{key: '',color: '',}, {key: '',color: '',}, {key: '',color: '',}, {key: '',color: '',}, {key: '',color: '',}],
                [{key: '',color: '',}, {key: '',color: '',}, {key: '',color: '',}, {key: '',color: '',}, {key: '',color: '',}],
                [{key: '',color: '',}, {key: '',color: '',}, {key: '',color: '',}, {key: '',color: '',}, {key: '',color: '',}],
                [{key: '',color: '',}, {key: '',color: '',}, {key: '',color: '',}, {key: '',color: '',}, {key: '',color: '',}],
            ]
        }
    }
})

export const { changeLetter, refreshBoard } = boardSlice.actions;

export default boardSlice.reducer;