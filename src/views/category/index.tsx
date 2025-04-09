import { Flex } from '@chakra-ui/react';

import { PADDINGS, WIDTHS } from '~/constants/styles';
import { sliderData } from '~/data';

import { CategorySection } from '../../components/shared-components';
import { PageProps } from '../home';

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
    </Flex>
);

export default CategoryPage;
