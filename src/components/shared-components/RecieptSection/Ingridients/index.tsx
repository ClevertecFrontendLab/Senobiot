import {
    Flex,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Text,
    VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';

import { RecipeProps } from '~/types';

import IngridientItem from './Item';

export const Ingridients: React.FC<{ ingredients: RecipeProps['ingredients'] }> = ({
    ingredients,
}) => {
    const [portions, setPortions] = useState<number>(1);
    console.log(portions);
    return (
        <VStack w='100%'>
            <Flex fontFamily='Inter' gap={4} alignItems='center' w='100%' pl={{ base: 2, md: 6 }}>
                <Text
                    flex='1 1 50%'
                    fontSize='12px'
                    fontWeight='700'
                    letterSpacing='0.05em'
                    color='lime.600'
                >
                    ИНГРЕДИЕНТЫ
                </Text>
                <Text fontSize='12px' fontWeight='700' letterSpacing='0.05em' color='lime.600'>
                    ПОРЦИЙ
                </Text>
                <NumberInput
                    defaultValue={portions}
                    min={1}
                    max={100}
                    borderRadius='6px'
                    maxW='73px'
                >
                    <NumberInputField fontSize='16px' />
                    <NumberInputStepper>
                        <NumberIncrementStepper onClick={() => setPortions((prev) => prev + 1)} />
                        <NumberDecrementStepper
                            onClick={() => setPortions((prev) => Math.max(prev - 1, 1))}
                        />
                    </NumberInputStepper>
                </NumberInput>
            </Flex>
            <VStack w='100%'>
                {ingredients.map((ingredient, index) => {
                    const { title, count, measureUnit } = ingredient;

                    return (
                        <IngridientItem
                            key={index}
                            title={title}
                            count={+count * portions}
                            measureUnit={measureUnit}
                            isGrayed={!!(index % 2)}
                        />
                    );
                })}
            </VStack>
        </VStack>
    );
};
