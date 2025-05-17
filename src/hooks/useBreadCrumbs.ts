import { useContext } from 'react';

import { BreadCrumbsContext } from '~/providers/BreadCrumbs/Context';

export const useBreadCrumbs = () => {
    const context = useContext(BreadCrumbsContext);
    if (!context) {
        throw new Error('useBreadCrumbs должен использоваться внутри BreadCrumbsProvider');
    }
    return context;
};
