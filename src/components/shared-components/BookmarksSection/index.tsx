import { Flex, HStack, ResponsiveValue } from '@chakra-ui/react';

import ButtonCategory, { ButtonCategoryProps } from '../ButtonCategory';
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
}

export const BookmarksSection: React.FC<BookmarksSectionProps> = ({
    heartIcon = '/icons/bookmarks/heart.svg',
    peopleIcon = '/icons/bookmarks/emoji-heart-eyes.svg',
    noCategory = false,
    bookmarkJustify = 'space-between',
    bookmarkStatGap,
    categoryBg = 'lime.150',
    bookmarkMb,
    ...props
}) => (
    <Flex justifyContent={bookmarkJustify} w='100%' mb={bookmarkMb}>
        {!noCategory && <ButtonCategory {...props} categoryBg={categoryBg} />}
        <HStack spacing={bookmarkStatGap}>
            <StatItem {...props} statIconUrl={heartIcon} />
            <StatItem {...props} statIconUrl={peopleIcon} />
        </HStack>
    </Flex>
);
