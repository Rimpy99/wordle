import { createSlice } from '@reduxjs/toolkit';

interface WordBankState{
    value: string[],
}

const initialState: WordBankState = {
    value: [''],
}

const wordBankSlice = createSlice({
    name: 'wordBank',
    initialState,
    reducers: {
        changeWordBank: (state, action) => { state.value = action.payload }
    }
})

export const { changeWordBank } = wordBankSlice.actions;

export default wordBankSlice.reducer;