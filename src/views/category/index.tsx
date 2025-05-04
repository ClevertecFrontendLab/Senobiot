import { VStack } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
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
import { setCurrentLocation } from '~/redux';
import { useCategoryRecieptsQuery } from '~/redux/query/create-api';
import { setAppError, userErrorSelector } from '~/redux/store/app-slice';
import { AllCategories, Filters, NavigationConfig, RecipeProps } from '~/types';
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

    const [randomCategory, setRandomCategory] = useState<{
        randomCategory: AllCategories;
        subcategoriesIds: string;
    } | null>(null);
    const [filters, setFilters] = useState<Filters>({});
    const [categoryReciepts, setCategoryReciepts] = useState<RecipeProps[]>([]);
    const [page, setPage] = useState<number>(1);
    const [randomCategoryData, setRandomCategoryData] = useState<{
        category: { title: string; description?: string };
        reciepts?: RecipeProps[];
    }>();

    const getMore = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const isJuiciest: boolean = category === EXCLUDED_ROUTES.juiciest;

    const {
        data: { data: categoryData, meta } = {},
        isLoading: isLoadingCategory,
        isError: isErrorCategory,
    } = useCategoryRecieptsQuery({
        ...filters,
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
        if (subCategoriesByIds && !isLoadingCategory && !isLoadingRandom) {
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

        if (!isErrorCategory && !isErrorRandom) {
            resetError();
        }

        if (isErrorCategory || isErrorRandom) {
            dispatch(setAppError('Error'));
        }
    }, [
        categoryData,
        currentCategory,
        randomCategory,
        randomCategoryReciepts,
        isJuiciest,
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
        const randomCategory = getRandomCategory(categoriesByIds, categoryId);
        const subcategoriesIds =
            randomCategory?.subCategories?.map((e) => e.apiQureryId).join(',') || '';
        setRandomCategory({ randomCategory, subcategoriesIds });
        setPage(1);
    }, [categoryId, categoriesByIds]);

    if (isLoadingCategory) {
        return <Loader />;
    }

    return (
        <PageWrapper>
            {error && <ServerErrorAlert onClose={resetError} />}
            <SearchBar
                setFilters={setFilters}
                pageTitle={(!isJuiciest ? categoryRu : PAGE_TITLES.juiciest) || ''}
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
                        noFooter={!!meta?.totalPages && page >= meta.totalPages}
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
