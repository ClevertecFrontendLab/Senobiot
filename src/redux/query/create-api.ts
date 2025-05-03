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
        latestReciepts: builder.query({
            query: () => '/recipe?page=1&limit=10&sortBy=createdAt&sortOrder=desc',
            transformResponse: transformRecieptsResponse,
        }),
        juciestReciepts: builder.query({
            query: ({ limit = 8, page = 1 }) =>
                `/recipe?page=${page}&limit=${limit}&sortBy=likes&sortOrder=desc`,
            transformResponse: transformRecieptsResponse,
        }),
        categoryReciepts: builder.query({
            query: ({ limit = 8, page = 1, id }) =>
                `/recipe/category/${id}?page=${page}&limit=${limit}`,
            transformResponse: transformRecieptsResponse,
        }),
        reciept: builder.query<RecipeProps, string>({
            query: (id) => `/recipe/${id}`,
            transformResponse: transformRecieptResponse,
        }),
    }),
});

export const {
    useAllCategoriesQuery,
    useLatestRecieptsQuery,
    useJuciestRecieptsQuery,
    useCategoryRecieptsQuery,
    useRecieptQuery,
} = apiSlice;

function transformCategoriesResponse(response: AllCategoriesResponse) {
    const navigationTree: AllCategories[] = [];
    const categoriesByIds: CategoriesByIds = {};
    const subCategoriesByIds: SubCategoriesByIds = {};

    response.forEach((item, _, array) => {
        if (item.rootCategoryId) {
            const category = array.find((e) => e._id === item.rootCategoryId)!;

            subCategoriesByIds[item._id] = {
                categoryId: category._id,
                categoryEn: category.category,
                categoryRu: category.title,
                categoryIcon: BASE_ICON_URL + category?.icon,
                categoryDescription: category.description ?? '',
                subcategoryId: item._id,
                subcategoryEn: item.category,
                subcategoryRu: item.title,
                subCategoriesList:
                    category.subCategories?.map((e) => ({
                        categoryEn: e.category,
                        categoryRu: e.title,
                        route: `/${category?.category}/${e.category}`,
                    })) ?? [],
                route: `/${category?.category}/${item.category}`,
                apiQureryId: item._id,
            };

            return;
        }

        const subCategoriesList =
            item.subCategories?.map((e) => ({
                categoryEn: e.category,
                categoryRu: e.title,
                route: `/${item.category}/${e.category}`,
            })) ?? [];

        const navigationBranch = {
            categoryId: item._id,
            categoryEn: item.category,
            categoryRu: item.title,
            categoryDescription: item.description ?? '',
            categoryIcon: BASE_ICON_URL + item.icon,
            route: `/${item.category}/${item.subCategories ? item.subCategories[0]?.category : ''}`,
            apiQureryId: item.subCategories ? item.subCategories[0]?._id : '',
            subCategoriesList,
            subCategories:
                item.subCategories?.map((subItem) => ({
                    categoryId: item._id,
                    categoryEn: item.category,
                    categoryRu: item.title,
                    categoryIcon: BASE_ICON_URL + item.icon,
                    categoryDescription: item.description ?? '',
                    subcategoryId: subItem._id,
                    subcategoryEn: subItem.category,
                    subcategoryRu: subItem.title,
                    subCategoriesList,
                    route: `/${item.category}/${subItem.category}`,
                    apiQureryId: subItem._id,
                })) ?? [],
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
    const updatedData = response.data.map((e) => ({
        ...e,
        image: BASE_ICON_URL + e.image,
        id: e._id,
    }));
    return { ...response, data: updatedData };
}

function transformRecieptResponse(response: RecipeProps) {
    const updatedSteps = response.steps.map((e) => ({
        ...e,
        image: e.image ? BASE_ICON_URL + e.image : '',
    }));

    return { ...response, image: BASE_ICON_URL + response.image, steps: updatedSteps };
}
