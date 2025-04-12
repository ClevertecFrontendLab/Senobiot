import { useLocation } from 'react-router';

export const usePathnames = () => {
    const location = useLocation();
    const pathnames = location.pathname
        .split('/')
        .filter((x) => x)
        .map((e) => '/' + e);
    pathnames.unshift('/');

    return pathnames;
};
