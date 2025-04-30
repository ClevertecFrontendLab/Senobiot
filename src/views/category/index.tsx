import { VStack } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import { SearchBar } from '~/components/layouts-components/SearchBar';
import { CategorySection, CategorySectionNext } from '~/components/shared-components';
import PageWrapper from '~/components/shared-components/PageWrapper';
import { navTree } from '~/configs/navigationConfig';
import { ApplicationState } from '~/redux/store/configure-store';

const nexSection = navTree.find((e) => e.navKey === 'desserts-baking'); // TODO remove after true api

const CategoryPage: React.FC = () => {
    const data = useSelector((state: ApplicationState) => state.reciepts.filtrated);
    const initialData = useSelector((state: ApplicationState) => state.reciepts.initial);

    return (
        <PageWrapper>
            <SearchBar />
            <VStack px={{ base: 4, md: 5, xl: 0 }} m={0} gap={0} w='100%'>
                <CategorySection data={data} categoryButtonText='Загрузить еще' noHeader={true} />
                <CategorySectionNext
                    title={nexSection?.title || ''}
                    description={nexSection?.description || ''}
                    data={initialData}
                />
            </VStack>
        </PageWrapper>
    );
};

export default CategoryPage;
