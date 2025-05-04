import { Flex } from '@chakra-ui/react';
import { Link } from 'react-router';

import { PADDINGS } from '~/constants/styles';
// import { setEmptySearch } from '~/redux/reducers';
// import { getActiveSearch } from '~/redux/selectors';
import { CategorySectionProps } from '~/types';

import { ButtonViewMore } from '../Buttons';
import CategoryMenu from './CategoryMenu';
import CategoryCard from './CategorySectionCard';

export const CategorySection: React.FC<CategorySectionProps> = ({
    activeSubcategory,
    categoryData,
    recieptsData,
    categoryButtonText = '',
    categoryHeaderMb = PADDINGS.subsectionHeaderMb,
    mb = PADDINGS.subsectionMb,
    noFooter = false,
    noNavMenu = false,
    onClick,
    markdownText,
}) => {
    const { subCategoriesList } = categoryData || {};
    // const activeSearch = useSelector(getActiveSearch);
    // const dispatch = useDispatch();
    // const location = getLocation(useLocation().pathname);
    // let categoryCards = data
    //     .filter((e) => e.category.includes(location.categoryName!))
    //     .filter((e) => e.subcategory.includes(location.subcategoryName!));

    // if (location.categoryName === 'the-juiciest') {
    //     categoryCards = [...data].sort((a, b) => b.likes - a.likes);
    // }

    // if (activeSearch) {
    //     categoryCards = searchByTitle(categoryCards, activeSearch);

    //     if (!categoryCards?.length) {
    //         dispatch(setEmptySearch(true));
    //         return;
    //     }
    // }

    // if (!categoryCards.length) return;

    return (
        <Flex justifyContent='space-between' mb={mb} direction='column' w='100%'>
            {!noNavMenu && subCategoriesList?.length && (
                <CategoryMenu list={subCategoriesList} activeSubcategory={activeSubcategory} />
            )}
            <Flex flexWrap='wrap' gap={4}>
                {recieptsData?.map((card, index) => {
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
                    <ButtonViewMore title={categoryButtonText} onClick={onClick} />
                </Flex>
            )}
        </Flex>
    );
};
