import { Flex, Image, ResponsiveValue } from '@chakra-ui/react';
import React from 'react';

import { TextRegular, TextRegularProps } from '~/components/shared-components';
import BookmarksSection, {
    BookmarksSectionProps,
} from '~/components/shared-components/BookmarksSection';
import { TitleTextProps } from '~/components/shared-components/Text/Title';
import { SHADOWS } from '~/constants/styles';

import { SubtitleText } from '../Text';
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
    imageBorderRadius?: string | number;
    minWidth?: ResponsiveValue<string | number>;
    width?: ResponsiveValue<string | number>;
    position?: ResponsiveValue<
        '-webkit-sticky' | 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky'
    >;
    wrap?: ResponsiveValue<'wrap' | 'nowrap' | 'wrap-reverse'>;
    noImage?: boolean;
    noButtons?: ResponsiveValue<boolean>;
    noDescription?: ResponsiveValue<boolean>;
    imageSrc?: string;
    imageWidth?: ResponsiveValue<number>;
    imageHeight?: ResponsiveValue<number>;
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
    subtitleOrder?: ResponsiveValue<number>;
    descriptionOrder?: ResponsiveValue<number>;
    bookmarksOrder?: ResponsiveValue<number>;
    buttonsOrder?: ResponsiveValue<number>;
    buttonsJustify?: ResponsiveValue<string>;
    gap?: ResponsiveValue<number>;
    cardFlexeidth?: ResponsiveValue<string>;
    buttonsMargin?: ResponsiveValue<string>;
}

const RecieptCard: React.FC<RecieptCardProps> = ({
    cardFlexeidth,
    minWidth = '328px',
    width = '100%',
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
    imageBorderRadius = cardBorderRadius,
    subtitleOrder,
    descriptionOrder,
    bookmarksOrder,
    buttonsOrder,
    buttonsJustify = 'flex-end',
    gap,
    buttonsMargin = 'auto',
    ...rest
}) => (
    <Flex
        flex={cardFlexeidth}
        position={position}
        minWidth={minWidth}
        w={width}
        wrap={wrap}
        border={cardBorder}
        cursor='pointer'
        _hover={{ boxShadow: SHADOWS.sideMunu }}
        transition='box-shadow 0.35s'
        borderRadius={cardBorderRadius}
        gap={gap}
    >
        {!noImage && (
            <Image
                src={imageSrc}
                alt={title}
                borderRadius={imageBorderRadius}
                height={imageHeight}
                width={imageWidth}
            />
        )}
        <Flex
            direction='column'
            p={cardContentPadding}
            textAlign={cardContentTextAlign}
            width='100%'
        >
            <Flex mb={titleMargin} order={subtitleOrder}>
                <SubtitleText {...rest} titleText={title} />
            </Flex>
            {!noDescription && (
                <Flex mb={descriptionMargin} order={descriptionOrder}>
                    <TextRegular regText={text} />
                </Flex>
            )}
            <Flex order={bookmarksOrder}>
                <BookmarksSection {...rest} />
            </Flex>
            <Flex order={buttonsOrder} justifyContent={buttonsJustify} mt={buttonsMargin}>
                {!noButtons && <RecieptButtonsSection {...rest} />}
            </Flex>
        </Flex>
    </Flex>
);

export default RecieptCard;
