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
    bookmarkStatGap?: ResponsiveValue<number>;
    bookmarkMb?: ResponsiveValue<number | string>;
    categories?: string[];
    categorySx?: SystemStyleObject;
    order?: FlexProps['order'];
}

export const BookmarksSection: React.FC<BookmarksSectionProps> = ({
    heartIcon = '/icons/bookmarks/heart.svg',
    peopleIcon = '/icons/bookmarks/emoji-heart-eyes.svg',
    noCategory = false,
    bookmarkJustify = 'space-between',
    bookmarkStatGap,
    categoryBg = 'lime.150',
    categories = [],
    categorySx,
    bookmarkMb,
    order,
    ...props
}) => (
    <Flex
        justifyContent={bookmarkJustify}
        mb={bookmarkMb}
        order={order}
        flexShrink={1}
        flexGrow={0}
    >
        {!noCategory && (
            <Flex
                maxW={{ '2xl': 150 }}
                overflow='hidden'
                wrap='nowrap'
                flexDirection={{ base: 'column', md: 'row', lg: 'column', xl: 'row' }}
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
            <StatItem {...props} statIconUrl={heartIcon} />
            <StatItem {...props} statIconUrl={peopleIcon} />
        </HStack>
    </Flex>
);
