import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AlertError, Modals } from '~/types';

import { ApplicationState } from './configure-store';
export type AppState = typeof initialState;

const initialState = {
    isLoading: false,
    error: null as AlertError | null,
    modal: null as Modals | null,
    popup: null as string | null,
    userEmail: '',
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
        setAppModal(state, { payload: modal }: PayloadAction<Modals | null>) {
            state.modal = modal;
        },
        setAppPopup(state, { payload: popup }: PayloadAction<string | null>) {
            state.popup = popup;
        },
        setLogged(state, { payload: isLogged }: PayloadAction<boolean>) {
            state.isLogged = isLogged;
        },
        setUserEmail(state, { payload: userEmail }: PayloadAction<string>) {
            state.userEmail = userEmail;
        },
    },
});
export const userLoadingSelector = (state: ApplicationState) => state.app.isLoading;
export const userErrorSelector = (state: ApplicationState) => state.app.error;

export const { setAppError, setAppLoader, setLogged, setAppModal, setUserEmail, setAppPopup } =
    appSlice.actions;
export default appSlice.reducer;
