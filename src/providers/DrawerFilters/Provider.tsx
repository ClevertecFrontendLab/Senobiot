import { useDisclosure } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { DrawerFiltersContext } from './Context';

export const DrawerFiltersProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <DrawerFiltersContext.Provider value={{ openDrawer: onOpen, closeDrawer: onClose, isOpen }}>
            {children}
        </DrawerFiltersContext.Provider>
    );
};
