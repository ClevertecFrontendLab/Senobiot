import { Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

import { Slider } from '~/components/shared-components';
import { PADDINGS } from '~/constants/styles';
import { sliderData } from '~/data';

import MostTastySection from './MostTastySection';

interface MainProps {
    children?: ReactNode;
}

const Main: React.FC<MainProps> = () => (
    <Box minH='100vh' mx={PADDINGS.content} pt={PADDINGS.topMenu} maxW={1360}>
        <Slider slides={sliderData} />
        <MostTastySection />
    </Box>
);

export default Main;
