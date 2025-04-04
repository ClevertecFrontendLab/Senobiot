import { Box, Flex, Image, ResponsiveValue } from '@chakra-ui/react';
import React from 'react';

import BookmarksSection, { BookmarksSectionProps } from '~/components/shared/BookmarksSection';
import TextRegular, { TextRegularProps } from '~/components/shared/Text/Regular';
import TitleText, { TitleTextProps } from '~/components/shared/Text/Title';

import RecieptButtonsSection, { RecieptButtonsSectionProps } from './RecieptButtonsSection';

interface RecieptCardProps
    extends BookmarksSectionProps,
        TextRegularProps,
        TitleTextProps,
        RecieptButtonsSectionProps {
    title: string;
    text?: string;
    minWidth?: string;
    wrap?: ResponsiveValue<'wrap' | 'nowrap' | 'wrap-reverse'>;
    withoutCategory?: boolean;
    withoutImage?: boolean;
    withoutButtons?: boolean;
    imageSrc?: string;
    imageWidth?: object;
    imageHeight?: object;
}

const RecieptCard: React.FC<RecieptCardProps> = ({
    minWidth = '328px',
    wrap = 'wrap',
    withoutImage = false,
    withoutButtons = false,
    imageWidth = { md: 158, xl: 346 },
    imageHeight = { md: 128, xl: 244 },
    imageSrc,
    title,
    text,
    ...rest
}) => (
    <Flex flexBasis={minWidth} wrap={wrap}>
        {!withoutImage && (
            <Image
                src={imageSrc}
                alt={title}
                borderRadius='md'
                height={imageHeight}
                width={imageWidth}
            />
        )}
        <Box>
            <TitleText {...rest} titleText={title} />
        </Box>
        <Box>
            <TextRegular regText={text} />
        </Box>
        <BookmarksSection {...rest} />
        {!withoutButtons && <RecieptButtonsSection {...rest} />}
    </Flex>
);

export default RecieptCard;
