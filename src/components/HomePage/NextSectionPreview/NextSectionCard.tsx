import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

import BookmarksSection, { BookmarksSectionProps } from '~/components/shared/BookmarksSection';
import TextRegular, { TextRegularProps } from '~/components/shared/Text/Regular';
import TitleText, { TitleTextProps } from '~/components/shared/Text/Title';

interface NextSectionCardProps extends BookmarksSectionProps, TextRegularProps, TitleTextProps {
    title: string;
    description?: string;
}

const NextSectionCard: React.FC<NextSectionCardProps> = ({ title, ...props }) => (
    <Flex flexBasis='328px' wrap='wrap'>
        <Box>
            <TitleText {...props} titleTextFz='20px' titleTextLh='28px' titleText={title} />
        </Box>
        <Box>
            <TextRegular {...props} />
        </Box>
        <BookmarksSection {...props} />
    </Flex>
);

export default NextSectionCard;
