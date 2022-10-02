import { createSlice } from '@reduxjs/toolkit';

interface BoardState{
    value: number,
}

const initialState: BoardState = {
    value: 0,
}

export const indexOfRowInBoardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        incrementRowIndex: (state) => {state.value++},
        decrementRowIndex: (state) => {state.value--}
    }
})

export const { incrementRowIndex, decrementRowIndex } = indexOfRowInBoardSlice.actions;

export default indexOfRowInBoardSlice.reducer;