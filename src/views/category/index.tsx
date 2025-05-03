import { VStack } from '@chakra-ui/react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { Loader } from '~/components/layouts-components';
import { SearchBar } from '~/components/layouts-components/SearchBar';
import {
    CategorySection,
    CategorySectionNext,
    PageWrapper,
    ServerErrorAlert,
} from '~/components/shared-components';
import { EXCLUDED_ROUTES, PAGE_TITLES } from '~/constants';
import { useCategoryRecieptsQuery, useJuciestRecieptsQuery } from '~/redux/query/create-api';
import { setAppError, userErrorSelector } from '~/redux/store/app-slice';
import { NavigationConfig, RecipeProps } from '~/types';
import { getRandomCategory, populateRecieptCategory } from '~/utils';

const CategoryPage: React.FC<{ navigationConfig: NavigationConfig }> = ({ navigationConfig }) => {
    const { category, subcategory } = useParams<{ category: string; subcategory: string }>();

    const { subCategoriesByIds, categoriesByIds, navigationTree } = navigationConfig;
    const currentCategory = navigationTree.find((e) => e.categoryEn === category);
    const currentSubCategory = currentCategory?.subCategories?.find(
        (e) => e.subcategoryEn === subcategory,
    );

    const { categoryRu, categoryDescription, categoryId } = currentCategory || {};
    const { apiQureryId } = currentSubCategory || {};

    const error = useSelector(userErrorSelector);
    const dispatch = useDispatch();

    const resetError = useCallback(() => {
        dispatch(setAppError(null));
    }, [dispatch]);

    const randomCategory = useMemo(
        () => getRandomCategory(categoriesByIds, categoryId),
        [categoriesByIds, categoryId],
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

    const isJuiciestPage: boolean = category === EXCLUDED_ROUTES.juiciest;

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
    } = useCategoryRecieptsQuery({ id: randomCategory.apiQureryId }, { skip: !subCategoriesByIds });

    useEffect(() => {
        if (subCategoriesByIds && !isLoadingCategory && !isLoadingRandom) {
            if (categoryData?.length) {
                const populatedData = categoryData.map((e) =>
                    populateRecieptCategory(e, subCategoriesByIds),
                );
                setCategoryReciepts((prevData) =>
                    page === 1 ? populatedData : [...prevData, ...populatedData],
                );
            }

            if (randomCategory) {
                if (randomCategoryReciepts?.length) {
                    const { categoryRu, categoryDescription } = randomCategory;

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
        category,
        subcategory,
        subCategoriesByIds,
        page,
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
            <SearchBar
                pageTitle={(!isJuiciestPage ? categoryRu : PAGE_TITLES.juiciest) || ''}
                pageDescription={categoryDescription}
            />
            <VStack px={{ base: 4, md: 5, xl: 0 }} m={0} gap={0} w='100%'>
                {!isErrorCategory && categoryReciepts?.length && (
                    <CategorySection
                        activeSubcategory={subcategory}
                        categoryData={currentCategory}
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
