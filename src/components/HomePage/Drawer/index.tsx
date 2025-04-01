import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

import SideMenu from '../Sidebar';

const DrawerMenu: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button onClick={onOpen} variant='outline' m={4}>
                Открыть меню
            </Button>

            <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent bg='pink.100'>
                    <DrawerCloseButton />
                    <DrawerBody p='0'>
                        <SideMenu />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default DrawerMenu;
