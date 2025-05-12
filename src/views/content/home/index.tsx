import { VStack } from '@chakra-ui/react';
import { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Loader } from '~/components/layouts-components';
import { SearchBar } from '~/components/layouts-components/SearchBar';
import {
    ContentPageWrapper,
    JuiciestRecipesSection,
    LatestRecipesSection,
    RelevantKitchenSection,
    ServerErrorAlert,
} from '~/components/shared-components';
import { BlogsSection } from '~/components/shared-components';
import { PAGE_TITLES } from '~/constants';
import { useBreadCrumbs, useSearchState } from '~/hooks';
import { useFilters } from '~/providers/Filters/useFilters';
import { useRecipeRequests } from '~/redux/query/utils';
import { setAppError, userErrorSelector } from '~/redux/store/app-slice';
import { NavigationConfig } from '~/types';
import { getRandomCategory } from '~/utils';

const HomePage: React.FC<{ navigationConfig: NavigationConfig }> = ({ navigationConfig }) => {
    const { subCategoriesByIds, categoriesByIds } = navigationConfig;
    const idKeys = useMemo(() => subCategoriesByIds, [subCategoriesByIds]);
    const randomCategory = useMemo(() => getRandomCategory(categoriesByIds), [categoriesByIds]);
    const { filters } = useFilters();
    const dispatch = useDispatch();
    const { setBreadCrumbs } = useBreadCrumbs();
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
    } = useRecipeRequests({ randomCategory, isJuiciest: true, idKeys, noSkipJuciciest: true });

    const isError = isErrorLatest || isErrorJuiciest || isErrorRelevant;

    const { searchResultState, markdownText } = useSearchState({
        searchString: filters.searchString,
        latestData,
        juiciestData,
        relevantData,
        isError,
    });

    useEffect(() => {
        if (isErrorLatest || isErrorJuiciest || isErrorRelevant) {
            dispatch(setAppError(true));
        }
    }, [isErrorLatest, isErrorJuiciest, isErrorRelevant, dispatch]);

    useEffect(() => {
        setBreadCrumbs({});
    }, [setBreadCrumbs]);

    if (isLoadingLatest || isLoadingJuiciest || isLoadingRelevant) {
        return <Loader />;
    }

    return (
        <ContentPageWrapper>
            {!filters.searchString && (isFetchingLatest || isFetchingJuiciest) && <Loader />}
            {error && <ServerErrorAlert onClose={resetError} />}

            <SearchBar
                searchResultState={searchResultState}
                isLoading={!!filters.searchString && (isFetchingLatest || isFetchingJuiciest)}
                pageTitle={PAGE_TITLES.home}
            />
            <VStack px={{ base: 4, md: 5, xl: 0 }} m={0} gap={0} w='100%'>
                <LatestRecipesSection recipes={latestData} markdownText={markdownText} />
                <JuiciestRecipesSection recipes={juiciestData} markdownText={markdownText} />
                <BlogsSection />
                <RelevantKitchenSection
                    title={randomCategory.categoryRu}
                    description={randomCategory.categoryDescription}
                    data={relevantData}
                />
            </VStack>
        </ContentPageWrapper>
    );
};

export default HomePage;
