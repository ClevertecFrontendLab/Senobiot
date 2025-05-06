import { API_QUERY_PARAMS } from '~/constants';
import { useFilters } from '~/providers/Filters/useFilters';
import {
    AllCategories,
    CategoriesByIds,
    RandomCategoryStateProps,
    RecipeProps,
    SubCategoriesByIds,
} from '~/types';

import { ApiEndpoints } from '../constants/api';
import { useCategoryRecieptsQuery, useRecieptQuery, useRecipeByCategoryQuery } from '../create-api';

type AllCategoriesResponse = {
    category: string;
    description?: string;
    icon: string;
    subCategories?: SubCategory[];
    title: string;
    _id: string;
    rootCategoryId?: string;
}[];
type RecipesResponse = {
    data: RecipeProps[];
    meta: MetaData;
};
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

const { BASE_ICON_URL } = ApiEndpoints;

export function transformCategoriesResponse(response: AllCategoriesResponse) {
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
// 3 РАЗНЫХ ВАРИАЦИИ ОТВЕТА ОТ ОДНОГО ЭНДПОИНТА С ОДНИМИ И ТЕМИ ЖЕ ПАРАМЕТРАМИ - 1) ТЕСТОВЫЙ АПИ + 2 ВАРИАНТА В ТЕСТАХ
export function isRecipeProps(response: unknown): response is RecipeProps {
    // ТЕСТЫ КИДАЮТ НЕСТАНДАРТЫЙ ОТВЕТ ВМЕСТО МАССИВА ПРСОТСТО ОБЪЕКТ БЕЗ ДАТЫ И МЕТЫ
    if (response && typeof response === 'object') {
        return response && 'image' in response;
    }
    return false;
}

export function transformRecieptsResponse(response: RecipesResponse | RecipeProps) {
    if (!response) {
        return { data: [] };
    }

    if ('data' in response && Array.isArray(response.data)) {
        // RecipesResponse`
        const updatedData = response.data.flat().map((e) => ({
            // ТЕСТЫ КИДАЮТ НЕСТАНДАРТЫЙ ОТВЕТ ВМЕСТО МАССИВА МАССИВ МАССИВОВ в МАССИВАХ ЕАДО ФЛЭТ МОГУТ ПАДАТЬ ТУТ
            ...e,
            image: e.image ? BASE_ICON_URL + e.image : '',
            id: e._id,
        }));
        return { ...response, data: updatedData };
    } else if (isRecipeProps(response)) {
        // RecipeProps`
        const updatedData = {
            ...response,
            image: response.image ? BASE_ICON_URL + response.image : '',
            id: response._id,
        };
        return { data: [updatedData], meta: { totalPages: 0 } }; // ТЕСТЫ КИДАЮТ НЕСТАНДАРТЫЙ ОТВЕТ ВМЕСТО МАССИВА ПРСОТСТО ОБЪЕКТ БЕЗ ДАТЫ И МЕТЫ
    }
}

export function transformRecieptResponse(response: RecipeProps) {
    const updatedSteps = response.steps.map((e) => ({
        ...e,
        image: e.image ? BASE_ICON_URL + e.image : '',
    }));

    return { ...response, image: BASE_ICON_URL + response.image, steps: updatedSteps };
}

type useReciepeRequestsProps = {
    randomCategory?: RandomCategoryStateProps;
    isJuiciest?: boolean;
    apiQureryId?: string;
    page?: number;
    recieptId?: string;
};

export const useRecipeRequests = ({
    randomCategory,
    apiQureryId,
    isJuiciest,
    page,
    recieptId,
}: useReciepeRequestsProps) => {
    const { filters } = useFilters();

    const {
        data: { data: latestData } = {},
        isLoading: isLoadingLatest,
        isError: isErrorLatest,
        isFetching: isFetchingLatest,
    } = useCategoryRecieptsQuery({
        ...filters,
        allergens: filters.allergens?.join(','),
        limit: API_QUERY_PARAMS.sliderDefaultAmount,
        isLatest: true,
    });

    const {
        data: { data: juciestData } = {},
        isLoading: isLoadingJuciest,
        isError: isErrorJuciest,
        isFetching: isFetchingJuiciest,
    } = useCategoryRecieptsQuery({
        ...filters,
        allergens: filters.allergens?.join(','),
        limit: API_QUERY_PARAMS.juciestHomePageBlockAmount,
        isJuiciest: true,
    });

    const {
        data: { data: randomCategoryReciepts } = {},
        isLoading: isLoadingRandom,
        isError: isErrorRandom,
    } = useRecipeByCategoryQuery(
        {
            id: randomCategory?.randomCategory.apiQureryId || '',
            limit: API_QUERY_PARAMS.randomSectionAmount,
        },
        { skip: !randomCategory },
    );

    const { data: { data: recieptsByCategory } = {} } = useRecipeByCategoryQuery(
        { id: apiQureryId },
        { skip: isJuiciest },
    );

    const {
        data: { data: categoryData, meta } = {},
        isLoading: isLoadingCategory,
        isError: isErrorCategory,
        isFetching,
    } = useCategoryRecieptsQuery({
        ...filters,
        allergens: filters.allergens?.join(','),
        page,
        subcategoriesIds: apiQureryId,
        isJuiciest,
    });

    const {
        data: recieptData,
        isLoading: isLoadingReciept,
        isError: isErrorReciept,
    } = useRecieptQuery(recieptId || '', { skip: !recieptId });

    return {
        latestData,
        juciestData,
        randomCategoryReciepts,
        recieptData,
        recieptsByCategory,
        categoryData,
        meta,
        isLoadingLatest,
        isLoadingJuciest,
        isLoadingRandom,
        isLoadingCategory,
        isLoadingReciept,
        isErrorLatest,
        isErrorJuciest,
        isErrorRandom,
        isErrorCategory,
        isErrorReciept,
        isFetchingLatest,
        isFetchingJuiciest,
        isFetching,
    };
};

export type QueryParams = {
    limit?: number;
    page?: number;
    allergens?: string;
    searchString?: string;
    meat?: string;
    garnish?: string;
    subcategoriesIds?: string;
    isJuiciest?: boolean;
    isLatest?: boolean;
};

export const buildRecieptsQuery = ({
    limit = API_QUERY_PARAMS.defaultRequestAmount,
    page = API_QUERY_PARAMS.defaultPage,
    allergens = '',
    searchString = '',
    meat = '',
    garnish = '',
    subcategoriesIds = '',
    isJuiciest = false,
    isLatest = false,
}: QueryParams): string => {
    const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
    });

    if (allergens.trim()) params.append('allergens', allergens.trim());
    if (searchString.trim()) params.append('searchString', searchString.trim());
    if (meat.trim()) params.append('meat', meat.trim());
    if (garnish.trim()) params.append('garnish', garnish.trim());
    if (subcategoriesIds.trim()) params.append('subcategoriesIds', subcategoriesIds.trim());
    if (isJuiciest) {
        params.append('sortBy', 'likes');
        params.append('sortOrder', 'desc');
    }
    if (isLatest) {
        params.append('sortBy', 'createdAt');
        params.append('sortOrder', 'desc');
    }

    return `/recipe?${params.toString()}`;
};
