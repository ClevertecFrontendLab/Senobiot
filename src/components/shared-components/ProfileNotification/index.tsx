import { Flex, ResponsiveValue } from '@chakra-ui/react';
import React from 'react';

import { StatItem, StatItemProps } from '../';

interface ProfileNotificationProps extends StatItemProps {
    bookmarksValue?: number;
    peopleValue?: number;
    likesValue?: number;
    justifyContent?: string;
    flexDirection?:
        | ResponsiveValue<'row' | 'row-reverse' | 'column' | 'column-reverse'>
        | undefined;
    alignItems?: string;
    alignContent?: string;
    height?: number;
    width?: string;
    px?: number;
    py?: number;
}

export const ProfileNotification: React.FC<ProfileNotificationProps> = ({
    bookmarksValue = 185,
    peopleValue = 589,
    likesValue = 587,
    justifyContent = 'space-between',
    flexDirection,
    alignItems,
    alignContent = 'initial',
    height,
    width,
    px,
    py,
    ...props
}) => (
    <Flex
        justifyContent={justifyContent}
        flexDirection={flexDirection}
        alignItems={alignItems}
        alignContent={alignContent}
        w={width}
        h={height}
        px={px}
        py={py}
    >
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
    </Flex>
);
