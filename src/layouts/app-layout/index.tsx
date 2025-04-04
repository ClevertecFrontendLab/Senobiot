import { Box } from '@chakra-ui/react';
import React from 'react';

import BookmarkSideMenu from '~/components/layouts-components/BookmarkSideMenu';
import HeaderMenu from '~/components/layouts-components/HeaderMenu';
import SearchBar from '~/components/layouts-components/SearchBar';
import SideMenu from '~/components/layouts-components/SideMenu';
import AppViews from '~/views';

const AppLayout: React.FC = () => (
    <Box>
        <HeaderMenu />
        <SideMenu />
        <BookmarkSideMenu />
        <SearchBar />
        <AppViews />
    </Box>
);

export default AppLayout;
