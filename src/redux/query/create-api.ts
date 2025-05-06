import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_QUERY_PARAMS } from '~/constants';
import { RecipeProps } from '~/types';

import { ApiEndpoints } from './constants/api';
import {
    transformCategoriesResponse,
    transformRecieptResponse,
    transformRecieptsResponse,
} from './utils';

const { BASE_URL } = ApiEndpoints;

export const apiSlice = createApi({
    reducerPath: 'categoriesApi',
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
            query: ({
                limit = API_QUERY_PARAMS.defaultRequestAmount,
                page = API_QUERY_PARAMS.defaultPage,
                allergens = '',
                searchString = '',
                meat = '',
                garnish = '',
                subcategoriesIds = '',
                isJuiciest = false,
                isLatest = false,
            }) =>
                `/recipe?page=${page}&limit=${limit}` +
                (allergens ? `&allergens=${allergens.trim()}` : '') +
                (searchString ? `&searchString=${searchString.trim()}` : '') +
                (meat ? `&meat=${meat.trim()}` : '') +
                (garnish ? `&garnish=${garnish.trim()}` : '') +
                (subcategoriesIds ? `&subcategoriesIds=${subcategoriesIds.trim()}` : '') +
                (isJuiciest ? `&sortBy=likes&sortOrder=desc` : '') +
                (isLatest ? `&sortBy=createdAt&sortOrder=desc` : ''),
            transformResponse: transformRecieptsResponse,
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
            transformResponse: transformRecieptsResponse,
        }),
    }),
});

export const {
    useAllCategoriesQuery,
    useCategoryByIdQuery,
    useCategoryRecieptsQuery,
    useRecieptQuery,
    useRecipeByCategoryQuery,
} = apiSlice;
