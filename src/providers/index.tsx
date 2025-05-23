import React, { ReactNode, useState } from 'react';

import { Filters } from '~/types';

import { BreadCrumbsProvider } from './BreadCrumbs/Provider';
import { FiltersProvider } from './Filters/Provider';
import { RecentCredentialsProvider } from './RecentCredentials/Provider';

export const AppProviders: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [filters, setFilters] = useState<Filters>({});

    return (
        <BreadCrumbsProvider>
            <FiltersProvider filters={filters} setFilters={setFilters}>
                <RecentCredentialsProvider>{children}</RecentCredentialsProvider>
            </FiltersProvider>
        </BreadCrumbsProvider>
    );
};
