import { createListenerMiddleware } from '@reduxjs/toolkit';

import { ALERTS, POPUPS } from '~/constants';
import { Modals } from '~/types';

import { authApi } from '..';
import {
    setAppError,
    setAppLoader,
    setAppModal,
    setAppPopup,
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
    matcher: authApi.endpoints.reset.matchPending,
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
        listenerApi.dispatch(setAppModal(Modals.AUTH_RESET_PASSWORD));
    },
});

listener.startListening({
    matcher: authApi.endpoints.verifyOtp.matchFulfilled,
    effect: (_, listenerApi) => {
        listenerApi.dispatch(setAppLoader(false));
        listenerApi.dispatch(setAppModal(Modals.AUTH_RESET_PASSWORD));
    },
});

listener.startListening({
    matcher: authApi.endpoints.reset.matchFulfilled,
    effect: (_, listenerApi) => {
        listenerApi.dispatch(setAppLoader(false));
        listenerApi.dispatch(setAppModal(null));
        listenerApi.dispatch(setAppPopup(POPUPS.resetPasswordSuccess));
    },
});

listener.startListening({
    matcher: authApi.endpoints.signUp.matchRejected,
    effect: (action, listenerApi) => {
        const {
            status,
            data: { message },
        } = action.payload || {};
        const statusCode: number = Number(status);
        console.log(action.payload);
        if (statusCode === 400 && message) {
            listenerApi.dispatch(setAppError({ title: message }));
            listenerApi.dispatch(setAppLoader(false));
            return;
        }

        const error = ALERTS.registration[statusCode] || {};
        listenerApi.dispatch(setAppError(error));
        listenerApi.dispatch(setAppLoader(false));
    },
});

listener.startListening({
    matcher: authApi.endpoints.signIn.matchRejected,
    effect: (action, listenerApi) => {
        const { status } = action.payload || {};
        const statusCode: number = Number(status);

        if (statusCode === 500) {
            listenerApi.dispatch(setAppLoader(false));
            listenerApi.dispatch(setAppModal(Modals.AUTH_LOGIN_FAILED));
            return;
        }

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

listener.startListening({
    matcher: authApi.endpoints.reset.matchRejected,
    effect: (action, listenerApi) => {
        const { status } = action.payload || {};

        if (Number(status) === 500) {
            const error = {
                title: ALERTS.reset[500].title,
                body: ALERTS.reset[500].body,
            };
            listenerApi.dispatch(setAppError(error));
        }
        listenerApi.dispatch(setAppLoader(false));
    },
});
