import { Accordion } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';

import { getNavigationConfig } from '~/redux/selectors';

import SideNavMenuItem from './Item';

export const AccordionNav: React.FC = () => {
    const categories = useSelector(getNavigationConfig);

    return (
        <Accordion allowToggle>
            {categories.map((item, index) => (
                <SideNavMenuItem {...item} key={index} />
            ))}
        </Accordion>
    );
};
