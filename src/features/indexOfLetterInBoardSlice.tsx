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
        changeIndex: (state, { payload }) => {state.value = payload}
    }
})

export const { changeIndex } = indexOfLetterInBoardSlice.actions;

export default indexOfLetterInBoardSlice.reducer;