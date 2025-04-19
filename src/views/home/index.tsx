import { Flex } from '@chakra-ui/react';

import { Slider } from '~/components/shared-components';
import { CategoryHeader } from '~/components/shared-components';
import { BlogsSection } from '~/components/shared-components';
import { CategorySectionNext } from '~/components/shared-components';
import { navTree } from '~/configs/navigationConfig'; // TODO remove after true api
import { PADDINGS, WIDTHS } from '~/constants/styles';
import { sliderData } from '~/data';
import mockRespone from '~/data/data.json';

import { JuciestSection } from './juciest';
const data = JSON.parse(JSON.stringify(mockRespone));

const nexSection = navTree.find((e) => e.navKey === 'vegan-cuisine'); // TODO remove after true api

const HomePage: React.FC = () => (
    <Flex
        minH='100vh'
        mx={PADDINGS.sectionMx}
        px={{ base: 4, md: 5, xl: WIDTHS.sideMunu }}
        display='column'
        mb={{ base: '96px', xl: 3 }}
    >
        <Flex mb={PADDINGS.subsectionHeaderMb} direction='column'>
            <CategoryHeader mb={PADDINGS.subsectionHeaderMb} title='Новые рецепты' />
            <Slider slides={sliderData} />
        </Flex>
        <JuciestSection data={data} categoryTitle='Самое сочное' />
        <BlogsSection />
        <CategorySectionNext
            title={nexSection?.title || ''}
            description={nexSection?.description || ''}
            data={data}
        />
    </Flex>
);

export default HomePage;
