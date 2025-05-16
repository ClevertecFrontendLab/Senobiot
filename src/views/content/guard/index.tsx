import { Navigate, useLocation } from 'react-router';

import { EXCLUDED_ROUTES } from '~/constants';
import { NavigationConfig } from '~/types';

export const RouteGuard: React.FC<{
    navigationConfig: NavigationConfig;
    children: React.ReactNode;
}> = ({ navigationConfig, children }) => {
    const { pathname } = useLocation();
    const { navigationTree } = navigationConfig;

    const location = pathname.split('/').filter((e) => e)[0];

    if (location === 'not-found') {
        return children;
    }

    if (location === 'login') {
        return <Navigate to='/' replace />;
    }

    const isValidRoute =
        !location ||
        location === EXCLUDED_ROUTES.juiciest ||
        navigationTree.find((e) => e.categoryEn === location);

    if (!isValidRoute) {
        return <Navigate to='/not-found' replace />;
    }

    return children;
};
