import { Flex } from '@chakra-ui/react';

import { TEST_IDS } from '~/constants';
import { BurgerNavMenuProps } from '~/types';

import { Footer } from '..';
import { AccordionNav } from '../AccordionNavMenu';
import BreadCrump from '../HeaderNavMenu/BreadCrump';
import { burgerMenuStyles, burgerMenuWrapperStyles } from './BurgerNavMenu.styles';

export const BurgerNavMenu: React.FC<BurgerNavMenuProps> = ({
    breadCrumbsClickHandler,
    menuClickHandler,
}) => (
    <Flex
        data-test-id={TEST_IDS.navigationMenu}
        onClick={menuClickHandler}
        sx={burgerMenuWrapperStyles}
    >
        <BreadCrump onClick={breadCrumbsClickHandler} />
        <Flex sx={burgerMenuStyles}>
            <AccordionNav />
        </Flex>
        <Footer p='28px 24px 32px 4px' />
    </Flex>
);
