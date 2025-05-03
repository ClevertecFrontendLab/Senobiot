import { VStack } from '@chakra-ui/react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Loader } from '~/components/layouts-components';
import { SearchBar } from '~/components/layouts-components/SearchBar';
import {
    CategorySection,
    CategorySectionNext,
    PageWrapper,
    ServerErrorAlert,
} from '~/components/shared-components';
import { PAGE_TITLES } from '~/constants';
import { useCategoryRecieptsQuery, useJuciestRecieptsQuery } from '~/redux/query/create-api';
import { getCategoriesByIds, getSubCategoriesByIds } from '~/redux/selectors';
import { setAppError, userErrorSelector } from '~/redux/store/app-slice';
import { AllCategories, RecipeProps } from '~/types';
import { getRandomCategory, populateRecieptCategory } from '~/utils';

const CategoryPage: React.FC<{ pageData: AllCategories }> = ({ pageData }) => {
    const { categoryRu, apiQureryId, categoryDescription, categoryId } = pageData;
    const error = useSelector(userErrorSelector);
    const dispatch = useDispatch();
    const subCategories = useSelector(getSubCategoriesByIds);
    const categories = useSelector(getCategoriesByIds);
    const resetError = useCallback(() => {
        dispatch(setAppError(null));
    }, [dispatch]);
    const randomCategory = useMemo(
        () => getRandomCategory(categories, categoryId),
        [categories, categoryId],
    );
    const [categoryReciepts, setCategoryReciepts] = useState<RecipeProps[]>([]);
    const [page, setPage] = useState<number>(1);
    const [randomCategoryData, setRandomCategoryData] = useState<{
        category: { title: string; description?: string };
        reciepts?: RecipeProps[];
    }>();

    const getMore = () => {
        setPage((prevPage) => prevPage + 1);
    };
    //   const isJuiciestPage: boolean = categoryRu === PAGE_TITLES.juiciest;
    //     const {
    //         data: { data: categoryData, meta } = {},
    //         isLoading: isLoadingCategory,
    //         isError: isErrorCategory,
    //     } = !isJuiciestPage ? useCategoryRecieptsQuery({ page, id: apiQureryId }) : useJuciestRecieptsQuery(
    //         { limit: 8, page },
    //         { skip: !categories },
    //     );

    const isJuiciestPage: boolean = categoryRu === PAGE_TITLES.juiciest;
    const categoryQuery = useCategoryRecieptsQuery(
        { page, id: apiQureryId },
        { skip: isJuiciestPage },
    );
    const juiciestQuery = useJuciestRecieptsQuery({ limit: 8, page }, { skip: !isJuiciestPage });
    const categoryData = isJuiciestPage ? juiciestQuery.data?.data : categoryQuery.data?.data;
    const isLoadingCategory = isJuiciestPage ? juiciestQuery.isLoading : categoryQuery.isLoading;
    const isErrorCategory = isJuiciestPage ? juiciestQuery.isError : categoryQuery.isError;
    const meta = isJuiciestPage ? juiciestQuery.data?.meta : categoryQuery.data?.meta;

    const {
        data: { data: randomCategoryReciepts } = {},
        isLoading: isLoadingRandom,
        isError: isErrorRandom,
    } = useCategoryRecieptsQuery({ id: randomCategory.apiQureryId }, { skip: !subCategories });

    useEffect(() => {
        if (subCategories && !isLoadingCategory && !isLoadingRandom) {
            if (categoryData?.length) {
                const populatedData = categoryData.map((e) =>
                    populateRecieptCategory(e, subCategories),
                );
                setCategoryReciepts((prevData) =>
                    page === 1 ? populatedData : [...prevData, ...populatedData],
                );
            }

            if (randomCategory) {
                if (randomCategoryReciepts?.length) {
                    const { categoryRu, categoryDescription } = randomCategory;

                    const populatedData = randomCategoryReciepts.map((e) =>
                        populateRecieptCategory(e, subCategories),
                    );

                    setRandomCategoryData({
                        category: { title: categoryRu, description: categoryDescription },
                        reciepts: populatedData,
                    });
                }
            }
        }

        if (!isErrorCategory && !isErrorRandom) {
            resetError();
        }

        if (isErrorCategory || isErrorRandom) {
            dispatch(setAppError('Error'));
        }
    }, [
        categoryData,
        randomCategory,
        randomCategoryReciepts,
        isLoadingCategory,
        isLoadingRandom,
        isErrorCategory,
        isErrorRandom,
        categories,
        page,
        subCategories,
        dispatch,
        resetError,
    ]);

    useEffect(() => {
        setPage(1);
    }, [categoryId]);

    if (isLoadingCategory) {
        return <Loader />;
    }

    return (
        <PageWrapper>
            {error && <ServerErrorAlert onClose={resetError} />}
            <SearchBar pageTitle={categoryRu} pageDescription={categoryDescription} />
            <VStack px={{ base: 4, md: 5, xl: 0 }} m={0} gap={0} w='100%'>
                {!isErrorCategory && categoryReciepts?.length && (
                    <CategorySection
                        categoryData={pageData}
                        recieptsData={categoryReciepts}
                        categoryButtonText='Загрузить еще'
                        noHeader={true}
                        noFooter={meta?.totalPages === page}
                        onClick={getMore}
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
