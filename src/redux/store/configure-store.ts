import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { authApi, recipesApi } from '..';
import { listener } from '../middlewares/listener';
import { authReducer, keysReducer, navigationReducer } from '../reducers';
import appReducer, { appSlice } from './app-slice';

const isProduction = false;
const rootReducer = combineReducers({
    [appSlice.name]: appReducer,
    [recipesApi.reducerPath]: recipesApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    keys: keysReducer,
    navigation: navigationReducer,
    auth: authReducer,
});

export type ApplicationState = ReturnType<typeof rootReducer>;
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .prepend(listener.middleware)
            .concat(recipesApi.middleware)
            .concat(authApi.middleware),
    devTools: !isProduction,
});
