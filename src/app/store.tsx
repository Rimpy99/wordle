import { configureStore } from "@reduxjs/toolkit";
import wordReducer from "../features/wordSlice";
import boardReducer from "../features/boardSlice";

const store = configureStore({
    reducer: {
        word: wordReducer,
        board: boardReducer,
    },
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;