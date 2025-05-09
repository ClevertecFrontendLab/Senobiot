import { Flex } from '@chakra-ui/react';
import React from 'react';

import { PAGE_TITLES } from '~/constants';
import { PADDINGS } from '~/constants/styles';
import { RecipeProps } from '~/types';

import { CategoryHeader, Slider } from '../..';

interface LatestRecipesSectionProps {
    recipes?: RecipeProps[];
    markdownText?: string;
}

export const LatestRecipesSection: React.FC<LatestRecipesSectionProps> = ({
    recipes,
    markdownText,
}) => {
    if (!recipes?.length) return null;

    return (
        <Flex mb={PADDINGS.subsectionHeaderMb} direction='column' w='100%'>
            <CategoryHeader mb={PADDINGS.subsectionHeaderMb} title={PAGE_TITLES.slider} />
            <Slider markdownText={markdownText} slides={recipes} />
        </Flex>
    );
};
