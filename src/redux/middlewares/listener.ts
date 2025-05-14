import { createListenerMiddleware } from '@reduxjs/toolkit';

import { ALERTS } from '~/constants';
import { Modals } from '~/types';

import { authApi } from '..';
import {
    setAppError,
    setAppLoader,
    setAppModal,
    setLogged,
    setUserEmail,
} from '../store/app-slice';

export const listener = createListenerMiddleware();

listener.startListening({
    matcher: authApi.endpoints.signUp.matchPending,
    effect: (_, listenerApi) => {
        listenerApi.dispatch(setAppLoader(true));
        listenerApi.dispatch(setAppError(null));
    },
});

listener.startListening({
    matcher: authApi.endpoints.signIn.matchPending,
    effect: (_, listenerApi) => {
        listenerApi.dispatch(setAppLoader(true));
        listenerApi.dispatch(setAppError(null));
    },
});

listener.startListening({
    matcher: authApi.endpoints.restore.matchPending,
    effect: (_, listenerApi) => {
        listenerApi.dispatch(setAppLoader(true));
        listenerApi.dispatch(setAppError(null));
    },
});

listener.startListening({
    matcher: authApi.endpoints.verifyOtp.matchPending,
    effect: (_, listenerApi) => {
        listenerApi.dispatch(setAppLoader(true));
        listenerApi.dispatch(setAppError(null));
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
    matcher: authApi.endpoints.restore.matchFulfilled,
    effect: (action, listenerApi) => {
        const { email } = action.meta.arg.originalArgs;

        listenerApi.dispatch(setAppLoader(false));
        listenerApi.dispatch(setUserEmail(email));
        listenerApi.dispatch(setAppModal(Modals.AUTH_ENTER_PIN));
    },
});

listener.startListening({
    matcher: authApi.endpoints.verifyOtp.matchFulfilled,
    effect: (_, listenerApi) => {
        listenerApi.dispatch(setAppLoader(false));
        listenerApi.dispatch(setAppModal(Modals.AUTH_RESTORE_FINISH));
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

listener.startListening({
    matcher: authApi.endpoints.restore.matchRejected,
    effect: (action, listenerApi) => {
        const { status } = action.payload || {};
        const statusCode: number = Number(status) || 500;
        const error = {
            title: ALERTS.restore[statusCode]?.title || '',
            body: ALERTS.restore[statusCode]?.body || '',
        };
        listenerApi.dispatch(setAppError(error));
        listenerApi.dispatch(setAppLoader(false));
    },
});

listener.startListening({
    matcher: authApi.endpoints.verifyOtp.matchRejected,
    effect: (action, listenerApi) => {
        const { status } = action.payload || {};

        if (Number(status) === 500) {
            const error = {
                title: ALERTS.verify[500].title,
                body: ALERTS.verify[500].body,
            };
            listenerApi.dispatch(setAppError(error));
        }
        listenerApi.dispatch(setAppLoader(false));
    },
});
