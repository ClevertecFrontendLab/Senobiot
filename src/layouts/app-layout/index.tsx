import { Box, useBreakpointValue } from '@chakra-ui/react';

import {
    BookmarkSideMenu,
    BottomNavMenu,
    HeaderNavMenu,
    RecipeFilter,
    SideMenu,
} from '~/components/layouts-components';
import AppViews from '~/views';

const AppLayout: React.FC = () => {
    const isDesktop = useBreakpointValue({ base: false, xl: true });

    return (
        <Box>
            <HeaderNavMenu />
            {isDesktop && <SideMenu />}
            <BookmarkSideMenu />
            <RecipeFilter />
            <AppViews />
            <BottomNavMenu />
        </Box>
    );
};

export default AppLayout;
