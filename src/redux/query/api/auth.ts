import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
    OtpVerifyRequest,
    ResetRequest,
    RestoreRequest,
    SignInRequest,
    SignUpRequest,
} from '~/types';

import { ApiEndpoints } from '../constants/api';

const { BASE_URL, AUTH, LOGIN, REGISTER, RESTORE, VERIFY_OTP, RESET } = ApiEndpoints;

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL + AUTH,
        prepareHeaders: (headers) => {
            headers.set('accept', 'application/json');
            return headers;
        },
    }),
    // unknown - в тестах ответ произвольный не соответсвует response schema
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
    }),
});

export const {
    useSignUpMutation,
    useSignInMutation,
    useRestoreMutation,
    useVerifyOtpMutation,
    useResetMutation,
} = authApi;
