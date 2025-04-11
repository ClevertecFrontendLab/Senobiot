import { Flex } from '@chakra-ui/react';
import React from 'react';

import {
    CategoryHeader,
    CategorySectionDataProps,
    TextRegular,
} from '~/components/shared-components';
import { PADDINGS } from '~/constants/styles';

import Card from './Card';
import CardMinimized from './CardMinimized';

type CategorySectionNextProps = {
    title: string;
    description?: string;
    noButton?: boolean;
    data: CategorySectionDataProps[];
    mb?: string | number;
    categoryHeaderMb?: string | number;
    noHeader?: boolean;
    noNavMenu?: boolean;
};

export const CategorySectionNext: React.FC<CategorySectionNextProps> = ({
    title,
    description,
    data,
}) => (
    <Flex
        direction='column'
        mb={{ base: PADDINGS.footer, xl: 'unset' }} // конец контента
    >
        <Flex mb={4} gap={2} direction={{ base: 'column', md: 'row' }} alignItems='center'>
            <CategoryHeader
                title={title}
                mb={{ base: 3, md: 0 }}
                flex={{ md: '1 0 33%', xl: '1 0 33%', '2xl': `0 0 calc(100% - 668px)` }}
            />
            <TextRegular regText={description} regTextNoOfLines={4} />
        </Flex>
        <Flex direction={{ base: 'column', md: 'row' }} gap={3}>
            {data.map((card, index) => {
                if (index < 2) {
                    const { title, description, img, subcategory } = card;
                    return (
                        <Card
                            key={index}
                            title={title}
                            description={description}
                            subcategory={subcategory}
                            icon={img}
                        />
                    );
                }
            })}
            <Flex
                direction='column'
                flex={{ base: '1 1 100%', md: '1 1 33%', xl: '1 0 33%', '2xl': '1 0 668px' }}
                gap={2.5}
            >
                {data.map((card, index) => {
                    const { title, img } = card;
                    if (index >= 2 && index < 5) {
                        return <CardMinimized key={index} title={title} iconUrl={img} />;
                    }
                })}
            </Flex>
        </Flex>
    </Flex>
);
