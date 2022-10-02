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
        incrementLetterIndex: (state) => {++state.value},
        decrementLetterIndex: (state) => {--state.value},
        setToZeroLetterIndex: (state) => {state.value = 0},
    }
})

export const { incrementLetterIndex, decrementLetterIndex, setToZeroLetterIndex } = indexOfLetterInBoardSlice.actions;

export default indexOfLetterInBoardSlice.reducer;