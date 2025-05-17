import React, { createContext } from 'react';

import { BreadcrumbsItems } from '~/types';

type BreadCrumbsContextType = {
    breadcrumbs: BreadcrumbsItems;
    setBreadCrumbs: React.Dispatch<React.SetStateAction<BreadcrumbsItems | undefined>>;
};

export const BreadCrumbsContext = createContext<BreadCrumbsContextType | undefined>(undefined);
