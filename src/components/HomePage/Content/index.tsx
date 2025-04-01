import { Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

import { PADDINGS } from '~/constants/styles';

import SearchMenu from '../SearchMenu';

interface ContentProps {
    children?: ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => (
    <Box minH='100vh' pt={PADDINGS.topMenu}>
        <SearchMenu />
        <Box>{children}</Box>
    </Box>
);

export default Content;
