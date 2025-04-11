import { Flex } from '@chakra-ui/react';

import { navTree } from '~/configs/navigationConfig';
import { PADDINGS, WIDTHS } from '~/constants/styles';
import { dishesList, sliderData } from '~/data';

import { CategorySection, CategorySectionNext } from '../../components/shared-components';
import { PageProps } from '../home';

const nexSection = navTree.find((e) => e.navKey === 'desserts-baking'); // TODO remove after true api

const CategoryPage: React.FC<PageProps> = ({ categoryTitle = '', categoryData = sliderData }) => (
    <Flex
        minH='100vh'
        mx={PADDINGS.sectionMx}
        px={{ base: 4, md: 5, xl: WIDTHS.sideMunu }}
        display='column'
    >
        <CategorySection
            categoryTitle={categoryTitle}
            data={categoryData}
            categoryButtonText='Загрузить еще'
            noHeader={true}
        />
        <CategorySectionNext
            title={nexSection?.title || ''}
            description={nexSection?.description || ''}
            data={dishesList}
        />
    </Flex>
);

export default CategoryPage;
