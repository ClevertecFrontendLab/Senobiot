import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
    OtpVerifyRequest,
    RestoreRequest,
    SignInRequest,
    SignInResponse,
    SignUpRequest,
    SignUpResponse,
} from '~/types';

import { ApiEndpoints } from '../constants/api';

const { BASE_URL, AUTH, LOGIN, REGISTER, RESTORE, VERIFY_OTP } = ApiEndpoints;

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL + AUTH,
        prepareHeaders: (headers) => {
            headers.set('accept', 'application/json');
            return headers;
        },
    }),

    endpoints: (builder) => ({
        signUp: builder.mutation<SignUpResponse, SignUpRequest>({
            query: (data) => ({
                url: REGISTER,
                method: 'POST',
                body: data,
            }),
        }),
        signIn: builder.mutation<{ data: SignInResponse }, SignInRequest>({
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
    }),
});

export const { useSignUpMutation, useSignInMutation, useRestoreMutation, useVerifyOtpMutation } =
    authApi;
