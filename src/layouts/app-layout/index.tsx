import { Box } from '@chakra-ui/react';
import React from 'react';

import {
    BookmarkSideMenu,
    BottomNavMenu,
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
        <BottomNavMenu />
    </Box>
);

export default AppLayout;
