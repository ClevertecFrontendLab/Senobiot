import { VStack } from '@chakra-ui/react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router';

import { Loader } from '~/components/layouts-components';
import { SearchBar } from '~/components/layouts-components/SearchBar';
import {
    CategorySection,
    ContentPageWrapper,
    RelevantKitchenSection,
    ServerErrorAlert,
} from '~/components/shared-components';
import { ALERTS, BUTTONS_TEXT, EXCLUDED_ROUTES, PAGE_TITLES } from '~/constants';
import { useBreadCrumbs, useSearchState } from '~/hooks';
import { useRecipeRequests } from '~/hooks/useRecipeQuery';
import { useFilters } from '~/providers/Filters/useFilters';
import { setAppError, userErrorSelector } from '~/redux/store/app-slice';
import { LocationParams, NavigationConfig, RecipeProps } from '~/types';
import { getRandomCategory, useCurrentLocation } from '~/utils';

const CategoryPage: React.FC<{ navigationConfig: NavigationConfig }> = ({ navigationConfig }) => {
    const { filters } = useFilters();
    const prevSearchRef = useRef(filters.searchString);
    const params = useParams<LocationParams>();
    const { subCategoriesByIds, categoriesByIds } = navigationConfig;
    const isJuiciest: boolean = params.category === EXCLUDED_ROUTES.juiciest;

    const idKeys = useMemo(() => subCategoriesByIds, [subCategoriesByIds]);
    const randomCategory = useMemo(() => getRandomCategory(categoriesByIds), [categoriesByIds]);

    const { apiQueryId, currentSubCategory, currentCategory, breadcrumbs } = useCurrentLocation(
        params,
        navigationConfig,
    );

    const error = useSelector(userErrorSelector);
    const dispatch = useDispatch();
    const { setBreadCrumbs } = useBreadCrumbs();

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
    } = useRecipeRequests({ randomCategory, isJuiciest, apiQueryId, page, idKeys });

    const isError = isErrorCategory || isErrorRelevant;

    const { searchResultState, markdownText } = useSearchState({
        searchString: filters.searchString,
        categoryData,
        relevantData,
        isError,
    });

    useEffect(() => {
        setBreadCrumbs(breadcrumbs);
    }, [breadcrumbs, setBreadCrumbs]);

    useEffect(() => {
        if (filters.searchString !== prevSearchRef.current) {
            prevSearchRef.current = filters.searchString;
            setCategoryReciepes([]);
            setPage(1);
        }
    }, [filters.searchString]);

    useEffect(() => {
        if (categoryData?.length) {
            setCategoryReciepes((prevData) => [...prevData, ...categoryData]);
        }
    }, [categoryData]);

    useEffect(() => {
        if (isErrorCategory || isErrorRelevant) {
            dispatch(setAppError(ALERTS.default));
        }
    }, [isErrorCategory, isErrorRelevant, dispatch]);

    useEffect(() => {
        setCategoryReciepes([]);
        setPage(1);
    }, [apiQueryId]);

    if (!currentCategory && !isJuiciest) {
        return <Navigate to={`/${EXCLUDED_ROUTES.notFound}`} replace />;
    }

    if (isLoadingCategory || isLoadingRelevant) {
        return <Loader />;
    }

    return (
        <ContentPageWrapper>
            {!filters.searchString && isFetching && <Loader />}
            {error && <ServerErrorAlert onClose={resetError} />}
            <SearchBar
                searchResultState={searchResultState}
                isLoading={!!filters.searchString && isFetching}
                pageTitle={(!isJuiciest ? currentCategory?.categoryRu : PAGE_TITLES.juiciest) || ''}
                pageDescription={currentCategory?.categoryDescription}
            />
            <VStack px={{ base: 4, md: 5, xl: 0 }} m={0} gap={0} w='100%'>
                <CategorySection
                    activeSubcategory={currentSubCategory?.subcategoryEn}
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
        </ContentPageWrapper>
    );
};

export default CategoryPage;
