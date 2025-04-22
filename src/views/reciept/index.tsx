import { VStack } from '@chakra-ui/react';
import { useLocation } from 'react-router';

import {
    CookingSteps,
    Ingridients,
    NutritionInfo,
    RecieptSectionCard,
} from '~/components/shared-components';
import PageWrapper from '~/components/shared-components/PageWrapper';
import { PADDINGS } from '~/constants/styles';
import mockRespone from '~/data/data.json';

const data = JSON.parse(JSON.stringify(mockRespone)); // ТУТ НАДО ПЕРЕХВАТЫВАТЬ УРЛ

const RecieptPage: React.FC = () => {
    const { pathname } = useLocation();
    const pathSegments = pathname.split('/');
    const reciept = data.find(
        (e: { id: string }) => e.id === pathSegments[pathSegments.length - 1],
    );

    return (
        <PageWrapper pt={PADDINGS.pageRecieptTop}>
            <RecieptSectionCard reciept={reciept} />
            <VStack gap={{ base: 6, xl: 8 }} maxW='668px' mx='auto' mt={{ base: 6, xl: 8 }}>
                <NutritionInfo nutritionValue={reciept.nutritionValue} />
                <Ingridients ingredients={reciept.ingredients} />
                <CookingSteps steps={reciept.steps} />
            </VStack>
        </PageWrapper>
    );
};

export default RecieptPage;
