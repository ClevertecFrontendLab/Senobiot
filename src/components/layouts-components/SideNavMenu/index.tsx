import { Flex, useBreakpointValue } from '@chakra-ui/react';

import { TEST_IDS } from '~/constants';

import { Footer } from '..';
import { AccordionNav } from '../AccordionNavMenu';
import { sideMenuStyles, sideMenuWrapperStyles } from './SideNavMenu.styles';

export const SideMenu: React.FC = () => {
    const isDesktop = useBreakpointValue({ base: false, xl: true });

    if (isDesktop) {
        return (
            <Flex data-test-id={TEST_IDS.navigationMenu} sx={sideMenuWrapperStyles}>
                <Flex sx={sideMenuStyles}>
                    <AccordionNav />
                </Flex>
                <Footer />
            </Flex>
        );
    }
    return null;
};
