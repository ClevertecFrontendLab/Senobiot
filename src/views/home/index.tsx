import { Flex, VStack } from '@chakra-ui/react';
// import { useLatestRecieptsQuery } from '~/redux/query/create-api';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Loader } from '~/components/layouts-components';
import { SearchBar } from '~/components/layouts-components/SearchBar';
import { ServerErrorAlert, Slider } from '~/components/shared-components';
import { CategoryHeader } from '~/components/shared-components';
import { BlogsSection } from '~/components/shared-components';
// import { CategorySectionNext } from '~/components/shared-components';
import PageWrapper from '~/components/shared-components/PageWrapper';
// import { navTree } from '~/configs/navigationConfig'; // TODO remove after true api
import { PADDINGS } from '~/constants/styles';
import { useJuciestRecieptsQuery, useLatestRecieptsQuery } from '~/redux/query/create-api';
// import { setEmptySearch } from '~/redux/reducers';
import {
    // getActiveSearch,
    getSubCategoriesByIds,
} from '~/redux/selectors';
import { setAppError, userErrorSelector } from '~/redux/store/app-slice';
import { RecipeProps } from '~/types';
// import { ApplicationState } from '~/redux/store/configure-store';
import {
    populateRecieptCategory,
    //  searchByTitle
} from '~/utils';

import JuciestSection from './juciest-preview';

// const nexSection = navTree.find((e) => e.navKey === 'vegan-cuisine'); // TODO remove after true api

const HomePage: React.FC = () => {
    const activeSearch = ''; /// REMOVE!!!!!!!!!!!
    const [latestReciepts, setLatestReciepts] = useState<RecipeProps[]>([]);
    const [juciestReciepts, setJuciestReciepts] = useState<RecipeProps[]>([]);
    const dispatch = useDispatch();
    const categories = useSelector(getSubCategoriesByIds);
    const error = useSelector(userErrorSelector);
    const resetError = useCallback(() => {
        dispatch(setAppError(null));
    }, [dispatch]);

    const {
        data: { data: latestData } = {},
        isLoading: isLoadingLatest,
        isError: isErrorLatest,
    } = useLatestRecieptsQuery(undefined, { skip: !categories });
    const {
        data: { data: juciestData } = {},
        isLoading: isLoadingJuciest,
        isError: isErrorJuciest,
    } = useJuciestRecieptsQuery(4, {
        skip: !categories,
    });

    useEffect(() => {
        if (categories && !isLoadingLatest && !isLoadingJuciest) {
            if (latestData) {
                const populatedData = latestData.map((e) => populateRecieptCategory(e, categories));
                setLatestReciepts(populatedData);
            }
            if (juciestData) {
                const populatedData = juciestData.map((e) =>
                    populateRecieptCategory(e, categories),
                );
                setJuciestReciepts(populatedData);
            }

            if (!isErrorLatest && !isErrorJuciest) {
                resetError();
            }

            if (isErrorLatest || isErrorJuciest) {
                dispatch(setAppError('Error'));
            }
        }
    }, [
        categories,
        dispatch,
        juciestData,
        latestData,
        isLoadingLatest,
        isLoadingJuciest,
        isErrorLatest,
        isErrorJuciest,
        resetError,
    ]);

    // useEffect(() => {
    //     if (isErrorLatest || isErrorJuciest) {
    //         dispatch(setAppError('Error'));
    //     }
    // }, [isErrorLatest, isErrorJuciest, dispatch]);

    if (isLoadingLatest || isLoadingJuciest) {
        return <Loader />;
    }

    // const initialData = useSelector((state: ApplicationState) => state.reciepts.initial);
    // let data = useSelector((state: ApplicationState) => state.reciepts.filtrated);
    // const activeSearch = useSelector(getActiveSearch);
    // if (activeSearch) {
    //     data = searchByTitle(data, activeSearch);
    //     if (!data?.length) {
    //         dispatch(setEmptySearch(true));
    //     } else {
    //         dispatch(setEmptySearch(false));
    //     }
    // }

    return (
        <PageWrapper>
            {error && <ServerErrorAlert onClose={resetError} />}
            <SearchBar pageTitle='Приятного аппетита!' />
            <VStack px={{ base: 4, md: 5, xl: 0 }} m={0} gap={0} w='100%'>
                {latestReciepts?.length && (
                    <Flex mb={PADDINGS.subsectionHeaderMb} direction='column' w='100%'>
                        <CategoryHeader mb={PADDINGS.subsectionHeaderMb} title='Новые рецепты' />
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
                {/* <CategorySectionNext
                    title={nexSection?.title || ''}
                    description={nexSection?.description || ''}
                    data={initialData}
                /> */}
            </VStack>
        </PageWrapper>
    );
};

export default HomePage;
