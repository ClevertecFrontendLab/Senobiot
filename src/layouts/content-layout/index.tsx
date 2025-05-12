import { Box } from '@chakra-ui/react';

import {
    BookmarkSideMenu,
    BottomNavMenu,
    HeaderNavMenu,
    Loader,
    RecipeFilter,
    SideMenu,
} from '~/components/layouts-components';
import { useAllCategoriesQuery } from '~/redux/query/create-api';
import { getLocallySavedNavigationConfig } from '~/utils';
import { ContentViews } from '~/views';

export const ContentLayout: React.FC = () => {
    const savedNavigationConfig = getLocallySavedNavigationConfig();
    const { data: navigationConfig, isLoading } = useAllCategoriesQuery(undefined, {
        skip: !!savedNavigationConfig,
    });
    const navigation = savedNavigationConfig || navigationConfig;

    if (!savedNavigationConfig && isLoading) {
        return <Loader />;
    }

    return (
        <Box>
            {isLoading && <Loader />}
            <HeaderNavMenu />
            <SideMenu />
            <BookmarkSideMenu />
            <RecipeFilter />
            {navigation && (
                <ContentViews navigationConfig={savedNavigationConfig || navigationConfig} />
            )}
            <BottomNavMenu />
        </Box>
    );
};
