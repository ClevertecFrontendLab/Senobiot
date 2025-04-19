import { Accordion } from '@chakra-ui/react';
import React from 'react';

import { navTree } from '~/configs/navigationConfig';

import SideNavMenuItem from './Item';

export const AccordionNav: React.FC = () => (
    <Accordion allowToggle>
        {navTree.map(
            (item, index) => !item.skipSideMenu && <SideNavMenuItem {...item} key={index} />,
        )}
    </Accordion>
);
