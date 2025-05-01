import { Box, useBreakpointValue } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import {
    BookmarkSideMenu,
    BottomNavMenu,
    HeaderNavMenu,
    Loader,
    RecipeFilter,
    SideMenu,
} from '~/components/layouts-components';
import { useAllCategoriesQuery } from '~/redux/query/create-api';
import { userLoadingSelector } from '~/redux/store/app-slice';
import { getLocallySavedNavigationConfig } from '~/utils';
import AppViews from '~/views';

const AppLayout: React.FC = () => {
    const isDesktop = useBreakpointValue({ base: false, xl: true });
    const savedNavigationConfig = getLocallySavedNavigationConfig();
    const { data: navigationConfig } = useAllCategoriesQuery(undefined, {
        skip: !!savedNavigationConfig,
    });
    const navigationTree =
        savedNavigationConfig?.navigationTree || navigationConfig?.navigationTree;

    const isLoading = useSelector(userLoadingSelector);

    return (
        <Box>
            {isLoading && <Loader />}
            <HeaderNavMenu />
            {isDesktop && <SideMenu />}
            <BookmarkSideMenu />
            <RecipeFilter />
            {navigationTree && <AppViews navTree={navigationTree} />}
            <BottomNavMenu />
        </Box>
    );
};

export default AppLayout;
