import { VStack } from '@chakra-ui/react';
import { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';

import { Loader } from '~/components/layouts-components';
import {
    CookingSteps,
    IngridientsSection,
    LatestRecipesSection,
    NutritionInfo,
    PageWrapper,
    RecieptSectionCard,
    ServerErrorAlert,
} from '~/components/shared-components';
import { AuthorCard } from '~/components/shared-components/Authors';
import { PADDINGS } from '~/constants/styles';
import { useBreadCrumbs } from '~/hooks';
import { useRecipeRequests } from '~/redux/query/utils';
import { setAppError, userErrorSelector } from '~/redux/store/app-slice';
import { LocationParams, NavigationConfig } from '~/types';
import { useCurrentLocation } from '~/utils';

const authorData = {
    id: 1,
    name: 'Сергей Разумов',
    email: '@serge25',
    profilePic: '/avatars/avatar-5.png',
    subscribers: 125,
};

const RecieptPage: React.FC<{ navigationConfig: NavigationConfig }> = ({ navigationConfig }) => {
    const { setBreadCrumbs } = useBreadCrumbs();
    const params = useParams<LocationParams>();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const idKeys = useMemo(() => navigationConfig.subCategoriesByIds, [navigationConfig]);
    const error = useSelector(userErrorSelector);
    const resetError = useCallback(() => {
        dispatch(setAppError(null));
    }, [dispatch]);

    const {
        latestData,
        recipeData,
        isLoadingRecipe,
        isErrorRecipe,
        isErrorLatest,
        isLoadingLatest,
    } = useRecipeRequests({ recipeId: params.id, idKeys });

    const { breadcrumbs } = useCurrentLocation(params, navigationConfig, recipeData?.title);

    useEffect(() => {
        setBreadCrumbs(breadcrumbs);
    }, [breadcrumbs, setBreadCrumbs]);

    useEffect(() => {
        if (isErrorLatest || isErrorRecipe) {
            dispatch(setAppError(true));
            if (isErrorRecipe) {
                navigate(-1);
            }
        }
    }, [isErrorLatest, isErrorRecipe, dispatch, navigate]);

    if (isLoadingRecipe || isLoadingLatest) {
        return <Loader />;
    }

    return (
        <PageWrapper pt={PADDINGS.pageRecieptTop}>
            {error && <ServerErrorAlert onClose={resetError} />}
            <VStack px={{ base: 4, md: 5, xl: 0 }} m={0} gap={0} w='100%'>
                <RecieptSectionCard recipe={recipeData} />
                <VStack
                    gap={{ base: 6, xl: 8 }}
                    maxW='668px'
                    mx='auto'
                    mt={{ base: 6, xl: 8 }}
                    mb={{ base: 10, xl: 14 }}
                    w='100%'
                >
                    <NutritionInfo nutritionValue={recipeData?.nutritionValue} />
                    <IngridientsSection data={recipeData} />
                    <CookingSteps data={recipeData} />
                    <AuthorCard authorData={authorData} />
                </VStack>
                <LatestRecipesSection recipes={latestData} />
            </VStack>
        </PageWrapper>
    );
};

export default RecieptPage;
