import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
    OtpVerifyRequest,
    ResetRequest,
    RestoreRequest,
    SignInRequest,
    SignUpRequest,
} from '~/types';

import { ApiEndpoints } from '../constants/api';

const { BASE_URL, AUTH, LOGIN, REGISTER, RESTORE, VERIFY_OTP, RESET, CHECK_AUTH, REFRESH_AUTH } =
    ApiEndpoints;

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL + AUTH,
        prepareHeaders: (headers, { getState }) => {
            headers.set('accept', 'application/json');
            const token = getState().auth.accessToken;
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
        credentials: 'include',
    }),
    // unknown - в тестах response левый мимо response schema
    endpoints: (builder) => ({
        signUp: builder.mutation<unknown, SignUpRequest>({
            query: (data) => ({
                url: REGISTER,
                method: 'POST',
                body: data,
            }),
        }),
        signIn: builder.mutation<unknown, SignInRequest>({
            query: (data) => ({
                url: LOGIN,
                method: 'POST',
                body: data,
            }),
        }),
        restore: builder.mutation<unknown, RestoreRequest>({
            query: (data) => ({
                url: RESTORE,
                method: 'POST',
                body: data,
            }),
        }),
        verifyOtp: builder.mutation<unknown, OtpVerifyRequest>({
            query: (data) => ({
                url: VERIFY_OTP,
                method: 'POST',
                body: data,
            }),
        }),
        reset: builder.mutation<unknown, ResetRequest>({
            query: (data) => ({
                url: RESET,
                method: 'POST',
                body: data,
            }),
        }),
        checkAuth: builder.query<{ message: string }, void>({
            query: () => ({
                url: CHECK_AUTH,
                method: 'GET',
            }),
        }),
        refreshAuth: builder.mutation<{ accessToken: string }, void>({
            query: () => ({
                url: REFRESH_AUTH,
                method: 'GET',
            }),
        }),
    }),
});

export const {
    useSignUpMutation,
    useSignInMutation,
    useRestoreMutation,
    useVerifyOtpMutation,
    useResetMutation,
    useCheckAuthQuery,
    useRefreshAuthMutation,
} = authApi;
