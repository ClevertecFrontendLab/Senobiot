import { Accordion, Box, VStack } from '@chakra-ui/react';
import React from 'react';

import { PADDINGS, SHADOWS } from '~/constants/styles';
import { dishesCategories } from '~/data';

import { Footer } from '..';
import SideNavMenuItem from './Item';

export const SideMenu: React.FC = () => (
    <VStack
        spacing={4}
        align='start'
        w='256px'
        h='100vh'
        px='16px'
        maxHeight='100vh'
        position='fixed'
        zIndex={9}
        left={0}
        m={0}
        ml={0}
        pt={8 + PADDINGS.topMenu}
        pb={8}
        margin={0}
        boxShadow={SHADOWS.main}
    >
        <Box overflow='auto' display='flex' flexDirection='column' justifyContent='space-between'>
            <Accordion allowToggle>
                {dishesCategories.map((item, index) => (
                    <SideNavMenuItem {...item} key={index} />
                ))}
            </Accordion>
        </Box>
        <Footer text-a />
    </VStack>
);
