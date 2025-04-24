import { useSelector } from 'react-redux';

import { SearchBar } from '~/components/layouts-components/SearchBar';
import { CategorySection, CategorySectionNext } from '~/components/shared-components';
import PageWrapper from '~/components/shared-components/PageWrapper';
import { navTree } from '~/configs/navigationConfig';
import { ApplicationState } from '~/store/configure-store';

const nexSection = navTree.find((e) => e.navKey === 'desserts-baking'); // TODO remove after true api

const CategoryPage: React.FC = () => {
    const data = useSelector((state: ApplicationState) => state.reciepts.filtrated);

    return (
        <PageWrapper>
            <SearchBar />
            <CategorySection data={data} categoryButtonText='Загрузить еще' noHeader={true} />
            <CategorySectionNext
                title={nexSection?.title || ''}
                description={nexSection?.description || ''}
                data={data}
            />
        </PageWrapper>
    );
};

export default CategoryPage;
