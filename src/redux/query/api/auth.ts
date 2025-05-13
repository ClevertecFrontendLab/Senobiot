import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { SignInRequest, SignInResponse, SignUpRequest, SignUpResponse } from '~/types';

import { ApiEndpoints } from '../constants/api';

const { BASE_URL, AUTH, LOGIN, REGISTER } = ApiEndpoints;

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
    }),
});

export const { useSignUpMutation, useSignInMutation } = authApi;
