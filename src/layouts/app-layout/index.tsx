import { Box } from '@chakra-ui/react';
import React from 'react';

import {
    BookmarkSideMenu,
    HeaderNavMenu,
    SearchBar,
    SideMenu,
} from '~/components/layouts-components';
import AppViews from '~/views';

const AppLayout: React.FC = () => (
    <Box>
        <HeaderNavMenu />
        <SideMenu />
        <BookmarkSideMenu />
        <SearchBar />
        <AppViews />
    </Box>
);

export default AppLayout;
