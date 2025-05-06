import { Flex, VStack } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';

import { Loader } from '~/components/layouts-components';
import {
    CategoryHeader,
    CookingSteps,
    IngridientsSection,
    NutritionInfo,
    PageWrapper,
    RecieptSectionCard,
    ServerErrorAlert,
    Slider,
} from '~/components/shared-components';
import { AuthorCard } from '~/components/shared-components/Authors';
import { EXCLUDED_ROUTES, PAGE_TITLES } from '~/constants';
import { PADDINGS } from '~/constants/styles';
import { setCurrentLocation } from '~/redux';
import { useRecipeRequests } from '~/redux/query/utils';
import { setAppError, userErrorSelector } from '~/redux/store/app-slice';
import { LocationParams, NavigationConfig, RecipeProps } from '~/types';
import { populateRecieptCategory } from '~/utils';

const authorData = {
    id: 1,
    name: 'Сергей Разумов',
    email: '@serge25',
    profilePic: '/avatars/avatar-5.png',
    subscribers: 125,
};

const RecieptPage: React.FC<{ navigationConfig: NavigationConfig }> = ({ navigationConfig }) => {
    const { id, category, subcategory } = useParams<LocationParams>();
    const { subCategoriesByIds, navigationTree } = navigationConfig;
    const navigate = useNavigate();

    const [reciept, setReciept] = useState<RecipeProps>();
    const [latestReciepts, setLatestReciepts] = useState<RecipeProps[]>([]);
    const dispatch = useDispatch();
    const error = useSelector(userErrorSelector);
    const resetError = useCallback(() => {
        dispatch(setAppError(null));
    }, [dispatch]);

    const {
        latestData,
        recieptData,
        isLoadingReciept,
        isErrorReciept,
        isErrorLatest,
        isLoadingLatest,
    } = useRecipeRequests({ recieptId: id, isJuiciest: true });

    useEffect(() => {
        if (subCategoriesByIds) {
            if (recieptData && !isLoadingReciept) {
                const populatedData = populateRecieptCategory(recieptData, subCategoriesByIds);
                setReciept(populatedData);

                const currentCategory = navigationTree.find((e) => e.categoryEn === category);

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
                                reciept: { label: populatedData.title },
                            }),
                        );
                    }
                } else if (category === EXCLUDED_ROUTES.juiciest) {
                    dispatch(
                        setCurrentLocation({
                            category: {
                                label: PAGE_TITLES.juiciest,
                                route: `/${EXCLUDED_ROUTES.juiciest}`,
                            },
                            reciept: { label: populatedData.title },
                        }),
                    );
                }
            }

            if (latestData && !isLoadingLatest) {
                const populatedData = latestData.map((e) =>
                    populateRecieptCategory(e, subCategoriesByIds),
                );
                setLatestReciepts(populatedData);
            }
        }

        if (isErrorReciept) {
            navigate(-1);
            dispatch(setAppError('Error'));
        }

        if (isErrorLatest) {
            dispatch(setAppError('Error'));
        }
    }, [
        category,
        subcategory,
        navigationTree,
        recieptData,
        latestData,
        isLoadingReciept,
        isLoadingLatest,
        isErrorReciept,
        isErrorLatest,
        subCategoriesByIds,
        navigate,
        dispatch,
    ]);

    if (isLoadingReciept) {
        return <Loader />;
    }

    return (
        <PageWrapper pt={PADDINGS.pageRecieptTop}>
            {error && <ServerErrorAlert onClose={resetError} />}
            {reciept && (
                <VStack px={{ base: 4, md: 5, xl: 0 }} m={0} gap={0} w='100%'>
                    <RecieptSectionCard reciept={reciept} />
                    <VStack
                        gap={{ base: 6, xl: 8 }}
                        maxW='668px'
                        mx='auto'
                        mt={{ base: 6, xl: 8 }}
                        mb={{ base: 10, xl: 14 }}
                        w='100%'
                    >
                        <NutritionInfo nutritionValue={reciept.nutritionValue} />
                        <IngridientsSection
                            ingredients={reciept.ingredients}
                            defaultPortions={reciept.portions}
                        />
                        <CookingSteps steps={reciept.steps} />
                        <AuthorCard authorData={authorData} />
                    </VStack>
                    <Flex mb={PADDINGS.subsectionHeaderMb} direction='column' w='100%'>
                        <CategoryHeader mb={PADDINGS.subsectionHeaderMb} title='Новые рецепты' />
                        <Slider slides={latestReciepts} />
                    </Flex>
                </VStack>
            )}
        </PageWrapper>
    );
};

export default RecieptPage;
