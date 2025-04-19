import { Flex } from '@chakra-ui/react';

import { getSubCategoryList, routeFinder } from '~/configs/navigationConfig';
import { PADDINGS } from '~/constants/styles';
import { CategorySectionProps } from '~/types';
import { usePathnames } from '~/utils';

import { ButtonViewMore } from '../Buttons';
import { CategoryHeader } from '../Headers';
import CategoryMenu from './CategoryMenu';
import CategoryCard from './CategorySectionCard';

export const CategorySection: React.FC<CategorySectionProps> = ({
    categoryTitle = '',
    categoryButtonText = '',
    data,
    categoryHeaderMb = PADDINGS.subsectionHeaderMb,
    mb = PADDINGS.subsectionMb,
    noHeaderButton = false,
    noHeader = false,
    noFooter = false,
    noNavMenu = false,
    noButtonIcon,
}) => {
    const pathnames = usePathnames();
    const activeCategory = routeFinder(pathnames.length > 1 ? pathnames[1] : pathnames[0]);
    const menuList = activeCategory?.title ? getSubCategoryList(activeCategory?.title) : []; // когда будет апи всё это выпилить

    return (
        <Flex justifyContent='space-between' mb={mb} direction='column'>
            {!noHeader && (
                <Flex justifyContent='space-between' mb={categoryHeaderMb}>
                    <CategoryHeader title={categoryTitle} />
                    {!noHeaderButton && (
                        <ButtonViewMore title={categoryButtonText} noButtonIcon={noButtonIcon} />
                    )}
                </Flex>
            )}
            {!noNavMenu && !activeCategory?.skipSideMenu && <CategoryMenu list={menuList} />}
            <Flex flexWrap='wrap' gap={4}>
                {data.map((card, index) => {
                    console.log(card);
                    const { title, description, image, category } = card;

                    return (
                        <CategoryCard
                            key={index}
                            title={title}
                            description={description}
                            img={image}
                            categories={category}
                        />
                    );
                })}
            </Flex>
            {!noFooter && (
                <Flex justifyContent='center' mt={categoryHeaderMb}>
                    <ButtonViewMore title={categoryButtonText} />
                </Flex>
            )}
        </Flex>
    );
};
