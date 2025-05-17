import { Accordion } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';

import { getNavigationConfig } from '~/redux/selectors';
import { categoryTitleSlicer } from '~/utils';

import SideNavMenuItem from './Item';

export const AccordionNav: React.FC = () => {
    const categories = useSelector(getNavigationConfig);
    const slicedCategories = categoryTitleSlicer(categories);

    return (
        <Accordion allowToggle>
            {slicedCategories.map((item, index) => (
                <SideNavMenuItem {...item} key={index} />
            ))}
        </Accordion>
    );
};
