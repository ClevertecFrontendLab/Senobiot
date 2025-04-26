import { ReactNode } from 'react';

import { DrawerFiltersProvider } from './DrawerFilters/Provider';

export const AppProviders: React.FC<{ children: ReactNode }> = ({ children }) => (
    <DrawerFiltersProvider>{children}</DrawerFiltersProvider>
);
