import { Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import { SearchBar } from '~/components/layouts-components/SearchBar';
import { Slider } from '~/components/shared-components';
import { CategoryHeader } from '~/components/shared-components';
import { BlogsSection } from '~/components/shared-components';
import { CategorySectionNext } from '~/components/shared-components';
import PageWrapper from '~/components/shared-components/PageWrapper';
import { navTree } from '~/configs/navigationConfig'; // TODO remove after true api
import { PADDINGS } from '~/constants/styles';
import { getActiveSearch } from '~/selectors';
import { ApplicationState } from '~/store/configure-store';
import { searchByTitle } from '~/utils';

import { JuciestSection } from './juciest';

const nexSection = navTree.find((e) => e.navKey === 'vegan-cuisine'); // TODO remove after true api

const HomePage: React.FC = () => {
    let data = useSelector((state: ApplicationState) => state.reciepts.filtrated);
    const activeSearсh = useSelector(getActiveSearch);
    if (activeSearсh) {
        data = searchByTitle(data, activeSearсh);
    }

    return (
        <PageWrapper>
            <SearchBar />
            <Flex mb={PADDINGS.subsectionHeaderMb} direction='column'>
                <CategoryHeader mb={PADDINGS.subsectionHeaderMb} title='Новые рецепты' />
                <Slider activeSearсh={activeSearсh} slides={data} />
            </Flex>
            <JuciestSection activeSearсh={activeSearсh} data={data} categoryTitle='Самое сочное' />
            <BlogsSection />
            <CategorySectionNext
                title={nexSection?.title || ''}
                description={nexSection?.description || ''}
                data={data}
            />
        </PageWrapper>
    );
};

export default HomePage;
