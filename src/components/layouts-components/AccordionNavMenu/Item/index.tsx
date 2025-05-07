import {
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Box,
    HStack,
    Image,
    Text,
} from '@chakra-ui/react';
import React from 'react';
import { Link, useLocation } from 'react-router';

import { AllCategories } from '~/types';

import { buttonInnerWrapper, getButtonStyles, getSubCategoryButtonStyles } from './Item.styles';

const SideNavMenuItem: React.FC<AllCategories> = ({
    categoryRu,
    categoryEn,
    categoryIcon = '',
    subCategories = [],
    route,
}) => {
    const { pathname } = useLocation();

    return (
        <AccordionItem border={0}>
            {({ isExpanded }) => (
                <>
                    <Link data-test-id={categoryEn === 'vegan' && 'vegan-cuisine'} to={route}>
                        <AccordionButton sx={getButtonStyles(isExpanded)}>
                            <Box flex='1' textAlign='left'>
                                <HStack sx={buttonInnerWrapper}>
                                    <Image src={categoryIcon} alt={categoryRu} boxSize='24px' />
                                    <Text cursor='pointer'>{categoryRu}</Text>
                                </HStack>
                            </Box>
                        </AccordionButton>
                    </Link>
                    <AccordionPanel textAlign='left' pb={0} pr={0}>
                        {subCategories.map((subcategory, index) => {
                            const { subcategoryEn, route } = subcategory;
                            const isActive = pathname === route;

                            return (
                                <Link
                                    to={subcategory.route}
                                    key={index}
                                    data-test-id={`${subcategoryEn}${isActive ? '-active' : ''}`}
                                >
                                    <Text sx={getSubCategoryButtonStyles(isActive)}>
                                        {subcategory.subcategoryRu}
                                    </Text>
                                </Link>
                            );
                        })}
                    </AccordionPanel>
                </>
            )}
        </AccordionItem>
    );
};

export default SideNavMenuItem;
