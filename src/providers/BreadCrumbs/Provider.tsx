import { ReactNode, useState } from 'react';

import { BreadcrumbsItems } from '~/types';

import { BreadCrumbsContext } from './Context';

export const BreadCrumbsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [breadcrumbs, setBreadCrumbs] = useState<BreadcrumbsItems>();

    return (
        <BreadCrumbsContext.Provider value={{ breadcrumbs, setBreadCrumbs }}>
            {children}
        </BreadCrumbsContext.Provider>
    );
};
