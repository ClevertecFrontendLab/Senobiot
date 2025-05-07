import { VStack } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Loader } from '~/components/layouts-components';
import { SearchBar } from '~/components/layouts-components/SearchBar';
import {
    JuiciestRecipesSection,
    LatestRecipesSection,
    PageWrapper,
    RelevantKitchenSection,
    ServerErrorAlert,
} from '~/components/shared-components';
import { BlogsSection } from '~/components/shared-components';
import { PAGE_TITLES } from '~/constants';
import { useSearchState } from '~/hooks';
import { useFilters } from '~/providers/Filters/useFilters';
import { setCurrentLocation } from '~/redux';
import { useRecipeRequests } from '~/redux/query/utils';
import { setAppError, userErrorSelector } from '~/redux/store/app-slice';
import {
    NavigationConfig,
    RandomCategoryStateProps,
    RecipeProps,
    RelevantCategoryStateProps,
} from '~/types';
import { getRandomCategory, populateRecieptCategory } from '~/utils';

const HomePage: React.FC<{ navigationConfig: NavigationConfig }> = ({ navigationConfig }) => {
    const { subCategoriesByIds, categoriesByIds } = navigationConfig;

    const { filters } = useFilters();
    const [latestRecipes, setLatestReciepes] = useState<RecipeProps[]>([]);
    const [juiciestRecipes, setJuciestReciepts] = useState<RecipeProps[]>([]);
    const [randomCategory, setRandomCategory] = useState<RandomCategoryStateProps>(null);
    const [relevantReciepts, setRelevantReciepts] = useState<RelevantCategoryStateProps>({
        category: { title: '', description: '' },
        reciepts: [],
    });

    const dispatch = useDispatch();
    const error = useSelector(userErrorSelector);
    const resetError = useCallback(() => {
        dispatch(setAppError(null));
    }, [dispatch]);

    const {
        latestData,
        juiciestData,
        relevantData,
        isLoadingLatest,
        isLoadingJuiciest,
        isLoadingRelevant,
        isErrorLatest,
        isErrorJuiciest,
        isErrorRelevant,
        isFetchingLatest,
        isFetchingJuiciest,
    } = useRecipeRequests({ randomCategory, isJuiciest: true });

    const isError = isErrorLatest || isErrorJuiciest || isErrorRelevant;

    const { searchResultState, markdownText } = useSearchState({
        searchString: filters.searchString,
        latestRecipes,
        juiciestRecipes,
        isError,
    });

    useEffect(() => {
        if (subCategoriesByIds && !isLoadingLatest && !isLoadingJuiciest && !isLoadingRelevant) {
            if (latestData) {
                const populatedData = latestData.map((e) =>
                    populateRecieptCategory(e, subCategoriesByIds),
                );
                setLatestReciepes(populatedData);
                dispatch(setCurrentLocation({}));
            }

            if (juiciestData) {
                const populatedData = juiciestData.map((e) =>
                    populateRecieptCategory(e, subCategoriesByIds),
                );
                setJuciestReciepts(populatedData);
            }

            if (randomCategory) {
                if (relevantData?.length) {
                    const {
                        randomCategory: { categoryRu, categoryDescription },
                    } = randomCategory;

                    const populatedData = relevantData.map((e) =>
                        populateRecieptCategory(e, subCategoriesByIds),
                    );

                    setRelevantReciepts({
                        category: { title: categoryRu, description: categoryDescription },
                        reciepts: populatedData,
                    });
                }
            }
        }
    }, [
        juiciestData,
        latestData,
        relevantData,
        randomCategory,
        isLoadingLatest,
        isLoadingJuiciest,
        isLoadingRelevant,
        searchResultState,
        filters.searchString,
        subCategoriesByIds,
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
        if (isErrorLatest || isErrorJuiciest || isErrorRelevant) {
            dispatch(setAppError(true));
        }
    }, [isErrorLatest, isErrorJuiciest, isErrorRelevant, dispatch]);

    if (isLoadingLatest || isLoadingJuiciest) {
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
                <LatestRecipesSection recipes={latestRecipes} markdownText={markdownText} />
                <JuiciestRecipesSection recipes={juiciestRecipes} markdownText={markdownText} />
                <BlogsSection />
                <RelevantKitchenSection
                    title={relevantReciepts.category.title}
                    description={relevantReciepts.category.description}
                    data={relevantReciepts.reciepts}
                />
            </VStack>
        </PageWrapper>
    );
};

export default HomePage;
