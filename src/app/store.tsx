import { configureStore } from "@reduxjs/toolkit";
import wordReducer from "../features/wordSlice";
import boardReducer from "../features/boardSlice";
import indexOfLetterInBoardReducer from "../features/indexOfLetterInBoardSlice";

const store = configureStore({
    reducer: {
        word: wordReducer,
        board: boardReducer,
        letterIndex: indexOfLetterInBoardReducer,
    },
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;