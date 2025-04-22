import { Flex, VStack } from '@chakra-ui/react';
import { useLocation } from 'react-router';

import {
    CategoryHeader,
    CookingSteps,
    Ingridients,
    NutritionInfo,
    RecieptSectionCard,
    Slider,
} from '~/components/shared-components';
import { AuthorCard } from '~/components/shared-components/Authors';
import PageWrapper from '~/components/shared-components/PageWrapper';
import { PADDINGS } from '~/constants/styles';
import mockRespone from '~/data/data.json';

const data = JSON.parse(JSON.stringify(mockRespone)); // ТУТ НАДО ПЕРЕХВАТЫВАТЬ УРЛ
const sliderData = data.slice(0, 10);
//непонятно где автором брать в рецепта нет
const authorData = {
    id: 1,
    name: 'Сергей Разумов',
    email: '@serge25',
    profilePic: '/avatars/avatar-5.png',
    subscribers: 125,
};

const RecieptPage: React.FC = () => {
    const { pathname } = useLocation();
    const pathSegments = pathname.split('/');
    const reciept = data.find(
        (e: { id: string }) => e.id === pathSegments[pathSegments.length - 1],
    );

    return (
        <PageWrapper pt={PADDINGS.pageRecieptTop}>
            <RecieptSectionCard reciept={reciept} />
            <VStack
                gap={{ base: 6, xl: 8 }}
                maxW='668px'
                mx='auto'
                mt={{ base: 6, xl: 8 }}
                mb={{ base: 10, xl: 14 }}
            >
                <NutritionInfo nutritionValue={reciept.nutritionValue} />
                <Ingridients ingredients={reciept.ingredients} />
                <CookingSteps steps={reciept.steps} />
                <AuthorCard authorData={authorData} />
            </VStack>
            <Flex mb={PADDINGS.subsectionHeaderMb} direction='column'>
                <CategoryHeader mb={PADDINGS.subsectionHeaderMb} title='Новые рецепты' />
                <Slider slides={sliderData} />
            </Flex>
        </PageWrapper>
    );
};

export default RecieptPage;
