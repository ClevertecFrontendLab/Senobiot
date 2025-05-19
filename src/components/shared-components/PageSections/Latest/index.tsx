import { Flex } from '@chakra-ui/react';
import React from 'react';

import { PAGE_TITLES } from '~/constants';
import { PADDINGS } from '~/constants/styles';
import { PreviewRecipesSectionProps } from '~/types';

import { CategoryHeader, Slider } from '../..';

export const LatestRecipesSection: React.FC<PreviewRecipesSectionProps> = ({
    recipes = [],
    markdownText,
}) => (
    <Flex mb={PADDINGS.subsectionHeaderMb} direction='column' w='100%'>
        <CategoryHeader mb={PADDINGS.subsectionHeaderMb} title={PAGE_TITLES.slider} />
        <Slider markdownText={markdownText} slides={recipes} />
    </Flex>
);
