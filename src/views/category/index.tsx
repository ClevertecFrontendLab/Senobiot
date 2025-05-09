import { VStack } from '@chakra-ui/react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router';

import { Loader } from '~/components/layouts-components';
import { SearchBar } from '~/components/layouts-components/SearchBar';
import {
    CategorySection,
    PageWrapper,
    RelevantKitchenSection,
    ServerErrorAlert,
} from '~/components/shared-components';
import { BUTTONS_TEXT, EXCLUDED_ROUTES, PAGE_TITLES } from '~/constants';
import { useSearchState } from '~/hooks';
import { useFilters } from '~/providers/Filters/useFilters';
import { setCurrentLocation } from '~/redux';
import { useRecipeRequests } from '~/redux/query/utils';
import { setAppError, userErrorSelector } from '~/redux/store/app-slice';
import { NavigationConfig, RecipeProps } from '~/types';
import { getRandomCategory } from '~/utils';

const CategoryPage: React.FC<{ navigationConfig: NavigationConfig }> = ({ navigationConfig }) => {
    const { filters } = useFilters();
    const { category, subcategory } = useParams<{ category: string; subcategory: string }>();
    const { subCategoriesByIds, categoriesByIds, navigationTree } = navigationConfig;
    const isJuiciest: boolean = category === EXCLUDED_ROUTES.juiciest;

    const idKeys = useMemo(() => subCategoriesByIds, [subCategoriesByIds]);
    const randomCategory = useMemo(() => getRandomCategory(categoriesByIds), [categoriesByIds]);
    const currentCategory = useMemo(
        () => navigationTree.find((e) => e.categoryEn === category),
        [category, navigationTree],
    );

    const {
        apiQureryId,
        subcategoryRu,
        route: subcategoryRoute,
    } = useMemo(
        () => currentCategory?.subCategories?.find((e) => e.subcategoryEn === subcategory),
        [currentCategory, subcategory],
    ) || {};

    const { categoryRu, categoryDescription, route: categoryRoute } = currentCategory || {};

    const error = useSelector(userErrorSelector);
    const dispatch = useDispatch();

    const resetError = useCallback(() => {
        dispatch(setAppError(null));
    }, [dispatch]);

    const [page, setPage] = useState<number>(1);
    const [categoryRecipes, setCategoryReciepes] = useState<RecipeProps[]>([]);

    const getMore = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const {
        categoryData,
        reciepesByCategoryData,
        relevantData,
        meta,
        isLoadingCategory,
        isLoadingRelevant,
        isErrorCategory,
        isErrorRelevant,
        isFetching,
    } = useRecipeRequests({ randomCategory, isJuiciest, apiQureryId, page, idKeys });

    const isError = isErrorCategory || isErrorRelevant;

    const { searchResultState, markdownText } = useSearchState({
        searchString: filters.searchString,
        categoryData,
        relevantData,
        isError,
    });

    useEffect(() => {
        if (categoryData?.length) {
            setCategoryReciepes((prevData) => [...prevData, ...categoryData]);
        }
    }, [categoryData]);

    useEffect(() => {
        if (isErrorCategory || isErrorRelevant) {
            dispatch(setAppError(true));
        }
    }, [isErrorCategory, isErrorRelevant, dispatch]);

    useEffect(() => {
        // TODO Сделать провайдер и выпилить это со всех вьюх
        dispatch(
            setCurrentLocation({
                category: {
                    label: isJuiciest ? PAGE_TITLES.juiciest : categoryRu || '',
                    route: categoryRoute,
                },
                subcategory: {
                    label: subcategoryRu || '',
                    route: subcategoryRoute,
                },
            }),
        );
    }, [categoryRoute, categoryRu, dispatch, isJuiciest, subcategoryRoute, subcategoryRu]);

    useEffect(() => {
        setPage(1);
    }, [apiQureryId]);

    useEffect(() => {
        if (isErrorCategory || isErrorRelevant) {
            dispatch(setAppError(true));
        }
    }, [isErrorCategory, isErrorRelevant, dispatch]);

    if (!currentCategory && !isJuiciest) {
        return <Navigate to={`/${EXCLUDED_ROUTES.notFound}`} replace />;
    }

    if (isLoadingCategory || isLoadingRelevant) {
        return <Loader />;
    }

    return (
        <PageWrapper>
            {!filters.searchString && isFetching && <Loader />}
            {error && <ServerErrorAlert onClose={resetError} />}
            <SearchBar
                searchResultState={searchResultState}
                isLoading={!!filters.searchString && isFetching}
                pageTitle={(!isJuiciest ? categoryRu : PAGE_TITLES.juiciest) || ''}
                pageDescription={categoryDescription}
            />
            <VStack px={{ base: 4, md: 5, xl: 0 }} m={0} gap={0} w='100%'>
                <CategorySection
                    activeSubcategory={subcategory}
                    categoryData={currentCategory}
                    categoryRecipes={categoryRecipes}
                    categoryButtonText={
                        isFetching ? BUTTONS_TEXT.viewMore.loading : BUTTONS_TEXT.viewMore.loaded
                    }
                    noHeader={true}
                    noFooter={!!meta?.totalPages && page >= meta.totalPages}
                    onClick={getMore}
                    markdownText={markdownText}
                    recieptsByCategory={reciepesByCategoryData}
                />
                <RelevantKitchenSection
                    title={randomCategory.categoryRu}
                    description={randomCategory.categoryDescription}
                    data={relevantData}
                />
            </VStack>
        </PageWrapper>
    );
};

export default CategoryPage;
