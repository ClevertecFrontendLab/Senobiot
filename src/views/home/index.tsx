import { Flex, VStack } from '@chakra-ui/react';
// import { useLatestRecieptsQuery } from '~/redux/query/create-api';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SearchBar } from '~/components/layouts-components/SearchBar';
import { Slider } from '~/components/shared-components';
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
import { setAppLoader } from '~/redux/store/app-slice';
import { RecipeProps } from '~/types';
// import { ApplicationState } from '~/redux/store/configure-store';
import {
    populateRecieptCategory,
    //  searchByTitle
} from '~/utils';

import { JuciestSection } from './juciest';

// const nexSection = navTree.find((e) => e.navKey === 'vegan-cuisine'); // TODO remove after true api

const HomePage: React.FC = () => {
    const activeSearch = ''; /// REMOVE!!!!!!!!!!!
    const [latestReciepts, setLatestReciepts] = useState<RecipeProps[]>([]);
    const [juciestReciepts, seJuciestReciepts] = useState<RecipeProps[]>([]);
    const dispatch = useDispatch();
    const { data: latestData } = useLatestRecieptsQuery();
    const { data: juciestData, isLoading } = useJuciestRecieptsQuery();
    const categories = useSelector(getSubCategoriesByIds);

    // if (!categories) return;

    useEffect(() => {
        if (!isLoading) {
            if (latestData) {
                const populatedData = latestData.map((e) => populateRecieptCategory(e, categories));
                setLatestReciepts(populatedData);
                console.log(populatedData);
            }

            if (juciestData) {
                const populatedData = juciestData.map((e) =>
                    populateRecieptCategory(e, categories),
                );
                seJuciestReciepts(populatedData);
                console.log(populatedData);
            }

            dispatch(setAppLoader(false));
        }
    }, [categories, dispatch, juciestData, latestData, isLoading]);

    if (!latestReciepts.length) return;

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
            <SearchBar pageTitle='Приятного аппетита!' />
            <VStack px={{ base: 4, md: 5, xl: 0 }} m={0} gap={0} w='100%'>
                <Flex mb={PADDINGS.subsectionHeaderMb} direction='column' w='100%'>
                    <CategoryHeader mb={PADDINGS.subsectionHeaderMb} title='Новые рецепты' />
                    <Slider activeSearch={activeSearch} slides={latestReciepts} />
                </Flex>
                {juciestReciepts?.length ? (
                    <JuciestSection
                        activeSearch={activeSearch}
                        data={juciestReciepts}
                        categoryTitle='Самое сочное'
                    />
                ) : (
                    ''
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
