import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
    Avatar,
    Button,
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

import BreadCrump from './BreadCrump';
import Logo from './Logo';

export const HeaderNavMenu: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Flex
            as='header'
            bg='lime.50'
            h={PADDINGS.topMenu}
            maxWidth='1920px'
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
                />
            </Flex>
        </Flex>
    );
};
