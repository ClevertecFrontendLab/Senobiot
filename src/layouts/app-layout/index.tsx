import { Box, useBreakpointValue } from '@chakra-ui/react';

import {
    BookmarkSideMenu,
    BottomNavMenu,
    HeaderNavMenu,
    Loader,
    RecipeFilter,
    SideMenu,
} from '~/components/layouts-components';
import { useAllCategoriesQuery } from '~/redux/query/create-api';
import AppViews from '~/views';

const AppLayout: React.FC = () => {
    const isDesktop = useBreakpointValue({ base: false, xl: true });
    const { isLoading } = useAllCategoriesQuery(undefined);

    return (
        <Box>
            {isLoading && <Loader />}
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
