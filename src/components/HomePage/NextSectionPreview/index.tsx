import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

import TextRegular from '~/components/shared/Text/Regular';
import TitleText from '~/components/shared/Text/Title';
import { dishesCategories, dishesList } from '~/data';

import NextSectionCard from './NextSectionCard';
import NextSectionCardMinimized from './NextSectionCardMinimized';

const { description: dishCategoriesDescription, name: dishesCategoryTitle } = dishesCategories[6]; // before get true api

const NextSectionPreview: React.FC = () => (
    <Box>
        <Flex>
            <Box flexBasis='50%'>
                <TitleText titleText={dishesCategoryTitle} />
            </Box>
            <Box flexBasis='50%'>
                <TextRegular regText={dishCategoriesDescription} />
            </Box>
        </Flex>
        <Flex>
            {' '}
            {dishesList.map((dish, index) => {
                if (index > 2 && index < 5) {
                    const { name, subcategory, description } = dish;
                    const iconUrl = dishesCategories.find((e) => e.name === subcategory)?.icon;

                    return (
                        <NextSectionCard
                            title={name}
                            description={description}
                            categoryText={subcategory}
                            categoryBg='lime.50'
                            categoryIconUrl={iconUrl}
                        />
                    );
                }
            })}
            <Flex wrap='wrap'>
                {dishesList.map((dish, index) => {
                    if (index < 3) {
                        const { name, subcategory } = dish;
                        const iconUrl = dishesCategories.find((e) => e.name === subcategory)?.icon;

                        return <NextSectionCardMinimized title={name} iconUrl={iconUrl} />;
                    }
                })}
            </Flex>
        </Flex>
    </Box>
);

export default NextSectionPreview;
