import { Flex, useBreakpointValue } from '@chakra-ui/react';
import React, { useMemo } from 'react';

import ButtonViewMore from '~/components/shared-components/ButtonViewMore';
import { PADDINGS } from '~/constants/styles';

import { CategoryHeader } from '../Headers';
import CategoryCard from './CategorySectionCard';

export type CategorySectionDataProps = {
    title: string;
    description: string;
    img: string;
    subcategory?: string;
    icon?: string;
};

type CategorySectionProps = {
    сategoryTitle: string;
    сategoryButtonText?: string;
    noButton?: boolean;
    data: CategorySectionDataProps[];
    mb?: string | number;
    categoryHeaderMb?: string | number;
};

export const CategorySection: React.FC<CategorySectionProps> = ({
    сategoryTitle,
    сategoryButtonText = '',
    data,
    categoryHeaderMb = PADDINGS.subsectionHeaderMb,
    mb = PADDINGS.subsectionMb,
}) => {
    const hiddenElements = useBreakpointValue({
        base: true,
        lg: false,
    });

    const memoizedValues = useMemo(() => hiddenElements, [hiddenElements]);

    return (
        <Flex justifyContent='space-between' mb={mb} direction='column'>
            <Flex justifyContent='space-between' mb={categoryHeaderMb}>
                <CategoryHeader title={сategoryTitle} />
                {!memoizedValues && <ButtonViewMore title={сategoryButtonText} />}
            </Flex>
            <Flex flexWrap='wrap' gap={4}>
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
        </Flex>
    );
};
