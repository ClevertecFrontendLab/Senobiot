import { useLocation } from 'react-router';

// import { routeFinder } from '~/configs/navigationConfig';

export const usePathnames = () => {
    const location = useLocation();
    const pathnames = location.pathname
        .split('/')
        .filter((x) => x)
        .map((e) => '/' + e);
    pathnames.unshift('/');

    return pathnames;
};

// export const getActiveCategory = () => {
//     const path = usePathnames();
//     return routeFinder(path.length > 1 ? path[1] : path[0]);
// }
