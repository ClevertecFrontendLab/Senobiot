import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
    Avatar,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    HStack,
    IconButton,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

import { TextRegular, TitleText } from '~/components/shared-components';
import { ProfileNotification } from '~/components/shared-components';
import { PADDINGS } from '~/constants/styles';

import { BurgerNavMenu } from '../BurgerNavMenu';
import BreadCrump from './BreadCrump';
import Logo from './Logo';

export const HeaderNavMenu: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleKeyDown = () => {
        console.log('missed menu - closing ');
        onClose();
    };

    const menuClickHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
        console.log('click on menu');
    };

    return (
        <Flex
            as='header'
            bg='lime.50'
            h={PADDINGS.topMenu}
            width='100vw'
            pr={4}
            position='fixed'
            top={0}
            left='50%'
            transform='translateX(-50%)'
            zIndex={10}
            justifyContent='space-between'
            alignItems='center'
            data-test-id='header'
        >
            <HStack>
                <Logo />
                <HStack as='nav' spacing={4} display={{ base: 'none', xl: 'flex' }}>
                    <BreadCrump />
                </HStack>
            </HStack>
            <Flex pr={14}>
                <Menu>
                    <MenuButton
                        display={{ base: 'none', xl: 'flex' }}
                        as={Button}
                        rounded='full'
                        variant='link'
                        cursor='pointer'
                        minW={0}
                    >
                        <Avatar size='md' src='/avatars/avatar-0.png' />
                        <Flex
                            ml={3}
                            display='inline-flex'
                            flexDirection='column'
                            alignItems='flex-start'
                        >
                            <TitleText
                                titleTextFz='18px'
                                titleTextFw={500}
                                titleTextLh='28px'
                                titleText='Екатерина Константинопольская'
                            />
                            <TextRegular
                                regTextFw={400}
                                regText='@bake_and_pie'
                                regTextColor='blackAlpha.700'
                            />
                        </Flex>
                    </MenuButton>
                    <MenuList>
                        <MenuItem>В личный кабинет</MenuItem>
                        <MenuItem>В публичный кабинет</MenuItem>
                        <MenuDivider />
                        <MenuItem>Уйти куда-нибудь</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
            <Flex display={{ base: 'flex', xl: 'none' }}>
                <ProfileNotification
                    gap={4}
                    px={4}
                    stateIconSize={3}
                    statTextFontWeight={600}
                    stateTextFontSize='12px'
                    stateTextLh='16px'
                />
                <IconButton
                    size='lg'
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label='Open Menu'
                    onClick={isOpen ? onClose : onOpen}
                    bg='none'
                    _hover={{
                        background: 'none',
                    }}
                    data-test-id='hamburger-icon'
                />
                <Drawer
                    isOpen={isOpen}
                    // placement='right'
                    onClose={onClose}
                >
                    <DrawerOverlay />
                    <DrawerContent
                        minW='100vw'
                        bgColor='none'
                        bg='none'
                        px={2}
                        motionProps={{
                            variants: {
                                enter: {
                                    x: '0%',
                                    transition: { duration: 0.1 },
                                },
                                exit: {
                                    x: '100%',
                                    transition: { duration: 0.1 },
                                },
                            },
                        }}
                    >
                        <DrawerHeader
                            w='100vw'
                            position='fixed'
                            top={0}
                            left={0}
                            bgColor='#fff'
                            zIndex={10}
                            px={5}
                            py={4}
                            h={PADDINGS.topMenu}
                        >
                            <Flex justifyContent='space-between' alignItems='center'>
                                <Logo />
                                <DrawerCloseButton position='static' data-test-id='close-icon' />
                            </Flex>
                        </DrawerHeader>
                        <DrawerBody minW='100vw' p={0} onClick={handleKeyDown}>
                            <BurgerNavMenu data-test-id='nav' onClick={menuClickHandler} />
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Flex>
        </Flex>
    );
};
