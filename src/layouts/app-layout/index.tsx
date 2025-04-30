import { Box, useBreakpointValue } from '@chakra-ui/react';
import { useEffect } from 'react';

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
    const { data: allCategories, isLoading } = useAllCategoriesQuery(undefined);

    useEffect(() => {
        if (allCategories) {
            console.log('Данные получены:', allCategories);
        }
    }, [allCategories]);

    return (
        <Box>
            {isLoading && <Loader />}
            <HeaderNavMenu />
            {isDesktop && allCategories && <SideMenu categories={allCategories} />}
            <BookmarkSideMenu />
            <RecipeFilter />
            <AppViews />
            <BottomNavMenu />
        </Box>
    );
};

export default AppLayout;
