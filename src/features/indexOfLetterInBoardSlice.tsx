import { createSlide } from '@reduxjs/toolkit';

interface BoardState{
    value: string[],
}

const initialState = {
    value: [ ],
}

export const indexOfLetterInBoardSlice = createSlide({
    name: 'board',
    initialState,
    reducers: {
        
    }
})

export const { changeWord } = indexOfLetterInBoardSlice.actions;

export default indexOfLetterInBoardSlice.reducer;