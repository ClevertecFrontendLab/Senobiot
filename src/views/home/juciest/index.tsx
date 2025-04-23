import { Flex } from '@chakra-ui/react';
import { Link } from 'react-router';

import { ButtonViewMore, CategoryHeader } from '~/components/shared-components';
import CategoryCard from '~/components/shared-components/CategorySection/CategorySectionCard';
import { PADDINGS } from '~/constants/styles';
import { CategorySectionProps } from '~/types';

export const JuciestSection: React.FC<CategorySectionProps> = ({ data, categoryTitle = '' }) => {
    const juciestData = data.sort((a, b) => b.likes - a.likes).slice(0, 4);

    return (
        <Flex justifyContent='space-between' direction='column' mb={{ base: 8, xl: 10 }}>
            <Flex justifyContent='space-between'>
                <CategoryHeader title={categoryTitle} mb={PADDINGS.subsectionHeaderMb} />
                <ButtonViewMore
                    display={{ base: 'none', xl: 'flex' }}
                    as={Link}
                    to='/the-juiciest'
                    data-test-id='juiciest-link'
                    title='Вся подборка'
                    noButtonIcon={false}
                />
            </Flex>
            <Flex flexWrap='wrap' gap={4}>
                {juciestData.map((card, index) => {
                    const { title, description, category, subcategory, image, id } = card;

                    return (
                        <CategoryCard
                            cardDataTestId={`food-card-${index}`}
                            img={image}
                            key={index}
                            title={title}
                            description={description}
                            categories={category}
                            bookmarkMaxHeight={6}
                            coockingButtonAs={Link}
                            coockingButtonRoute={`/${category[0]}/${subcategory[0]}/${id}`}
                            coockingButtonDataId={index}
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
                    to='/the-juiciest'
                />
            </Flex>
        </Flex>
    );
};
