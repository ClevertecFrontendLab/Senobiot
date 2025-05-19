import { Navigate, useLocation } from 'react-router';

import { BASE_URL, EXCLUDED_ROUTES } from '~/constants';
import { NavigationConfig } from '~/types';

export const RouteGuard: React.FC<{
    navigationConfig: NavigationConfig;
    children: React.ReactNode;
}> = ({ navigationConfig, children }) => {
    const { pathname } = useLocation();
    const { navigationTree } = navigationConfig;

    const location = pathname.split('/').filter(Boolean)[0];

    if (location === EXCLUDED_ROUTES.notFound) {
        return children;
    }

    if (location === EXCLUDED_ROUTES.login) {
        return <Navigate to='/' replace />;
    }

    if (location === BASE_URL) {
        return <Navigate to='/' replace />;
    }

    const isValidRoute =
        !location ||
        location === EXCLUDED_ROUTES.juiciest ||
        navigationTree.find((e) => e.categoryEn === location);

    if (!isValidRoute) {
        return <Navigate to={`/${EXCLUDED_ROUTES.notFound}`} replace />;
    }

    return children;
};
