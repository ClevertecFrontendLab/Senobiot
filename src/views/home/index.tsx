import { Flex } from '@chakra-ui/react';
import React from 'react';

import { Slider } from '~/components/shared-components';
import { CategoryHeader } from '~/components/shared-components';
import { BlogsSection } from '~/components/shared-components/BlogsSection';
import { navTree } from '~/configs/navigationConfig'; // TODO remove after true api
import { PADDINGS, WIDTHS } from '~/constants/styles';
import { dishesList, sliderData } from '~/data';

import {
    CategorySection,
    CategorySectionDataProps,
    CategorySectionNext,
} from '../../components/shared-components';

const nexSection = navTree.find((e) => e.navKey === 'vegan-cuisine'); // TODO remove after true api

export interface PageProps {
    categoryTitle?: string;
    categoryData?: CategorySectionDataProps[];
    categoryButtonText?: string;
}

const HomePage: React.FC<PageProps> = ({
    categoryTitle = 'Самое сочное',
    categoryData = sliderData,
    categoryButtonText = 'Вся подборка',
}) => (
    <Flex
        minH='100vh'
        mx={PADDINGS.sectionMx}
        px={{ base: 4, md: 5, xl: WIDTHS.sideMunu }}
        display='column'
        mb={250}
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
        <BlogsSection />
        <CategorySectionNext
            title={nexSection?.title || ''}
            description={nexSection?.description || ''}
            data={dishesList}
        />
    </Flex>
);

export default HomePage;
