import { HStack } from '@chakra-ui/react';
import React from 'react';

import { StatItem, StatItemProps } from '../';

interface ProfileNotificationProps extends StatItemProps {
    bookmarksValue?: number;
    peopleValue?: number;
    likesValue?: number;
}

export const ProfileNotification: React.FC<ProfileNotificationProps> = ({
    bookmarksValue = 185,
    peopleValue = 589,
    likesValue = 587,
    ...props
}) => (
    <HStack gap={0} justifyContent='space-between'>
        <StatItem
            {...props}
            statIconUrl='/icons/bookmarks/heart.svg'
            statValue={bookmarksValue}
            statIconAltText='heart'
        />
        <StatItem
            {...props}
            statIconUrl='/icons/bookmarks/pople.svg'
            statValue={peopleValue}
            statIconAltText='people'
        />
        <StatItem
            {...props}
            statIconUrl='/icons/bookmarks/emoji-heart-eyes.svg'
            statValue={likesValue}
            statIconAltText='face'
        />
    </HStack>
);
