import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    start: false,
    user: null,
    currentUser: null,
    page: 1,
    postId: {},
    darkMode: false,
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
        postId: (state, action) => {
            state.postId = action.payload;
        },
        darkMode: (state) => {
            if (!state.darkMode) {
                state.darkMode = true;
            } else {
                state.darkMode = false;
            }
        },
        logout: (state) => {
            return initialState;
        }
    },
});

export const {start, user, currentUser, page, postId, darkMode, logout} = userSlice.actions;

export default userSlice.reducer;