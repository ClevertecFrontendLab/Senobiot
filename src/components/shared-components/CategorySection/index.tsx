import { Flex } from '@chakra-ui/react';
import { Link } from 'react-router';

import { TEST_IDS } from '~/constants';
import { PADDINGS } from '~/constants/styles';
import { CategorySectionProps } from '~/types';

import { ButtonViewMore } from '../Buttons';
import CategoryMenu from './CategoryMenu';
import CategoryCard from './CategorySectionCard';

export const CategorySection: React.FC<CategorySectionProps> = ({
    activeSubcategory,
    categoryData,
    categoryRecipes,
    categoryButtonText = '',
    categoryHeaderMb = PADDINGS.subsectionHeaderMb,
    mb = PADDINGS.subsectionMb,
    noFooter = false,
    noNavMenu = false,
    onClick,
    markdownText,
    recieptsByCategory,
}) => {
    const { subCategoriesList } = categoryData || {};
    const recipes = categoryRecipes?.length ? categoryRecipes : recieptsByCategory;

    return (
        <Flex justifyContent='space-between' mb={mb} direction='column' w='100%'>
            {!noNavMenu && subCategoriesList?.length && (
                <CategoryMenu list={subCategoriesList} activeSubcategory={activeSubcategory} />
            )}
            <Flex flexWrap='wrap' gap={4}>
                {recipes?.map((card, index) => {
                    const { title, description, image, category, id, likes, bookmarks } = card;

                    return (
                        <CategoryCard
                            cardDataTestId={`food-card-${index}`}
                            key={index}
                            titleTextHighlight={markdownText}
                            title={title}
                            description={description}
                            img={image}
                            categories={category}
                            bookmarkMaxHeight={6}
                            coockingButtonAs={Link}
                            coockingButtonRoute={id}
                            coockingButtonDataId={index}
                            bookmarksLikesValue={likes}
                            bookmarksBookmarksValue={bookmarks}
                        />
                    );
                })}
            </Flex>
            {!noFooter && (
                <Flex justifyContent='center' mt={categoryHeaderMb}>
                    <ButtonViewMore
                        data-test-id={TEST_IDS.buttonViewMore}
                        title={categoryButtonText}
                        onClick={onClick}
                    />
                </Flex>
            )}
        </Flex>
    );
};
