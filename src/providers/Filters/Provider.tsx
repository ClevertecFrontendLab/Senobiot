import { useDisclosure } from '@chakra-ui/react';
import { Dispatch, ReactNode, SetStateAction } from 'react';

import { Filters } from '~/types';

import { FiltersContext, FiltersContextProps } from './Context';

type DrawerFiltersProviderProps = {
    children: ReactNode;
    filters: Filters;
    setFilters: Dispatch<SetStateAction<Filters>>;
};

export const FiltersProvider: React.FC<DrawerFiltersProviderProps> = ({
    children,
    filters,
    setFilters,
}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const value: FiltersContextProps = {
        openFilters: onOpen,
        closeFilters: onClose,
        isOpen,
        filters,
        setFilters,
    };

    return <FiltersContext.Provider value={value}>{children}</FiltersContext.Provider>;
};
