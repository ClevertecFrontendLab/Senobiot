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

import { TEST_IDS } from '~/constants';
import { Ingredients } from '~/types';

import IngridientItem from './Item';

type IngridientsProps = {
    ingredients: Ingredients[];
    defaultPortions: number;
};

export const IngridientsSection: React.FC<IngridientsProps> = ({
    ingredients,
    defaultPortions,
}) => {
    const [portions, setPortions] = useState<number>(defaultPortions);

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
                        <NumberIncrementStepper
                            data-test-id={TEST_IDS.portionsIncrement}
                            onClick={() => setPortions((prev) => prev + 1)}
                        />
                        <NumberDecrementStepper
                            data-test-id={TEST_IDS.poritonsDecrement}
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
                            index={index}
                            key={index}
                            title={title}
                            count={+count * (portions / defaultPortions)}
                            measureUnit={measureUnit}
                            isGrayed={!!(index % 2)}
                        />
                    );
                })}
            </VStack>
        </VStack>
    );
};
