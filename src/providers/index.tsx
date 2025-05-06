import React, { ReactNode, useState } from 'react';

import { Filters } from '~/types';

import { FiltersProvider } from './Filters/Provider';

export const AppProviders: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [filters, setFilters] = useState<Filters>({});

    return (
        <FiltersProvider filters={filters} setFilters={setFilters}>
            {children}
        </FiltersProvider>
    );
};
