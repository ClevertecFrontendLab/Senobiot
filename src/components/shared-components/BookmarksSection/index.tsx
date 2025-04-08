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
    bookmarkStatGap?: number;
}

const BookmarksSection: React.FC<BookmarksSectionProps> = ({
    heartIcon = '/icons/bookmarks/heart.svg',
    peopleIcon = '/icons/bookmarks/emoji-heart-eyes.svg',
    noCategory = false,
    bookmarkJustify,
    bookmarkStatGap,
    categoryBg = 'lime.150',
    ...props
}) => (
    <Flex justifyContent={bookmarkJustify}>
        {!noCategory && <ButtonCategory {...props} categoryBg={categoryBg} />}
        <HStack spacing={bookmarkStatGap}>
            <StatItem {...props} statIconUrl={heartIcon} />
            <StatItem {...props} statIconUrl={peopleIcon} />
        </HStack>
    </Flex>
);

export default BookmarksSection;
