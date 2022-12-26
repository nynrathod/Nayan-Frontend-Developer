import rootReducer from "../reducers";
import { configureStore } from '@reduxjs/toolkit'

const initalState = {
    modalOpen: ""
};

// middleware
// const middleware = [thunk];

// creating store
export const store = configureStore({
    reducer: rootReducer,
});

// assigning store to next wrapper
// const makeStore = () => store;
