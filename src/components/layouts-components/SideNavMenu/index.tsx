import { Flex, useBreakpointValue, useTheme } from '@chakra-ui/react';

import { TEST_IDS } from '~/constants';
import { PADDINGS, SHADOWS } from '~/constants/styles';

import { Footer } from '..';
import { AccordionNav } from '../AccordionNavMenu';

export const SideMenu: React.FC = () => {
    const theme = useTheme();
    const isDesktop = useBreakpointValue({ base: false, xl: true });

    if (isDesktop) {
        return (
            <Flex
                data-test-id={TEST_IDS.navigationMenu}
                flexDirection='column'
                justifyContent='space-between'
                w='256px'
                h='100vh'
                pt={PADDINGS.topMenu}
                pl={2.5}
                pb={8}
                pr={1}
                maxHeight='100vh'
                position='fixed'
                zIndex={9}
                bg='white'
                left={0}
                boxShadow={SHADOWS.main}
                display={{ base: 'none', xl: 'flex' }}
            >
                <Flex
                    overflow='auto'
                    flexDirection='column'
                    justifyContent='space-between'
                    borderRadius='8px'
                    pr={1}
                    pt={8}
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
                    <AccordionNav />
                </Flex>
                <Footer text-a />
            </Flex>
        );
    }
    return null;
};
