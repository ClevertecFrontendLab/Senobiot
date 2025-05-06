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
import { useCategoryRecieptsQuery, useRecipeByCategoryQuery } from '../create-api';

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

type useRequestsProps = {
    randomCategory?: RandomCategoryStateProps;
    isJuiciest?: boolean;
    apiQureryId?: string;
    page?: number;
};

export const useRequests = ({
    randomCategory,
    apiQureryId,
    isJuiciest,
    page,
}: useRequestsProps) => {
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

    return {
        latestData,
        juciestData,
        randomCategoryReciepts,
        recieptsByCategory,
        categoryData,
        meta,
        isLoadingLatest,
        isLoadingJuciest,
        isLoadingRandom,
        isLoadingCategory,
        isErrorLatest,
        isErrorJuciest,
        isErrorRandom,
        isErrorCategory,
        isFetchingLatest,
        isFetchingJuiciest,
        isFetching,
    };
};
