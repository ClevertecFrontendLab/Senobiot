import { Flex, useTheme } from '@chakra-ui/react';

import { TEST_IDS } from '~/constants';
import { PADDINGS, SHADOWS, WIDTHS } from '~/constants/styles';

import { Footer } from '..';
import { AccordionNav } from '../AccordionNavMenu';
import BreadCrump from '../HeaderNavMenu/BreadCrump';

export const BurgerNavMenu: React.FC<{
    breadCrumbsClickHandler: React.MouseEventHandler<HTMLAnchorElement>;
    menuClickHandler: React.MouseEventHandler<HTMLDivElement>;
}> = ({ breadCrumbsClickHandler, menuClickHandler }) => {
    const theme = useTheme();

    return (
        <Flex
            data-test-id={TEST_IDS.navigationMenu}
            ml='auto'
            flexDirection='column'
            justifyContent='space-between'
            w={WIDTHS.burgerNavMenu}
            pt={PADDINGS.burgerMenu}
            maxH={`calc(100vh - ${PADDINGS.bottomMnu * 4}px)`}
            pl={5}
            pr={1}
            bg='white'
            borderRadius='0 0 12px 12px'
            boxShadow={SHADOWS.burgerNavMenu}
            onClick={menuClickHandler}
        >
            <BreadCrump onClick={breadCrumbsClickHandler} />
            <Flex
                overflow='auto'
                flexDirection='column'
                justifyContent='space-between'
                borderRadius='8px'
                pr={1}
                pt={{ base: '20px', md: '30px' }}
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
                    '.chakra-accordion__button': {
                        paddingLeft: 0,
                        paddingRight: '24px',
                    },
                }}
            >
                <AccordionNav />
            </Flex>
            <Footer text-a p='28px 24px 32px 4px' />
        </Flex>
    );
};
