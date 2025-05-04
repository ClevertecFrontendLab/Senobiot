import { Box, Flex, Spinner } from '@chakra-ui/react';
import React from 'react';

export const Loader: React.FC = () => (
    <Box
        backdropFilter='blur(2px)'
        position='fixed'
        top='0'
        left='0'
        width='100%'
        height='100%'
        bg='blackAlpha.300'
        display='flex'
        alignItems='center'
        justifyContent='center'
        zIndex={100}
    >
        <Flex
            position='relative'
            w={{ base: '134px', md: '206px' }}
            h={{ base: '134px', md: '206px' }}
            bg='radial-gradient(50% 50% at 50% 50%, rgba(196, 255, 97, 0.7) 0%, rgba(255, 255, 255, 0) 100%)'
            justifyContent='center'
            alignItems='center'
        >
            <Spinner thickness='2.5px' speed='0.65s' color='#000' size={{ base: 'md', md: 'lg' }} />
        </Flex>
    </Box>
);

export const SearchLoader: React.FC = () => (
    <Flex
        mx='auto'
        position='relative'
        w={{ base: '32px', md: '106px' }}
        h={{ base: '32px', md: '106px' }}
        bg='radial-gradient(50% 50% at 50% 50%, rgba(196, 255, 97, 0.7) 0%, rgba(255, 255, 255, 0) 100%)'
        justifyContent='center'
        alignItems='center'
    >
        <Spinner thickness='2.5px' speed='0.65s' color='#000' size={{ base: 'md', md: 'lg' }} />
    </Flex>
);
