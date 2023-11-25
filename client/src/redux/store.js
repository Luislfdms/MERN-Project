import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import thunk from 'redux-thunk'

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: "root",
    version: 1,
    storage,
};
const rootReducer = combineReducers({user: userReducer});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware({
    //         serializableCheck: {
    //             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //         },
    //     }),
    middleware: [thunk]
});

export const persistor = persistStore(store);


// const rootReducer = combineReducers({user: userReducer});

// export const store = configureStore({
//     reducer: rootReducer,
// });