import { Flex } from '@chakra-ui/react';

import { SearchBar } from '~/components/layouts-components/SearchBar';
import { Slider } from '~/components/shared-components';
import { CategoryHeader } from '~/components/shared-components';
import { BlogsSection } from '~/components/shared-components';
import { CategorySectionNext } from '~/components/shared-components';
import PageWrapper from '~/components/shared-components/PageWrapper';
import { navTree } from '~/configs/navigationConfig'; // TODO remove after true api
import { PADDINGS } from '~/constants/styles';
import mockRespone from '~/data/data.json';

import { JuciestSection } from './juciest';

const data = JSON.parse(JSON.stringify(mockRespone));
const sliderData = data.slice(0, 10);
const nexSection = navTree.find((e) => e.navKey === 'vegan-cuisine'); // TODO remove after true api

const HomePage: React.FC = () => (
    <PageWrapper>
        <SearchBar />
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
    </PageWrapper>
);

export default HomePage;
