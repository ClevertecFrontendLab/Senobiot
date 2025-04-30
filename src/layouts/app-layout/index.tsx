import { Box, useBreakpointValue } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    BookmarkSideMenu,
    BottomNavMenu,
    HeaderNavMenu,
    Loader,
    RecipeFilter,
    SideMenu,
} from '~/components/layouts-components';
import { useAllCategoriesQuery } from '~/redux/query/create-api';
import { setAppLoader, userLoadingSelector } from '~/redux/store/app-slice';
import { getLocallySavedNavigationConfig } from '~/utils';
import AppViews from '~/views';

const AppLayout: React.FC = () => {
    const isDesktop = useBreakpointValue({ base: false, xl: true });
    const navigationConfig = getLocallySavedNavigationConfig();
    useAllCategoriesQuery(undefined, { skip: !!navigationConfig });
    const isLoading = useSelector(userLoadingSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        navigationConfig && dispatch(setAppLoader(false));
    }, [navigationConfig, dispatch]);

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
