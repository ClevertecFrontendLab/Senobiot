import { ChevronRightIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    ChakraProvider,
    extendTheme,
    Flex,
    HStack,
    IconButton,
    Image,
    Stack,
    useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

const Links = ['Главная', 'Категории', 'Продукты'];

const customTheme = extendTheme({
    colors: {
        lime: {
            50: '#F7FEE7',
            100: '#E0F8C9',
            200: '#C2EDA8',
            300: '#A3E188',
            400: '#85D669',
            500: '#66CA4B',
            600: '#4DA03A',
            700: '#337628',
            800: '#1A4D17',
            900: '#002506',
        },
    },
});

const TopMenu: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <ChakraProvider theme={customTheme}>
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
        </ChakraProvider>
    );
};

export default TopMenu;
