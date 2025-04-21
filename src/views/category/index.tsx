import { SearchBar } from '~/components/layouts-components/SearchBar';
import { CategorySection, CategorySectionNext } from '~/components/shared-components';
import PageWrapper from '~/components/shared-components/PageWrapper';
import { navTree } from '~/configs/navigationConfig';
import mockRespone from '~/data/data.json';

const data = JSON.parse(JSON.stringify(mockRespone));
const nexSection = navTree.find((e) => e.navKey === 'desserts-baking'); // TODO remove after true api

const CategoryPage: React.FC = () => (
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

export default CategoryPage;
