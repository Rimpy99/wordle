import { configureStore } from "@reduxjs/toolkit";
import wordReducer from "../features/wordSlice";
import boardReducer from "../features/boardSlice";
import indexOfLetterInBoardReducer from "../features/indexOfLetterInBoardSlice";
import indexOfRowInBoardReducer from "../features/indexOfRowInBoardSlice";

const store = configureStore({
    reducer: {
        word: wordReducer,
        board: boardReducer,
        letterIndex: indexOfLetterInBoardReducer,
        rowIndex: indexOfRowInBoardReducer,
    },
})

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch