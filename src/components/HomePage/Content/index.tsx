import { Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

import { PADDINGS } from '~/constants/styles';

import SearchMenu from '../SearchMenu';
import MostTastySection from './MostTastySection';

interface ContentProps {
    children?: ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => (
    <Box minH='100vh' mx={PADDINGS.content} pt={PADDINGS.topMenu}>
        <SearchMenu />
        <Box>{children}</Box>
        <MostTastySection />
    </Box>
);

export default Content;
