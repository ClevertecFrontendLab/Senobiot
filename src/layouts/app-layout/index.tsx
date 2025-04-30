import { Box, useBreakpointValue } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import {
    BookmarkSideMenu,
    BottomNavMenu,
    HeaderNavMenu,
    Loader,
    RecipeFilter,
    SideMenu,
} from '~/components/layouts-components';
import { userLoadingSelector } from '~/store/app-slice';
import AppViews from '~/views';

const AppLayout: React.FC = () => {
    const isDesktop = useBreakpointValue({ base: false, xl: true });
    const isLoading = useSelector(userLoadingSelector);
    console.log(isLoading);
    useEffect(() => {}, []);

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
