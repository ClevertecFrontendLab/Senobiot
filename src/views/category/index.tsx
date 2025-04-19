import { Flex } from '@chakra-ui/react';

import { CategorySection, CategorySectionNext } from '~/components/shared-components';
import { navTree } from '~/configs/navigationConfig';
import { PADDINGS, WIDTHS } from '~/constants/styles';
import mockRespone from '~/data/data.json';

const data = JSON.parse(JSON.stringify(mockRespone));
const nexSection = navTree.find((e) => e.navKey === 'desserts-baking'); // TODO remove after true api

const CategoryPage: React.FC = () => (
    <Flex
        minH='100vh'
        mx={PADDINGS.sectionMx}
        px={{ base: 4, md: 5, xl: WIDTHS.sideMunu }}
        display='column'
    >
        <CategorySection data={data} categoryButtonText='Загрузить еще' noHeader={true} />
        <CategorySectionNext
            title={nexSection?.title || ''}
            description={nexSection?.description || ''}
            data={data}
        />
    </Flex>
);

export default CategoryPage;
