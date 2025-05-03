import { Flex, VStack } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';

import { Loader } from '~/components/layouts-components';
import {
    CategoryHeader,
    CookingSteps,
    Ingridients,
    NutritionInfo,
    PageWrapper,
    RecieptSectionCard,
    ServerErrorAlert,
    Slider,
} from '~/components/shared-components';
import { AuthorCard } from '~/components/shared-components/Authors';
import { PADDINGS } from '~/constants/styles';
import { useLatestRecieptsQuery, useRecieptQuery } from '~/redux/query/create-api';
import { getSubCategoriesByIds } from '~/redux/selectors';
import { setAppError, userErrorSelector } from '~/redux/store/app-slice';
import { RecipeProps } from '~/types';
import { populateRecieptCategory } from '~/utils';

//непонятно где автором брать в рецепта нет
const authorData = {
    id: 1,
    name: 'Сергей Разумов',
    email: '@serge25',
    profilePic: '/avatars/avatar-5.png',
    subscribers: 125,
};

const RecieptPage: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const subCategories = useSelector(getSubCategoriesByIds);
    const [reciept, setReciept] = useState<RecipeProps>();
    const [latestReciepts, setLatestReciepts] = useState<RecipeProps[]>([]);
    const dispatch = useDispatch();
    const error = useSelector(userErrorSelector);
    const resetError = useCallback(() => {
        dispatch(setAppError(null));
    }, [dispatch]);
    const {
        data: recieptData,
        isLoading: isLoadingReciept,
        isError: isRecieptEror,
    } = useRecieptQuery(id || '', { skip: !id });
    const {
        data: { data: latestData } = {},
        isLoading: isLoadingLatest,
        isError: isErrorLatest,
    } = useLatestRecieptsQuery(undefined, { skip: !subCategories });

    useEffect(() => {
        if (subCategories) {
            if (recieptData && !isLoadingReciept) {
                const populatedData = populateRecieptCategory(recieptData, subCategories);
                setReciept(populatedData);
            }
            if (latestData && !isLoadingLatest) {
                const populatedData = latestData.map((e) =>
                    populateRecieptCategory(e, subCategories),
                );
                setLatestReciepts(populatedData);
            }
        }

        if (isRecieptEror) {
            navigate(-1);
            dispatch(setAppError('Error'));
        }

        if (isErrorLatest) {
            dispatch(setAppError('Error'));
        }
    }, [
        recieptData,
        latestData,
        isLoadingReciept,
        isLoadingLatest,
        isRecieptEror,
        isErrorLatest,
        subCategories,
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
                        <Ingridients
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
