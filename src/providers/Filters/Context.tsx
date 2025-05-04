import { createContext, Dispatch, SetStateAction } from 'react';

import { Filters } from '~/types';

export interface FiltersContextProps {
    openDrawer: () => void;
    closeDrawer: () => void;
    isOpen: boolean;
    filters: Filters;
    setFilters: Dispatch<SetStateAction<Filters>>;
}

export const FiltersContext = createContext<FiltersContextProps | undefined>(undefined);
