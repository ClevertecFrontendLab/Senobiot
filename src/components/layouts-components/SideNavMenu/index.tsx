import { Accordion, Flex, useTheme } from '@chakra-ui/react';
import React from 'react';

import { navTree } from '~/configs/navigationConfig';
import { PADDINGS, SHADOWS } from '~/constants/styles';

import { Footer } from '..';
import SideNavMenuItem from './Item';

export const SideMenu: React.FC = () => {
    const theme = useTheme(); // Chakra UI c некторыми псевдо либо через хук либо через проп __css = {{}}

    return (
        <Flex
            flexDirection='column'
            justifyContent='space-between'
            w='256px'
            h='100vh'
            px='16px'
            maxHeight='100vh'
            position='fixed'
            zIndex={9}
            bg='white'
            left={0}
            m={0}
            ml={0}
            pt={8 + PADDINGS.topMenu}
            pb={8}
            pl={2.5}
            pr={1}
            margin={0}
            boxShadow={SHADOWS.main}
            display={{ base: 'none', xl: 'flex' }}
        >
            <Flex
                overflow='auto'
                flexDirection='column'
                justifyContent='space-between'
                borderRadius='8px'
                css={{
                    '&::-webkit-scrollbar': {
                        width: 8,
                    },
                    '&::-webkit-scrollbar-track': {
                        background: theme.colors.blackAlpha[50],
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: theme.colors.blackAlpha[300],
                        borderRadius: 8,
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                        background: theme.colors.lime[50],
                    },
                    '&:hover': {
                        boxShadow: SHADOWS.sideMunu,
                    },
                }}
            >
                <Accordion allowToggle>
                    {navTree.map(
                        (item, index) =>
                            !item.skipSideMenu && <SideNavMenuItem {...item} key={index} />,
                    )}
                </Accordion>
            </Flex>
            <Footer text-a />
        </Flex>
    );
};
