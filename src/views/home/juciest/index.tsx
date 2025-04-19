import { Flex } from '@chakra-ui/react';
import { Link } from 'react-router';

import { ButtonViewMore, CategoryHeader } from '~/components/shared-components';
import CategoryCard from '~/components/shared-components/CategorySection/CategorySectionCard';
import { PADDINGS } from '~/constants/styles';
import { CategorySectionProps } from '~/types';

export const JuciestSection: React.FC<CategorySectionProps> = ({ data, categoryTitle = '' }) => (
    <Flex justifyContent='space-between' direction='column' mb={{ base: 8, xl: 10 }}>
        <Flex justifyContent='space-between'>
            <CategoryHeader title={categoryTitle} mb={PADDINGS.subsectionHeaderMb} />
            <ButtonViewMore
                display={{ base: 'none', xl: 'flex' }}
                as={Link}
                to='/juiciest'
                data-test-id='juiciest-link'
                title='Вся подборка'
                noButtonIcon={false}
            />
        </Flex>
        <Flex flexWrap='wrap' gap={4}>
            {data.slice(0, 4).map((card, index) => {
                const { title, description, category, image } = card;
                return (
                    <CategoryCard
                        img={image}
                        key={index}
                        title={title}
                        description={description}
                        categories={category}
                    />
                );
            })}
        </Flex>
        <Flex
            justifyContent='center'
            display={{ base: 'flex', xl: 'none' }}
            mt={{ base: 3, xl: 0 }}
        >
            <ButtonViewMore
                noButtonIcon={false}
                data-test-id='juiciest-link-mobile'
                title='Вся подборка'
                as={Link}
                to='/juiciest'
            />
        </Flex>
    </Flex>
);
