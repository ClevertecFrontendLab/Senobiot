import { Flex } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

import { WIDTHS } from '~/constants/styles';

interface MainProps {
    children?: ReactNode;
}

const CategoryPage: React.FC<MainProps> = () => (
    <Flex
        justifyContent='center'
        minH='100vh'
        w='100%'
        px={{ base: 4, md: 5, xl: WIDTHS.sideMunu }}
    ></Flex>
);

export default CategoryPage;
