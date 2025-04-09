import { Flex, useBreakpointValue } from '@chakra-ui/react';
import React, { useMemo } from 'react';

import ButtonViewMore from '~/components/shared-components/ButtonViewMore';
import { getSubCategoryList } from '~/configs/navigationConfig';
import { PADDINGS } from '~/constants/styles';
import { getActiveCategory } from '~/utils';

import { CategoryHeader } from '../Headers';
import CategoryMenu from './CategoryMenu';
import CategoryCard from './CategorySectionCard';

export type CategorySectionDataProps = {
    title: string;
    description: string;
    img: string;
    subcategory?: string;
    icon?: string;
};

export type CategorySectionProps = {
    categoryTitle: string;
    categoryButtonText?: string;
    noButton?: boolean;
    data: CategorySectionDataProps[];
    mb?: string | number;
    categoryHeaderMb?: string | number;
    noHeader?: boolean;
    noFooter?: boolean;
    noNavMenu?: boolean;
};

export const CategorySection: React.FC<CategorySectionProps> = ({
    categoryTitle,
    categoryButtonText = '',
    data,
    categoryHeaderMb = PADDINGS.subsectionHeaderMb,
    mb = PADDINGS.subsectionMb,
    noHeader = false,
    noFooter = false,
    noNavMenu = false,
}) => {
    const hiddenElements = useBreakpointValue({
        base: true,
        lg: false,
    });

    const activeCategory = getActiveCategory()?.title; //
    const menuList = activeCategory ? getSubCategoryList(activeCategory) : []; // когда будет апи всё это выпилить
    const memoizedValues = useMemo(() => hiddenElements, [hiddenElements]);

    return (
        <Flex justifyContent='space-between' mb={mb} direction='column'>
            {!noHeader && (
                <Flex justifyContent='space-between' mb={categoryHeaderMb}>
                    <CategoryHeader title={categoryTitle} />
                    {!memoizedValues && <ButtonViewMore title={categoryButtonText} />}
                </Flex>
            )}
            {!noNavMenu && <CategoryMenu list={menuList} selected='Вторые блюда' />}
            <Flex flexWrap='wrap' gap={4} mb={4}>
                {data.map((card, index) => {
                    const { title, description, img, subcategory, icon } = card;

                    return (
                        <CategoryCard
                            key={index}
                            title={title}
                            description={description}
                            img={img}
                            subcategory={subcategory}
                            icon={icon}
                        />
                    );
                })}
            </Flex>
            {!noFooter && (
                <Flex justifyContent='center' mb={categoryHeaderMb}>
                    <ButtonViewMore title={categoryButtonText} />
                </Flex>
            )}
        </Flex>
    );
};
