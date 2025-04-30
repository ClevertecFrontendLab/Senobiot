import { Accordion } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';

import { getAllCategories } from '~/redux/query/create-api';

import SideNavMenuItem from './Item';

export const AccordionNav: React.FC = () => {
    const categories = useSelector(getAllCategories).data || [];

    return (
        <Accordion allowToggle>
            {categories.map((item, index) => (
                <SideNavMenuItem {...item} key={index} />
            ))}
        </Accordion>
    );
};
