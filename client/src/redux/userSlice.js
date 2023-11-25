import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    start: false,
    user: null,
    currentUser: null,
    page: 1
};

export const userSlice = createSlice ({
    name: "user",
    initialState,
    reducers: {
        start: (state) => {
            state.start = true;
        },
        user: (state, action) => {
            state.user = action.payload;
        },
        currentUser: (state, action) => {
            state.currentUser = action.payload;
        },
        page: (state, action) => {
            state.page = action.payload;
        },
        logout: (state) => {
            return initialState;
        }
    },
});

export const {start, user, currentUser, page, logout} = userSlice.actions;

export default userSlice.reducer;