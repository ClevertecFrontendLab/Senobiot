import { Flex, VStack } from '@chakra-ui/react';
import React from 'react';

import { RecipeProps } from '~/types';

import { SubtitleText } from '../..';
import CookingStep from './Step';

export const CookingSteps: React.FC<{ data?: RecipeProps }> = ({ data }) => {
    if (!data || !data.steps || !data.steps.length) return null;

    const { steps } = data;

    return (
        <Flex gap={5} direction='column' w='100%'>
            <SubtitleText
                titleTextLh={{ base: '32px', xl: '48px' }}
                titleTextFz={{ base: '24px', xl: '48px' }}
                titleTextAlign='left'
                titleText='Шаги приготовления'
            />
            <VStack gap={{ base: 5 }}>
                {steps.map((step, index) => (
                    <CookingStep
                        key={index}
                        stepNumber={step.stepNumber}
                        description={step.description}
                        image={step.image}
                        isLastStep={index === steps.length - 1}
                    />
                ))}
            </VStack>
        </Flex>
    );
};
