import { useLocation } from 'react-router';

export const usePathnames = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    !pathnames.length && pathnames.push('/');

    return pathnames;
};
