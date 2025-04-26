import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { filterMiddleware } from '~/middlewares/filter';
// import { searchMiddleware } from '~/middlewares/search';
import { apiSlice } from '~/query/create-api';
import { keysReducer } from '~/reducers/keys';
import { recieptsReducer } from '~/reducers/reciepts';

import appReducer, { appSlice } from './app-slice';

const isProduction = false;
const rootReducer = combineReducers({
    [appSlice.name]: appReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    reciepts: recieptsReducer,
    keys: keysReducer,
});

export type ApplicationState = ReturnType<typeof rootReducer>;
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware).concat(filterMiddleware),
    // .concat(searchMiddleware),
    devTools: !isProduction,
});
