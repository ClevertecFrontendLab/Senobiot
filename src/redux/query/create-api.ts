import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { AllCategories, CategoriesByIds, RecipeProps, SubCategoriesByIds } from '~/types';

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

type MetaData = {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
};

type RecipesResponse = {
    data: RecipeProps[];
    meta: MetaData;
};

export const apiSlice = createApi({
    reducerPath: 'categoriesApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        allCategories: builder.query({
            query: () => '/category',
            transformResponse: transformCategoriesResponse,
        }),
        latestReciepts: builder.query<RecipeProps[], void>({
            query: () => '/recipe?page=1&limit=10&sortBy=createdAt&sortOrder=desc',
            transformResponse: transformRecieptsResponse,
        }),
        juciestReciepts: builder.query<RecipeProps[], void>({
            query: () => '/recipe?page=1&limit=10&sortBy=likes&sortOrder=desc',
            transformResponse: transformRecieptsResponse,
        }),
    }),
});

export const { useAllCategoriesQuery, useLatestRecieptsQuery, useJuciestRecieptsQuery } = apiSlice;
// export const getAllCategories = apiSlice.endpoints.allCategories.select();

function transformCategoriesResponse(response: AllCategoriesResponse) {
    const navigationTree: AllCategories[] = [];
    const categoriesByIds: CategoriesByIds = {};
    const subCategoriesByIds: SubCategoriesByIds = {};

    response.forEach((item, _, array) => {
        if (item.rootCategoryId) {
            const category = array.find((e) => e._id === item.rootCategoryId)!;

            subCategoriesByIds[item._id] = {
                category: category.category,
                categoryTitle: category?.title,
                icon: BASE_ICON_URL + category?.icon,
                title: item.title,
                subcategory: item.category,
                route: `/${category?.category}/${item.category}`,
                id: item._id,
            };

            return;
        }

        const navigationBranch = {
            category: item.category,
            description: item.description,
            icon: BASE_ICON_URL + item.icon,
            subCategories: item.subCategories?.map((subItem) => ({
                ...subItem,
                route: `/${item.category}/${subItem.category}`,
                categoryTitle: item.category,
                subcategory: subItem.category,
                icon: BASE_ICON_URL + item.icon,
                id: subItem._id,
            })),
            title: item.title,
            id: item._id,
            route: `/${item.category}`,
        };

        navigationTree.push(navigationBranch);
        categoriesByIds[item._id] = navigationBranch;
    });

    return {
        navigationTree,
        categoriesByIds,
        subCategoriesByIds,
    };
}

function transformRecieptsResponse(response: RecipesResponse) {
    return response.data.map((e) => ({ ...e, image: BASE_ICON_URL + e.image, id: e._id }));
}
