import { Flex } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

import { Slider } from '~/components/shared-components';
import { CategoryHeader } from '~/components/shared-components';
import { PADDINGS, WIDTHS } from '~/constants/styles';
import { sliderData } from '~/data';

import { CategorySection } from '../../components/shared-components';

interface MainProps {
    children?: ReactNode;
}

const Main: React.FC<MainProps> = () => (
    <Flex
        minH='100vh'
        mx={PADDINGS.sectionMx}
        px={{ base: 4, md: 5, xl: WIDTHS.sideMunu }}
        display='column'
    >
        <Flex mb={PADDINGS.subsectionHeaderMb} direction='column'>
            <CategoryHeader mb={PADDINGS.subsectionHeaderMb} title='Новые рецепты' />
            <Slider slides={sliderData} />
        </Flex>
        <CategorySection
            сategoryTitle='Самое сочноe'
            data={sliderData}
            сategoryButtonText='Вся подборка'
        />
    </Flex>
);

export default Main;
