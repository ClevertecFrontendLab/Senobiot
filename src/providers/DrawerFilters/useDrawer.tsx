import { useContext } from 'react';

import { DrawerFiltersContext } from './Context';

export const useDrawer = () => {
    const context = useContext(DrawerFiltersContext);
    if (!context) {
        throw new Error('useDrawer must be used within a DrawerProvider');
    }
    return context;
};
