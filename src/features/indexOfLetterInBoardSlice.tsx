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
        incrementIndex: (state) => {state.value++},
        decrementIndex: (state) => {state.value--}
    }
})

export const { incrementIndex, decrementIndex } = indexOfLetterInBoardSlice.actions;

export default indexOfLetterInBoardSlice.reducer;