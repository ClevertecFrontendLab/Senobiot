import { ChevronRightIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    Flex,
    HStack,
    IconButton,
    Image,
    Stack,
    useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

const Links = ['Главная', 'Категории', 'Продукты'];

const TopMenu: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box
            bg='lime.50'
            h='80px'
            maxWidth='1920px'
            width='100vw'
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            pl={4}
            pr={8}
            position='fixed'
            top={0}
            left={0}
            zIndex={10}
        >
            <Flex alignItems='center'>
                <HStack mr={32} spacing={2}>
                    <Image src='/logo-img.svg' alt='logo cup' boxSize='32px' />
                    <Image src='/logo-text.svg' alt='logo text Yeedaa' boxSize='96px' />
                </HStack>
                <Box>
                    <Breadcrumb
                        alignItems='center'
                        separator={<ChevronRightIcon color='gray.500' />}
                        fontSize='md'
                    >
                        {Links.map((link, index) => (
                            <BreadcrumbItem key={index}>
                                <BreadcrumbLink href='#'>{link}</BreadcrumbLink>
                            </BreadcrumbItem>
                        ))}
                    </Breadcrumb>
                </Box>
            </Flex>
            <Flex alignItems='center'>
                <IconButton
                    size='md'
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label='Открыть меню'
                    display={{ md: 'none' }}
                    onClick={isOpen ? onClose : onOpen}
                    color='white'
                />
                <Flex alignItems='center'>
                    <Button variant='solid' colorScheme='teal' size='sm' mr={4}>
                        Войти
                    </Button>
                </Flex>
            </Flex>
            {isOpen && (
                <Box pb={4} display={{ md: 'none' }}>
                    <Stack as='nav' spacing={4}>
                        {Links.map((link) => (
                            <Button key={link} variant='link' color='white'>
                                {link}
                            </Button>
                        ))}
                    </Stack>
                </Box>
            )}
        </Box>
    );
};

export default TopMenu;
