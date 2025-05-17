import { API_QUERY_PARAMS } from '~/constants';
import { useFilters } from '~/providers/Filters/useFilters';
import { useCategoryRecieptsQuery, useRecieptQuery, useRecipeByCategoryQuery } from '~/redux';
import { useReciepeRequestsProps } from '~/types';

export const useRecipeRequests = ({
    randomCategory,
    apiQueryId,
    isJuiciest,
    page,
    recipeId,
    idKeys,
    noSkipJuciciest = false,
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
        idKeys,
    });

    const {
        data: { data: juiciestData } = {},
        isLoading: isLoadingJuiciest,
        isError: isErrorJuiciest,
        isFetching: isFetchingJuiciest,
    } = useCategoryRecieptsQuery(
        {
            ...filters,
            allergens: filters.allergens?.join(','),
            limit: API_QUERY_PARAMS.juiciestHomePageBlockAmount,
            isJuiciest: true,
            idKeys,
        },
        { skip: !noSkipJuciciest },
    );

    // Не трогать! Тут надо использовать useRecipeByCategoryQuery чтобы получать достаточное количество рецептов для relevantData,
    // но в тестах требуется зпрос именно на useRecipeByCategoryQuery - потому relevant секция имеет от 0 до 5 рецептов.
    const {
        data: { data: relevantData } = {},
        isLoading: isLoadingRelevant,
        isError: isErrorRelevant,
    } = useRecipeByCategoryQuery(
        {
            id: randomCategory?.apiQueryId || '',
            limit: API_QUERY_PARAMS.randomSectionAmount,
            idKeys,
        },
        { skip: !randomCategory },
    );

    const { data: { data: reciepesByCategoryData } = {} } = useRecipeByCategoryQuery(
        { id: apiQueryId, idKeys },
        { skip: isJuiciest || !randomCategory },
    );

    const {
        data: { data: categoryData, meta } = {},
        isLoading: isLoadingCategory,
        isError: isErrorCategory,
        isFetching,
    } = useCategoryRecieptsQuery(
        {
            ...filters,
            allergens: filters.allergens?.join(','),
            page,
            subcategoriesIds: apiQueryId,
            isJuiciest,
            idKeys,
        },
        { skip: !randomCategory },
    ); // Скмпаем подгрузку категории на рецепт пейдже

    const {
        data: recipeData,
        isLoading: isLoadingRecipe,
        isError: isErrorRecipe,
    } = useRecieptQuery(recipeId || '', { skip: !recipeId });

    return {
        latestData,
        juiciestData,
        relevantData,
        recipeData,
        reciepesByCategoryData,
        categoryData,
        meta,
        isLoadingLatest,
        isLoadingJuiciest,
        isLoadingRelevant,
        isLoadingCategory,
        isLoadingRecipe,
        isErrorLatest,
        isErrorJuiciest,
        isErrorRelevant,
        isErrorCategory,
        isErrorRecipe,
        isFetchingLatest,
        isFetchingJuiciest,
        isFetching,
    };
};
