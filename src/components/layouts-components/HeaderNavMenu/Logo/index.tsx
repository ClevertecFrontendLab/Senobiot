import { HStack, Image } from '@chakra-ui/react';
import React from 'react';

import { BASE_URL } from '~/constants';
import { WIDTHS } from '~/constants/styles';

const Logo: React.FC = () => (
    <HStack pl={4} mr={{ base: 0, lg: 6 }} width={{ base: 'initial', lg: WIDTHS.sideMenu }}>
        <Image src={`${BASE_URL}assets/images/logo-img.svg`} alt='logo cup' boxSize={8} />
        <Image
            display={{ base: 'none', md: 'block' }}
            src={`${BASE_URL}assets/images/logo-text.svg`}
            alt='logo text Yeedaa'
        />
    </HStack>
);

export default Logo;
