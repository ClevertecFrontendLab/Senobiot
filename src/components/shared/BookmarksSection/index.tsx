import { Flex } from '@chakra-ui/react';

import ButtonCategory, { ButtonCategoryProps } from '../ButtonCategory';
import StatItem, { StatItemProps } from '../StatItem';

export interface BookmarksSectionProps extends ButtonCategoryProps, StatItemProps {
    withoutCategory?: boolean;
    likesAmount?: StatItemProps['statValue'];
    peopleAmount?: StatItemProps['statValue'];
    heartIcon?: string;
    peopleIcon?: string;
}

const BookmarksSection: React.FC<BookmarksSectionProps> = ({
    heartIcon = '/icons/bookmarks/heart.svg',
    peopleIcon = '/icons/bookmarks/emoji-heart-eyes.svg',
    withoutCategory = false,
    ...props
}) => (
    <Flex>
        {!withoutCategory && <ButtonCategory {...props} />}
        <StatItem {...props} statIconUrl={heartIcon} />
        <StatItem {...props} statIconUrl={peopleIcon} />
    </Flex>
);

export default BookmarksSection;
