import { createContext } from 'react';

export interface DrawerFiltersContextProps {
    openDrawer: () => void;
    closeDrawer: () => void;
    isOpen: boolean;
}

export const DrawerFiltersContext = createContext<DrawerFiltersContextProps | undefined>(undefined);
