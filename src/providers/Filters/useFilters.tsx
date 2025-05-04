import { useContext } from 'react';

import { FiltersContext } from './Context';

export const useFilters = () => {
    const context = useContext(FiltersContext);
    if (!context) {
        throw new Error('useFilters must be used within a DrawerProvider');
    }
    return context;
};
