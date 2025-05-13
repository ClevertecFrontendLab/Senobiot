import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ALERTS } from '~/constants';
import { AlertError, SignUpResponse } from '~/types';

import { authApi } from '..';
import { ApplicationState } from './configure-store';
export type AppState = typeof initialState;

const initialState = {
    isLoading: false,
    error: null as AlertError | null,
    isLogged: false,
};
export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setAppError(state, { payload: error }: PayloadAction<AlertError | null>) {
            state.error = error;
        },
        setAppLoader(state, { payload: isLoading }: PayloadAction<boolean>) {
            state.isLoading = isLoading;
        },
        setLogged(state, { payload: isLogged }: PayloadAction<boolean>) {
            state.isLogged = isLogged;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(authApi.endpoints.signUp.matchPending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addMatcher(authApi.endpoints.signIn.matchPending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addMatcher(authApi.endpoints.signUp.matchFulfilled, (state) => {
            state.isLogged = true;
            state.error = null;
            state.isLoading = false;
        });
        builder.addMatcher(authApi.endpoints.signIn.matchFulfilled, (state) => {
            state.isLogged = true;
            state.error = null;
            state.isLoading = false;
        });
        builder.addMatcher(authApi.endpoints.signUp.matchRejected, (state, action) => {
            const { statusCode, message } = action.payload?.data as SignUpResponse;
            const error = {
                title: message,
                body: ALERTS.registration[statusCode]?.body || '',
            };
            state.error = error;
            state.isLogged = false;
            state.isLoading = false;
        });
        builder.addMatcher(authApi.endpoints.signIn.matchRejected, (state, action) => {
            console.log(action.payload);
            const { status } = action.payload || {};
            const statusCode: number = Number(status) || 500;

            const error = {
                title: ALERTS.login[statusCode]?.title || '',
                body: ALERTS.login[statusCode]?.body || '',
            };
            state.error = error;
            state.isLogged = false;
            state.isLoading = false;
        });

        // builder.addMatcher(authApi.endpoints.signOut.matchFulfilled, (state) => {
        //     state.isLogged = false;
        //     state.error = null;
        //     state.isLoading = false;
        // });
    },
});
export const userLoadingSelector = (state: ApplicationState) => state.app.isLoading;
export const userErrorSelector = (state: ApplicationState) => state.app.error;

export const { setAppError, setAppLoader } = appSlice.actions;
export default appSlice.reducer;
