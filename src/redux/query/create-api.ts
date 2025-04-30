import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { AllCategories } from '~/types';

import { ApiEndpoints } from './constants/api';

const { BASE_URL, BASE_ICON_URL } = ApiEndpoints;

type AllCategoriesResponse = {
    category: string;
    description?: string;
    icon: string;
    subCategories?: SubCategory[];
    title: string;
    _id: string;
    rootCategoryId?: string;
}[];

type SubCategory = {
    category: string;
    title: string;
    _id: string;
    rootCategoryId?: string;
};

export const apiSlice = createApi({
    reducerPath: 'categoriesApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        allCategories: builder.query({
            query: () => '/category',
            transformResponse: (response: AllCategoriesResponse): AllCategories[] =>
                response
                    .map((item) => {
                        if (item.rootCategoryId) return null;
                        const categoryRoute = '/' + item.category;

                        return {
                            category: item.category,
                            description: item.description,
                            icon: BASE_ICON_URL + item.icon,
                            subCategories: item.subCategories?.map((subItem) => ({
                                ...subItem,
                                route: categoryRoute + '/' + subItem.category,
                            })),
                            title: item.title,
                            _id: item._id,
                            route: categoryRoute,
                        };
                    })
                    .filter((e) => e !== null),
        }),
    }),
});

export const { useAllCategoriesQuery } = apiSlice;
