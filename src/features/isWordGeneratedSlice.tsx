import { createSlice } from '@reduxjs/toolkit';

interface initialStateType{
    value: boolean,
}

const initialState: initialStateType = {
    value: false,
}

export const isWordGeneratedSlice = createSlice({
    name: 'isWordGenerated',
    initialState,
    reducers: {
        changeIsWordGeneratedToTrue: (state) => { state.value = true },
    }
});

export const { changeIsWordGeneratedToTrue } = isWordGeneratedSlice.actions;
export default isWordGeneratedSlice.reducer;