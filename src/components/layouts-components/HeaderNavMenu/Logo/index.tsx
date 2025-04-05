import { HStack, Image } from '@chakra-ui/react';
import React from 'react';

const Logo: React.FC = () => (
    <HStack mr={8}>
        <Image src='/logo-img.svg' alt='logo cup' boxSize={8} />
        <Image
            display={{ base: 'none', md: 'block' }}
            src='/logo-text.svg'
            alt='logo text Yeedaa'
            boxSize='96px'
        />
    </HStack>
);

export default Logo;
