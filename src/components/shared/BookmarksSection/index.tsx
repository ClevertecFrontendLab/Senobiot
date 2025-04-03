import { Flex } from '@chakra-ui/react';

import ButtonCategory from '../ButtonCategory';
import StatItem from '../StatItem';

interface BookmarksSectionProps {
    name: string;
    likeValue?: number;
    peopleValue?: number;
    bg?: string;
    iconUrl?: string;
    withoutCategory?: boolean;
}

const BookmarksSection: React.FC<BookmarksSectionProps> = ({
    name,
    likeValue,
    peopleValue,
    bg,
    iconUrl,
    withoutCategory,
}) => (
    <Flex>
        {!withoutCategory && <ButtonCategory bg={bg} text={name} iconUrl={iconUrl} />}
        <StatItem icon='/icons/bookmarks/heart.svg' value={likeValue || 85} name='heart' />
        <StatItem icon='/icons/bookmarks/pople.svg' value={peopleValue || 152} name='people' />
    </Flex>
);

export default BookmarksSection;
