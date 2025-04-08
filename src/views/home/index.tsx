import { Flex } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

import { Slider } from '~/components/shared-components';
import { PADDINGS, WIDTHS } from '~/constants/styles';
import { sliderData } from '~/data';

import MostTastySection from './MostTastySection';

interface MainProps {
    children?: ReactNode;
}

const Main: React.FC<MainProps> = () => (
    <Flex minH='100vh' mx={PADDINGS.content} pt={PADDINGS.topMenu} px={WIDTHS.sideMunu} w='100%'>
        <Slider slides={sliderData} />
        <MostTastySection />
    </Flex>
);

export default Main;
