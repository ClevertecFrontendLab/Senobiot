import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router';

import { TEST_IDS } from '~/constants';
import { PADDINGS } from '~/constants/styles';
import { RecipeProps } from '~/types';

import { ButtonViewMore, CategoryHeader } from '../..';
import CategoryCard from '../../CategorySection/CategorySectionCard';

interface JuiciestRecipesSectionProps {
    recipes?: RecipeProps[];
    markdownText?: string;
}

export const JuiciestRecipesSection: React.FC<JuiciestRecipesSectionProps> = ({
    recipes,
    markdownText,
}) => {
    if (!recipes?.length) return null;

    return (
        <Flex justifyContent='space-between' direction='column' mb={{ base: 8, xl: 10 }}>
            <Flex justifyContent='space-between'>
                <CategoryHeader title='Самое сочное' mb={PADDINGS.subsectionHeaderMb} />
                <ButtonViewMore
                    display={{ base: 'none', md: 'flex' }}
                    as={Link}
                    to='/the-juiciest'
                    data-test-id={TEST_IDS.juciestLink}
                    title='Вся подборка'
                    noButtonIcon={false}
                />
            </Flex>
            <Flex flexWrap='wrap' gap={4}>
                {recipes.map((card, index) => {
                    const {
                        title,
                        description,
                        category,
                        subcategory,
                        image,
                        id,
                        likes,
                        bookmarks,
                    } = card;

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
                            titleTextHighlight={markdownText}
                            bookmarksBookmarksValue={bookmarks}
                            bookmarksLikesValue={likes}
                        />
                    );
                })}
            </Flex>
            <Flex
                justifyContent='center'
                display={{ base: 'flex', md: 'none' }}
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
