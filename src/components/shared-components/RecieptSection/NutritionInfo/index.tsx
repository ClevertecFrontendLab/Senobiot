import { Flex } from '@chakra-ui/react';
import React from 'react';

import { NutritionValue } from '~/types';

import { TextRegular } from '../..';
import NutritionInfoItem from './NutritionInfoItem';

export const NutritionInfo: React.FC<{ nutritionValue: NutritionValue }> = ({ nutritionValue }) => (
    <Flex gap={3} direction='column' w='100%'>
        <TextRegular regText='* Калорийность на 1 порцию' regTextColor='blackAlpha.800' />
        <Flex direction={{ base: 'column', md: 'row' }} gap={3}>
            <NutritionInfoItem
                name='калорийность'
                value={nutritionValue.calories}
                measures='ККАЛ'
            />
            <NutritionInfoItem
                name='белки'
                value={nutritionValue.proteins || nutritionValue.protein || 0}
                measures='ГРАММ'
            />
            <NutritionInfoItem name='жиры' value={nutritionValue.fats} measures='ГРАММ' />
            <NutritionInfoItem
                name='углеводы'
                value={nutritionValue.carbohydrates}
                measures='ГРАММ'
            />
        </Flex>
    </Flex>
);
