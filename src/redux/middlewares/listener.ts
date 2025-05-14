import { createListenerMiddleware } from '@reduxjs/toolkit';

import { ALERTS } from '~/constants';
import { Modals } from '~/types';

import { authApi } from '..';
import { setAppError, setAppLoader, setAppModal, setLogged } from '../store/app-slice';

export const listener = createListenerMiddleware();

listener.startListening({
    matcher: authApi.endpoints.signUp.matchPending,
    effect: (_, listenerApi) => {
        listenerApi.dispatch(setAppLoader(true));
    },
});

listener.startListening({
    matcher: authApi.endpoints.signIn.matchPending,
    effect: (_, listenerApi) => {
        listenerApi.dispatch(setAppLoader(true));
    },
});

listener.startListening({
    matcher: authApi.endpoints.signUp.matchFulfilled,
    effect: (_, listenerApi) => {
        listenerApi.dispatch(setAppModal(Modals.AUTH_VERIFICATION_SEND));
        listenerApi.dispatch(setAppLoader(false));
    },
});

listener.startListening({
    matcher: authApi.endpoints.signIn.matchFulfilled,
    effect: (_, listenerApi) => {
        listenerApi.dispatch(setAppLoader(false));
        listenerApi.dispatch(setLogged(true));
    },
});

listener.startListening({
    matcher: authApi.endpoints.signUp.matchRejected,
    effect: (action, listenerApi) => {
        const { status } = action.payload || {};
        const statusCode: number = Number(status) || 500;
        const error = {
            title: ALERTS.login[statusCode]?.title || '',
            body: ALERTS.registration[statusCode]?.body || '',
        };
        listenerApi.dispatch(setAppError(error));
        listenerApi.dispatch(setAppLoader(false));
    },
});

listener.startListening({
    matcher: authApi.endpoints.signIn.matchRejected,
    effect: (action, listenerApi) => {
        const { status } = action.payload || {};
        const statusCode: number = Number(status) || 500;
        const error = {
            title: ALERTS.login[statusCode]?.title || '',
            body: ALERTS.login[statusCode]?.body || '',
        };
        listenerApi.dispatch(setAppError(error));
        listenerApi.dispatch(setAppLoader(false));
    },
});
