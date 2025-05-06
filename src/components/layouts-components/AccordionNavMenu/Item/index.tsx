import {
    AccordionButton,
    AccordionIcon,
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
                        <AccordionButton
                            bg={isExpanded ? 'lime.100' : 'white'}
                            px={2}
                            height={12}
                            fontWeight={500}
                            fontSize={16}
                            _hover={{
                                bg: isExpanded ? 'lime.100' : 'lime.50',
                            }}
                        >
                            <Box flex='1' textAlign='left'>
                                <HStack display='flex' alignItems='start' pl={1}>
                                    <Image src={categoryIcon} alt={categoryRu} boxSize='24px' />
                                    <Text cursor='pointer' pl={2}>
                                        {categoryRu}
                                    </Text>
                                </HStack>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </Link>
                    <AccordionPanel textAlign='left' pb={4}>
                        {subCategories.map((subcategory, index) => {
                            const { subcategoryEn, route } = subcategory;
                            const isActive = pathname === route;

                            return (
                                <Link
                                    to={subcategory.route}
                                    key={index}
                                    data-test-id={`${subcategoryEn}${isActive ? '-active' : ''}`}
                                >
                                    <Text
                                        py={2}
                                        ml={5}
                                        textStyle='xs'
                                        pl={4}
                                        position='relative'
                                        _hover={{
                                            bg: 'lime.50',
                                        }}
                                        sx={{
                                            '&::before': {
                                                content: '""',
                                                height: 'calc(100% - 12px )',
                                                width: isActive ? '8px' : '1px',
                                                position: 'absolute',
                                                top: '6px',
                                                left: isActive ? '-8px' : 0,
                                                background: 'lime.300',
                                            },
                                        }}
                                    >
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
