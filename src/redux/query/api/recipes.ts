import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_QUERY_PARAMS } from '~/constants';
import { QueryParams, RecipeProps, RecipesResponse } from '~/types';

import { ApiEndpoints } from '../constants/api';
import {
    buildRecieptsQuery,
    transformCategoriesResponse,
    transformRecieptResponse,
    transformRecieptsResponse,
} from '../utils';

const { BASE_URL } = ApiEndpoints;

export const recipesApi = createApi({
    reducerPath: 'recipesApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        allCategories: builder.query({
            query: () => '/category',
            transformResponse: transformCategoriesResponse,
        }),
        categoryById: builder.query({
            query: (id: string) => `/category/${id}`,
        }),
        categoryReciepts: builder.query({
            query: (params: QueryParams) => buildRecieptsQuery(params),
            transformResponse: (response, _, arg) =>
                transformRecieptsResponse(response as RecipesResponse | RecipeProps, arg.idKeys),
        }),
        reciept: builder.query<RecipeProps, string>({
            query: (id) => `/recipe/${id}`,
            transformResponse: transformRecieptResponse,
        }),
        recipeByCategory: builder.query({
            query: ({
                id = '',
                limit = API_QUERY_PARAMS.defaultRequestAmount,
                page = API_QUERY_PARAMS.defaultPage,
            }) => `/recipe/category/${id}?page=${page}&limit=${limit}`,
            transformResponse: (response, _, arg) =>
                transformRecieptsResponse(response as RecipesResponse | RecipeProps, arg.idKeys),
        }),
    }),
});

export const {
    useAllCategoriesQuery,
    useCategoryByIdQuery,
    useCategoryRecieptsQuery,
    useRecieptQuery,
    useRecipeByCategoryQuery,
} = recipesApi;
