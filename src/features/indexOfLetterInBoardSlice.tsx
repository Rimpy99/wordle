import { createSlice } from '@reduxjs/toolkit';

interface BoardState{
    value: number,
}

const initialState: BoardState = {
    value: 0,
}

export const indexOfLetterInBoardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        incrementLetterIndex: (state) => {state.value++},
        decrementLetterIndex: (state) => {state.value--}
    }
})

export const { incrementLetterIndex, decrementLetterIndex } = indexOfLetterInBoardSlice.actions;

export default indexOfLetterInBoardSlice.reducer;