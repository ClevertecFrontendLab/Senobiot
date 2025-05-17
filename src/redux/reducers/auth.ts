import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { authApi } from '..';

export type AuthReducerProps = {
    accessToken: string;
};

const initialState: AuthReducerProps = {
    accessToken: '',
};

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAccessToken(state, action: PayloadAction<string>) {
            state.accessToken = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(authApi.endpoints.signIn.matchFulfilled, (state, action) => {
            const baseMeta = action.meta.baseQueryMeta as { response: Response };
            const accessToken =
                baseMeta.response?.headers.get('Authentication-Access') ||
                baseMeta.response?.headers.get('authentication-access');

            if (accessToken) {
                sessionStorage.setItem('accessToken', accessToken);
                state.accessToken = accessToken;
            }
        });
    },
});

export const { setAccessToken } = auth.actions;
export const { reducer: authReducer } = auth;
