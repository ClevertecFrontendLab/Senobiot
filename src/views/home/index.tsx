import { Flex, VStack } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Loader } from '~/components/layouts-components';
import { SearchBar } from '~/components/layouts-components/SearchBar';
import { PageWrapper, ServerErrorAlert, Slider } from '~/components/shared-components';
import { CategoryHeader } from '~/components/shared-components';
import { BlogsSection } from '~/components/shared-components';
import { CategorySectionNext } from '~/components/shared-components';
import { PAGE_TITLES } from '~/constants';
import { PADDINGS } from '~/constants/styles';
import { useFilters } from '~/providers/Filters/useFilters';
import { setCurrentLocation } from '~/redux';
import {
    //  useCategoryByIdQuery,
    useCategoryRecieptsQuery,
    useRecipeByCategoryQuery,
} from '~/redux/query/create-api';
import { setAppError, userErrorSelector } from '~/redux/store/app-slice';
import { AllCategories, NavigationConfig, RecipeProps, SEARCH_STATE } from '~/types';
import { getRandomCategory, populateRecieptCategory } from '~/utils';

import JuciestSection from './juciest-preview';

const HomePage: React.FC<{ navigationConfig: NavigationConfig }> = ({ navigationConfig }) => {
    const { subCategoriesByIds, categoriesByIds } = navigationConfig;

    const { filters } = useFilters();
    const [latestReciepts, setLatestReciepts] = useState<RecipeProps[]>([]);
    const [juciestReciepts, setJuciestReciepts] = useState<RecipeProps[]>([]);
    const [randomCategory, setRandomCategory] = useState<{
        randomCategory: AllCategories;
        subcategoriesIds: string;
    } | null>(null);
    const [randomCategoryData, setRandomCategoryData] = useState<{
        category: { title: string; description?: string };
        reciepts?: RecipeProps[];
    }>({ category: { title: '', description: '' }, reciepts: [] });
    const [markdownText, setMarkdownText] = useState<string | undefined>();
    const [searchResultState, setSearchResultState] = useState<SEARCH_STATE>();

    const dispatch = useDispatch();
    const error = useSelector(userErrorSelector);
    const resetError = useCallback(() => {
        dispatch(setAppError(null));
    }, [dispatch]);

    // const { data } = useRecipeByCategoryQuery(apiQureryId || '', { skip: isJuiciest });
    // const { data } = useCategoryByIdQuery(categoryId || '', { skip: isJuiciest });
    // console.log(data);

    const {
        data: { data: latestData } = {},
        isLoading: isLoadingLatest,
        isError: isErrorLatest,
        isFetching: isFetchingLatest,
    } = useCategoryRecieptsQuery({
        ...filters,
        allergens: filters.allergens?.join(','),
        limit: 10,
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
        limit: 4,
        isJuiciest: true,
    });

    const {
        data: { data: randomCategoryReciepts } = {},
        isLoading: isLoadingRandom,
        isError: isErrorRandom,
    } = useRecipeByCategoryQuery(
        { id: randomCategory?.randomCategory.apiQureryId || '', limit: 5 },
        { skip: !randomCategory },
    );

    useEffect(() => {
        if (subCategoriesByIds && !isLoadingLatest && !isLoadingJuciest && !isLoadingRandom) {
            if (latestData) {
                const populatedData = latestData.map((e) =>
                    populateRecieptCategory(e, subCategoriesByIds),
                );
                setLatestReciepts(populatedData);
                dispatch(setCurrentLocation({}));
            }

            if (juciestData) {
                const populatedData = juciestData.map((e) =>
                    populateRecieptCategory(e, subCategoriesByIds),
                );
                setJuciestReciepts(populatedData);
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

            if (latestData?.length || juciestData?.length) {
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
        }
    }, [
        juciestData,
        latestData,
        randomCategoryReciepts,
        randomCategory,
        isLoadingLatest,
        isLoadingJuciest,
        isLoadingRandom,
        // isErrorLatest,
        // isErrorJuciest,
        // isErrorRandom,
        searchResultState,
        filters.searchString,
        subCategoriesByIds,
        // error,
        dispatch,
        resetError,
    ]);

    useEffect(() => {
        const randomCategory = getRandomCategory(categoriesByIds);
        const subcategoriesIds =
            randomCategory?.subCategories?.map((e) => e.apiQureryId).join(',') || '';
        setRandomCategory({ randomCategory, subcategoriesIds });
    }, [categoriesByIds]);

    useEffect(() => {
        if (isErrorLatest || isErrorJuciest || isErrorRandom) {
            if (filters.searchString) {
                setSearchResultState(SEARCH_STATE.ERROR);
                setMarkdownText(undefined);
                dispatch(setAppError(true));
            } else {
                dispatch(setAppError(true));
            }
        }
    }, [isErrorLatest, isErrorJuciest, isErrorRandom, dispatch, filters.searchString]);

    if (isLoadingLatest || isLoadingJuciest) {
        return <Loader />;
    }

    return (
        <PageWrapper>
            {!filters.searchString && (isFetchingLatest || isFetchingJuiciest) && <Loader />}
            {error && <ServerErrorAlert onClose={resetError} />}
            <SearchBar
                searchResultState={searchResultState}
                isLoading={!!filters.searchString && (isFetchingLatest || isFetchingJuiciest)}
                pageTitle={PAGE_TITLES.home}
            />
            <VStack px={{ base: 4, md: 5, xl: 0 }} m={0} gap={0} w='100%'>
                {latestReciepts?.length && (
                    <Flex mb={PADDINGS.subsectionHeaderMb} direction='column' w='100%'>
                        <CategoryHeader
                            mb={PADDINGS.subsectionHeaderMb}
                            title={PAGE_TITLES.slider}
                        />
                        <Slider markdownText={markdownText} slides={latestReciepts} />
                    </Flex>
                )}
                {juciestReciepts?.length && (
                    <JuciestSection markdownText={markdownText} recieptsData={juciestReciepts} />
                )}
                <BlogsSection />
                {randomCategoryData.reciepts?.length && (
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

export default HomePage;
