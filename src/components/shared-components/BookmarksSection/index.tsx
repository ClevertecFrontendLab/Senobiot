import { Flex, FlexProps, HStack, ResponsiveValue, SystemStyleObject } from '@chakra-ui/react';

import { ButtonCategory, ButtonCategoryProps } from '../Buttons';
import { StatItem, StatItemProps } from '../StatItem';

export interface BookmarksSectionProps extends ButtonCategoryProps, StatItemProps {
    noCategory?: ResponsiveValue<boolean>;
    likesAmount?: StatItemProps['statValue'];
    peopleAmount?: StatItemProps['statValue'];
    heartIcon?: string;
    peopleIcon?: string;
    bookmarkJustify?: string;
    bookmarkAlignItems?: FlexProps['alignItems']; // Исправили тип
    bookmarkStatGap?: ResponsiveValue<number>;
    bookmarkMb?: ResponsiveValue<number | string>;
    bookmarkMarginTop?: ResponsiveValue<number | string>;
    categories?: string[];
    categorySx?: SystemStyleObject;
    order?: FlexProps['order'];
    bookmarkMaxHeight?: FlexProps['maxHeight'];
    bookmarkWrap?: ResponsiveValue<'wrap' | 'nowrap' | 'wrap-reverse'>;
    bookmarksBookmarksValue?: number | string;
    bookmarksLikesValue?: number | string;
}

export const BookmarksSection: React.FC<BookmarksSectionProps> = ({
    heartIcon = '/icons/bookmarks/heart.svg',
    peopleIcon = '/icons/bookmarks/emoji-heart-eyes.svg',
    noCategory = false,
    bookmarkJustify = 'space-between',
    bookmarkAlignItems = 'flex-start',
    bookmarkStatGap,
    categoryBg = 'lime.150',
    categories = [],
    categorySx,
    bookmarkMb,
    order,
    bookmarkMaxHeight,
    bookmarkWrap = 'wrap',
    bookmarkMarginTop,
    bookmarksBookmarksValue,
    bookmarksLikesValue,
    ...props
}) => (
    <Flex
        justifyContent={bookmarkJustify}
        alignItems={bookmarkAlignItems}
        mb={bookmarkMb}
        mt={bookmarkMarginTop}
        order={order}
        flexShrink={1}
        flexGrow={0}
    >
        {!noCategory && (
            <Flex
                maxH={bookmarkMaxHeight} // скрывает категории которые не влазят в одну строку если их несколько по умолчанию 6 * 4 = 24px
                overflow='hidden'
                wrap={bookmarkWrap}
                flexDirection={{ base: 'column', xl: 'row' }}
                // flexDirection={{ base: 'column', md: 'row', lg: 'column', xl: 'row' }}
                gap={1}
                sx={categorySx}
                mr={2}
            >
                {categories.map((e, index) => (
                    <ButtonCategory
                        key={index}
                        {...props}
                        categoryBg={categoryBg}
                        categoryKey={e}
                    />
                ))}
            </Flex>
        )}
        <HStack spacing={bookmarkStatGap} minW='72px'>
            <StatItem {...props} statIconUrl={heartIcon} statValue={bookmarksBookmarksValue} />
            <StatItem {...props} statIconUrl={peopleIcon} statValue={bookmarksLikesValue} />
        </HStack>
    </Flex>
);
