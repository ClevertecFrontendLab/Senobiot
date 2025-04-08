import { Box, Flex, Image, ResponsiveValue } from '@chakra-ui/react';
import React from 'react';

import BookmarksSection, {
    BookmarksSectionProps,
} from '~/components/shared-components/BookmarksSection';
import TextRegular, { TextRegularProps } from '~/components/shared-components/Text/Regular';
import { TitleTextProps } from '~/components/shared-components/Text/Title';
import { SHADOWS } from '~/constants/styles';

import SubtitleText from '../Text/Subtitle';
import RecieptButtonsSection, { RecieptButtonsSectionProps } from './RecieptButtonsSection';

interface RecieptCardProps
    extends BookmarksSectionProps,
        TextRegularProps,
        TitleTextProps,
        RecieptButtonsSectionProps {
    title: string;
    text?: string;
    cardBorder?: string;
    cardBorderRadius?: string | number;
    minWidth?: ResponsiveValue<string | number>;
    position?: ResponsiveValue<
        '-webkit-sticky' | 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky'
    >;
    wrap?: ResponsiveValue<'wrap' | 'nowrap' | 'wrap-reverse'>;
    noImage?: boolean;
    noButtons?: ResponsiveValue<boolean>;
    noDescription?: ResponsiveValue<boolean>;
    imageSrc?: string;
    imageWidth?: object;
    imageHeight?: object;
    titleMargin?: number | string;
    descriptionMargin?: number | string;
    cardContentPadding?: ResponsiveValue<string | number>;
    cardContentTextAlign?: ResponsiveValue<
        | '-webkit-match-parent'
        | 'center'
        | 'end'
        | 'justify'
        | 'left'
        | 'match-parent'
        | 'right'
        | 'start'
    >;
}

const RecieptCard: React.FC<RecieptCardProps> = ({
    minWidth = '328px',
    wrap = 'wrap',
    noImage = false,
    noButtons = false,
    noDescription,
    imageWidth = { base: 158, xl: 346 },
    imageHeight = { base: 128, xl: 244 },
    imageSrc,
    title,
    text,
    cardContentPadding,
    cardContentTextAlign = 'start',
    titleMargin,
    descriptionMargin,
    cardBorder,
    position,
    cardBorderRadius,
    ...rest
}) => (
    <Flex
        position={position}
        minWidth={minWidth}
        wrap={wrap}
        border={cardBorder}
        cursor='pointer'
        _hover={{ boxShadow: SHADOWS.sideMunu }}
        transition='box-shadow 0.35s'
        borderRadius={cardBorderRadius}
    >
        {!noImage && (
            <Image
                src={imageSrc}
                alt={title}
                borderRadius={cardBorderRadius}
                height={imageHeight}
                width={imageWidth}
            />
        )}
        <Flex direction='column' p={cardContentPadding} textAlign={cardContentTextAlign}>
            <Box mb={titleMargin}>
                <SubtitleText {...rest} titleText={title} />
            </Box>
            {!noDescription && (
                <Box mb={descriptionMargin}>
                    <TextRegular regText={text} />
                </Box>
            )}
            <BookmarksSection {...rest} />
            {!noButtons && <RecieptButtonsSection {...rest} />}
        </Flex>
    </Flex>
);

export default RecieptCard;
