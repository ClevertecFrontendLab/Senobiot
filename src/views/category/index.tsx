import { VStack } from '@chakra-ui/react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router';

import { Loader } from '~/components/layouts-components';
import { SearchBar } from '~/components/layouts-components/SearchBar';
import {
    CategorySection,
    CategorySectionNext,
    PageWrapper,
    ServerErrorAlert,
} from '~/components/shared-components';
import { EXCLUDED_ROUTES, PAGE_TITLES } from '~/constants';
import { useFilters } from '~/providers/Filters/useFilters';
import { setCurrentLocation } from '~/redux';
import { useCategoryRecieptsQuery, useRecipeByCategoryQuery } from '~/redux/query/create-api';
import { setAppError, userErrorSelector } from '~/redux/store/app-slice';
import { AllCategories, NavigationConfig, RecipeProps, SEARCH_STATE } from '~/types';
import { getRandomCategory, populateRecieptCategory } from '~/utils';

const CategoryPage: React.FC<{ navigationConfig: NavigationConfig }> = ({ navigationConfig }) => {
    const { filters } = useFilters();
    const { category, subcategory } = useParams<{ category: string; subcategory: string }>();
    const { subCategoriesByIds, categoriesByIds, navigationTree } = navigationConfig;

    const currentCategory = useMemo(
        () => navigationTree.find((e) => e.categoryEn === category),
        [category, navigationTree],
    );

    const currentSubCategory = useMemo(
        () => currentCategory?.subCategories?.find((e) => e.subcategoryEn === subcategory),
        [currentCategory, subcategory],
    );

    const isJuiciest: boolean = category === EXCLUDED_ROUTES.juiciest;

    const { categoryRu, categoryDescription, categoryId } = currentCategory || {};
    const { apiQureryId } = currentSubCategory || {};

    const error = useSelector(userErrorSelector);
    const dispatch = useDispatch();

    const resetError = useCallback(() => {
        dispatch(setAppError(null));
    }, [dispatch]);

    const [randomCategory, setRandomCategory] = useState<{
        randomCategory: AllCategories;
        subcategoriesIds: string;
    } | null>(null);

    const [markdownText, setMarkdownText] = useState<string | undefined>();
    const [searchResultState, setSearchResultState] = useState<SEARCH_STATE>();
    const [categoryReciepts, setCategoryReciepts] = useState<RecipeProps[]>([]);
    const [page, setPage] = useState<number>(1);
    const [randomCategoryData, setRandomCategoryData] = useState<{
        category: { title: string; description?: string };
        reciepts?: RecipeProps[];
    }>();

    const getMore = () => {
        setPage((prevPage) => prevPage + 1);
    };

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
        data: { data: randomCategoryReciepts } = {},
        isLoading: isLoadingRandom,
        isError: isErrorRandom,
    } = useCategoryRecieptsQuery(
        { subcategoriesIds: randomCategory?.subcategoriesIds },
        { skip: !randomCategory },
    );

    useEffect(() => {
        if (!isLoadingCategory && !isLoadingRandom && !isFetching) {
            if (categoryData?.length) {
                const populatedData = categoryData.map((e) =>
                    populateRecieptCategory(e, subCategoriesByIds),
                );

                setCategoryReciepts((prevData) =>
                    page === 1 ? populatedData : [...prevData, ...populatedData],
                );

                if (isJuiciest) {
                    dispatch(
                        setCurrentLocation({
                            category: { label: PAGE_TITLES.juiciest },
                        }),
                    );
                }

                if (currentCategory) {
                    const currentSubcategory = currentCategory?.subCategories?.find(
                        (e) => e.subcategoryEn === subcategory,
                    );
                    if (currentSubcategory) {
                        dispatch(
                            setCurrentLocation({
                                category: {
                                    label: currentCategory.categoryRu,
                                    route: currentCategory.route,
                                },
                                subcategory: {
                                    label: currentSubcategory?.subcategoryRu,
                                    route: currentSubcategory.route,
                                },
                            }),
                        );
                    }
                }

                if (filters.searchString) {
                    setSearchResultState(SEARCH_STATE.SUCCESS);
                    setMarkdownText(filters.searchString);
                } else if (searchResultState) {
                    setSearchResultState(undefined);
                    setMarkdownText(undefined);
                }
            } else {
                if (filters.searchString) {
                    setSearchResultState(SEARCH_STATE.EMPTY);
                    setMarkdownText(undefined);
                }
            }

            if (randomCategory) {
                if (randomCategoryReciepts?.length) {
                    const {
                        randomCategory: { categoryRu, categoryDescription },
                    } = randomCategory;

                    const populatedData = randomCategoryReciepts.map((e) =>
                        populateRecieptCategory(e, subCategoriesByIds),
                    );

                    setRandomCategoryData({
                        category: { title: categoryRu, description: categoryDescription },
                        reciepts: populatedData,
                    });
                }
            }
        }
    }, [
        categoryData,
        currentCategory,
        randomCategory,
        randomCategoryReciepts,
        isJuiciest,
        isLoadingCategory,
        isLoadingRandom,
        category,
        searchResultState,
        filters.searchString,
        subcategory,
        page,
        isFetching,
        subCategoriesByIds,
        dispatch,
        resetError,
    ]);

    useEffect(() => {
        const randomCategory = getRandomCategory(categoriesByIds, categoryId);
        const subcategoriesIds =
            randomCategory?.subCategories?.map((e) => e.apiQureryId).join(',') || '';

        setRandomCategory({ randomCategory, subcategoriesIds });
    }, [categoryId, categoriesByIds]);

    useEffect(() => {
        setPage(1);
    }, [apiQureryId]);

    useEffect(() => {
        if (isErrorCategory || isErrorRandom) {
            if (filters.searchString) {
                setSearchResultState(SEARCH_STATE.ERROR);
                setMarkdownText(undefined);
                dispatch(setAppError(true));
            } else {
                dispatch(setAppError(true));
            }
        }
    }, [isErrorCategory, isErrorRandom, filters.searchString, dispatch]);

    if (!currentCategory && !isJuiciest) {
        return <Navigate to='/not-found' replace />;
    }

    if (isLoadingCategory) {
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
                {!isErrorCategory && categoryReciepts?.length && (
                    <CategorySection
                        activeSubcategory={subcategory}
                        categoryData={currentCategory}
                        recieptsData={categoryReciepts}
                        categoryButtonText={isFetching ? 'Загрузка' : 'Загрузить еще'}
                        noHeader={true}
                        noFooter={!!meta?.totalPages && page >= meta.totalPages}
                        onClick={getMore}
                        markdownText={markdownText}
                        recieptsByCategory={recieptsByCategory}
                    />
                )}
                {randomCategoryData?.reciepts?.length && (
                    <CategorySectionNext
                        title={randomCategoryData.category.title}
                        description={randomCategoryData.category.description}
                        data={randomCategoryData.reciepts}
                    />
                )}
            </VStack>
        </PageWrapper>
    );
};

export default CategoryPage;
