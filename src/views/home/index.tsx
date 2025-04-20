import { Flex } from '@chakra-ui/react';

import { Slider } from '~/components/shared-components';
import { CategoryHeader } from '~/components/shared-components';
import { BlogsSection } from '~/components/shared-components';
import { CategorySectionNext } from '~/components/shared-components';
import { navTree } from '~/configs/navigationConfig'; // TODO remove after true api
import { PADDINGS } from '~/constants/styles';
import mockRespone from '~/data/data.json';

import { JuciestSection } from './juciest';
const data = JSON.parse(JSON.stringify(mockRespone));

const nexSection = navTree.find((e) => e.navKey === 'vegan-cuisine'); // TODO remove after true api

const HomePage: React.FC = () => (
    <Flex
        minH='100vh'
        mx={PADDINGS.sectionMx} // на макете не учтен скроллбар
        px={{ base: 4, md: 5, xl: 0 }}
        display='column'
        w={{ '2xl': 1360 }}
    >
        <Flex mb={PADDINGS.subsectionHeaderMb} direction='column'>
            <CategoryHeader mb={PADDINGS.subsectionHeaderMb} title='Новые рецепты' />
            <Slider slides={data} />
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
