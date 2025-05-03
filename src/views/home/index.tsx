import { Flex, VStack } from '@chakra-ui/react';
// import { useLatestRecieptsQuery } from '~/redux/query/create-api';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Loader } from '~/components/layouts-components';
import { SearchBar } from '~/components/layouts-components/SearchBar';
import { ServerErrorAlert, Slider } from '~/components/shared-components';
import { CategoryHeader } from '~/components/shared-components';
import { BlogsSection } from '~/components/shared-components';
import { CategorySectionNext } from '~/components/shared-components';
import PageWrapper from '~/components/shared-components/PageWrapper';
import { PAGE_TITLES } from '~/constants';
import { PADDINGS } from '~/constants/styles';
import {
    useCategoryRecieptsQuery,
    useJuciestRecieptsQuery,
    useLatestRecieptsQuery,
} from '~/redux/query/create-api';
// import { setEmptySearch } from '~/redux/reducers';
import {
    getCategoriesByIds,
    // getActiveSearch,
    getSubCategoriesByIds,
} from '~/redux/selectors';
import { setAppError, userErrorSelector } from '~/redux/store/app-slice';
import { RecipeProps } from '~/types';
import { getRandomCategory, populateRecieptCategory } from '~/utils';

import JuciestSection from './juciest-preview';

const HomePage: React.FC = () => {
    const activeSearch = ''; /// REMOVE!!!!!!!!!!!
    const [latestReciepts, setLatestReciepts] = useState<RecipeProps[]>([]);
    const [juciestReciepts, setJuciestReciepts] = useState<RecipeProps[]>([]);
    const [randomCategoryData, setRandomCategoryData] = useState<{
        category: { title: string; description?: string };
        reciepts?: RecipeProps[];
    }>({ category: { title: '', description: '' }, reciepts: [] });
    const dispatch = useDispatch();
    const subCategories = useSelector(getSubCategoriesByIds);
    const categories = useSelector(getCategoriesByIds);
    const error = useSelector(userErrorSelector);
    const resetError = useCallback(() => {
        dispatch(setAppError(null));
    }, [dispatch]);

    const randomCategoryId = useMemo(() => getRandomCategory(categories), [categories]);

    const {
        data: { data: latestData } = {},
        isLoading: isLoadingLatest,
        isError: isErrorLatest,
    } = useLatestRecieptsQuery(undefined, { skip: !subCategories });

    const {
        data: { data: juciestData } = {},
        isLoading: isLoadingJuciest,
        isError: isErrorJuciest,
    } = useJuciestRecieptsQuery(
        { limit: 4 },
        {
            skip: !subCategories,
        },
    );

    const {
        data: { data: randomCategoryReciepts } = {},
        isLoading: isLoadingRandom,
        isError: isErrorRandom,
    } = useCategoryRecieptsQuery({ id: randomCategoryId.apiQureryId }, { skip: !subCategories });

    useEffect(() => {
        if (subCategories && !isLoadingLatest && !isLoadingJuciest && !isLoadingRandom) {
            if (latestData) {
                const populatedData = latestData.map((e) =>
                    populateRecieptCategory(e, subCategories),
                );
                setLatestReciepts(populatedData);
            }

            if (juciestData) {
                const populatedData = juciestData.map((e) =>
                    populateRecieptCategory(e, subCategories),
                );
                setJuciestReciepts(populatedData);
            }

            if (randomCategoryReciepts) {
                const { categoryRu, categoryDescription } = randomCategoryId;

                const populatedData = randomCategoryReciepts.map((e) =>
                    populateRecieptCategory(e, subCategories),
                );

                setRandomCategoryData({
                    category: { title: categoryRu, description: categoryDescription },
                    reciepts: populatedData,
                });
            }

            if (!isErrorLatest && !isErrorJuciest && !isLoadingRandom && error) {
                resetError();
            }

            if (isErrorLatest || isErrorJuciest || isErrorRandom) {
                dispatch(setAppError('Error'));
            }
        }
    }, [
        juciestData,
        latestData,
        randomCategoryReciepts,
        randomCategoryId,
        isLoadingLatest,
        isLoadingJuciest,
        isLoadingRandom,
        isErrorLatest,
        isErrorJuciest,
        isErrorRandom,
        subCategories,
        error,
        dispatch,
        resetError,
    ]);

    if (isLoadingLatest || isLoadingJuciest) {
        return <Loader />;
    }

    return (
        <PageWrapper>
            {error && <ServerErrorAlert onClose={resetError} />}
            <SearchBar pageTitle={PAGE_TITLES.home} />
            <VStack px={{ base: 4, md: 5, xl: 0 }} m={0} gap={0} w='100%'>
                {latestReciepts?.length && (
                    <Flex mb={PADDINGS.subsectionHeaderMb} direction='column' w='100%'>
                        <CategoryHeader
                            mb={PADDINGS.subsectionHeaderMb}
                            title={PAGE_TITLES.slider}
                        />
                        <Slider activeSearch={activeSearch} slides={latestReciepts} />
                    </Flex>
                )}
                {juciestReciepts?.length && (
                    <JuciestSection
                        // activeSearch={activeSearch}
                        recieptsData={juciestReciepts}
                    />
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
