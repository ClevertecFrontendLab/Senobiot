import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router';

import { EXCLUDED_ROUTES, TEST_IDS } from '~/constants';
import { PADDINGS } from '~/constants/styles';
import { PreviewRecipesSectionProps } from '~/types';

import { ButtonViewMore, CategoryHeader } from '../..';
import CategoryCard from '../../CategorySection/CategorySectionCard';

export const JuiciestRecipesSection: React.FC<PreviewRecipesSectionProps> = ({
    recipes,
    markdownText,
}) => {
    if (!recipes?.length) return null;

    return (
        <Flex justifyContent='space-between' direction='column' mb={{ base: 8, xl: 10 }}>
            <Flex justifyContent='space-between'>
                <CategoryHeader title='Самое сочное' mb={PADDINGS.subsectionHeaderMb} />
                <ButtonViewMore
                    display={{ base: 'none', xl: 'flex' }}
                    as={Link}
                    to={`/${EXCLUDED_ROUTES.juiciest}`}
                    data-test-id={TEST_IDS.juciestLink}
                    title='Вся подборка'
                    noButtonIcon={false}
                />
            </Flex>
            <Flex flexWrap='wrap' gap={4}>
                {recipes.map(
                    ({ title, description, category, image, id, likes, bookmarks }, index) => (
                        <CategoryCard
                            cardDataTestId={`food-card-${index}`}
                            img={image}
                            key={id}
                            title={title}
                            description={description}
                            categories={category}
                            bookmarkMaxHeight={6}
                            coockingButtonAs={Link}
                            coockingButtonRoute={`${category[0].route}/${id}`}
                            coockingButtonDataId={index}
                            titleTextHighlight={markdownText}
                            bookmarksBookmarksValue={bookmarks}
                            bookmarksLikesValue={likes}
                        />
                    ),
                )}
            </Flex>
            <Flex
                justifyContent='center'
                display={{ base: 'flex', xl: 'none' }}
                mt={{ base: 3, xl: 0 }}
            >
                <ButtonViewMore
                    noButtonIcon={false}
                    data-test-id={TEST_IDS.juciestLinkMobile}
                    title='Вся подборка'
                    as={Link}
                    to='/the-juiciest'
                />
            </Flex>
        </Flex>
    );
};
