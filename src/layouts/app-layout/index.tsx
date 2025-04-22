import { Box, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

import {
    BookmarkSideMenu,
    BottomNavMenu,
    HeaderNavMenu,
    SideMenu,
} from '~/components/layouts-components';
// import { SearchBar } from '~/components/layouts-components/SearchBar';
import AppViews from '~/views';

const AppLayout: React.FC = () => {
    const isDesktop = useBreakpointValue({ base: false, xl: true });

    return (
        <Box>
            <HeaderNavMenu />
            {isDesktop && <SideMenu />}
            <BookmarkSideMenu />
            {/* <SearchBar /> */}
            <AppViews />
            <BottomNavMenu />
        </Box>
    );
};

export default AppLayout;
