import rootReducer from "../reducers";
import { configureStore } from '@reduxjs/toolkit'

const initalState = {
    modalOpen: ""
};

// Config store
export const store = configureStore({
    reducer: rootReducer,
});
