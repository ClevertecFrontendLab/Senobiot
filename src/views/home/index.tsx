import { Flex } from '@chakra-ui/react';
import React from 'react';

import { Slider } from '~/components/shared-components';
import { CategoryHeader } from '~/components/shared-components';
import { PADDINGS, WIDTHS } from '~/constants/styles';
import { sliderData } from '~/data';

import { CategorySection, CategorySectionDataProps } from '../../components/shared-components';

export interface PageProps {
    categoryTitle?: string;
    categoryData?: CategorySectionDataProps[];
    categoryButtonText?: string;
}

const HomePage: React.FC<PageProps> = ({
    categoryTitle = 'Самое сочноe',
    categoryData = sliderData,
    categoryButtonText = 'Вся подборка',
}) => (
    <Flex
        minH='100vh'
        mx={PADDINGS.sectionMx}
        px={{ base: 4, md: 5, xl: WIDTHS.sideMunu }}
        display='column'
    >
        <Flex mb={PADDINGS.subsectionHeaderMb} direction='column'>
            <CategoryHeader mb={PADDINGS.subsectionHeaderMb} title='Новые рецепты' />
            <Slider slides={categoryData} />
        </Flex>
        <CategorySection
            categoryTitle={categoryTitle}
            data={categoryData}
            categoryButtonText={categoryButtonText}
            noFooter={true}
            noNavMenu={true}
        />
    </Flex>
);

export default HomePage;
