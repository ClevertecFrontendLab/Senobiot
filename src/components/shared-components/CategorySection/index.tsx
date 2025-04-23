import { Flex } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router';

import { getLocation } from '~/configs/navigationConfig';
import { PADDINGS } from '~/constants/styles';
import { CategorySectionProps } from '~/types';

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
    const location = getLocation(useLocation().pathname);
    const categoryCards = data
        .filter((e) => e.category.includes(location.categoryName!))
        .filter((e) => e.subcategory.includes(location.subcategoryName!));

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
            {!noNavMenu && !location?.category?.skipSideMenu && (
                <CategoryMenu
                    list={location.category?.submenu}
                    activeSubcategory={location.subcategory?.route}
                />
            )}
            <Flex flexWrap='wrap' gap={4}>
                {categoryCards.map((card, index) => {
                    const { title, description, image, category, subcategory, id } = card;

                    return (
                        <CategoryCard
                            cardDataTestId={`food-card-${index}`}
                            key={index}
                            title={title}
                            description={description}
                            img={image}
                            categories={category}
                            bookmarkMaxHeight={6}
                            coockingButtonAs={Link}
                            coockingButtonRoute={`/${category[0]}/${subcategory[0]}/${id}`}
                            coockingButtonDataId={index}
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
