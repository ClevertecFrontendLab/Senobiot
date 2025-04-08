import { Flex } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

import { Slider } from '~/components/shared-components';
import SubtitleText from '~/components/shared-components/Text/Subtitle';
import { PADDINGS, WIDTHS } from '~/constants/styles';
import { sliderData } from '~/data';

import MostTastySection from './MostTastySection';

interface MainProps {
    children?: ReactNode;
}

const Main: React.FC<MainProps> = () => (
    <Flex
        minH='100vh'
        mx={{ base: 0, xl: PADDINGS.content }}
        px={{ base: 4, md: 5, xl: WIDTHS.sideMunu }}
        display='column'
    >
        <Flex justifyContent='start' mb={{ base: 3, xl: 6 }}>
            <SubtitleText
                titleText='Новые рецепты'
                titleTextFz={{ base: '2xl', xl: '4xl', '2xl': '5xl' }}
                titleTextLh={{ base: '32px', xl: '40px', '2xl': '48px' }}
            />
        </Flex>
        <Slider slides={sliderData} />
        <MostTastySection />
    </Flex>
);

export default Main;
