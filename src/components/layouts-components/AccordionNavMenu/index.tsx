import { Accordion } from '@chakra-ui/react';
import React from 'react';

import { AllCategories } from '~/types';

import SideNavMenuItem from './Item';

export const AccordionNav: React.FC<{ categories: AllCategories[] }> = ({ categories }) => (
    <Accordion allowToggle>
        {categories.map((item, index) => (
            <SideNavMenuItem {...item} key={index} />
        ))}
    </Accordion>
);
