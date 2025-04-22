import { Flex, FlexProps, Image, ImageProps, ResponsiveValue } from '@chakra-ui/react';
import React from 'react';

import { TextRegular, TextRegularProps } from '~/components/shared-components';
import {
    BookmarksSection,
    BookmarksSectionProps,
} from '~/components/shared-components/BookmarksSection';
import { TitleTextProps } from '~/components/shared-components/Text/Title';
import { BORDERS, SHADOWS } from '~/constants/styles';

import { SubtitleText } from '../Text';
import RecieptButtonsSection, { RecieptButtonsSectionProps } from './ButtonsBlock';

export interface RecieptCardProps
    extends BookmarksSectionProps,
        TextRegularProps,
        TitleTextProps,
        RecieptButtonsSectionProps,
        FlexProps {
    title: string;
    text?: string;
    cardBorder?: FlexProps['border'];
    cardBorderRadius?: FlexProps['borderRadius'];
    cardContentPadding?: FlexProps['padding'];
    cardContentTextAlign?: FlexProps['textAlign'];
    cardFlexWidth?: FlexProps['flex'];
    imageBorderRadius?: string | number;
    minWidth?: FlexProps['minWidth'];
    maxWidth?: FlexProps['maxWidth'];
    width?: FlexProps['width'];
    height?: FlexProps['height'];
    position?: FlexProps['position'];
    wrap?: FlexProps['wrap'];
    noImage?: boolean;
    noButtons?: ResponsiveValue<boolean>;
    noDescription?: ResponsiveValue<boolean>;
    imageSrc?: string;
    imageWidth?: ResponsiveValue<number | string>;
    imageHeight?: ResponsiveValue<number | string>;
    titleMargin?: FlexProps['marginBottom'];
    descriptionMargin?: FlexProps['marginBottom'];
    subtitleOrder?: FlexProps['order'];
    descriptionOrder?: FlexProps['order'];
    bookmarksOrder?: FlexProps['order'];
    buttonsOrder?: FlexProps['order'];
    buttonsMargin?: FlexProps['marginTop'];
    buttonsJustify?: FlexProps['justifyContent'];
    gap?: FlexProps['gap'];
    cardHeaderNoOfLines?: ResponsiveValue<number>;
    descriptionHeight?: FlexProps['height'];
    imageFit?: ImageProps['objectFit'];
    noHoverEffect?: boolean;
    cardDataTestId?: string;
}

export const RecieptCard: React.FC<RecieptCardProps> = ({
    cardFlexWidth,
    maxWidth,
    minWidth = '328px',
    width = '100%',
    height,
    wrap = 'wrap',
    noImage = false,
    noButtons = false,
    noHoverEffect = false,
    noDescription,
    imageWidth = { base: 158, xl: 346 },
    imageHeight = { base: 128, xl: 244 },
    imageSrc,
    title,
    text,
    cardContentPadding = {
        base: '8px 8px 4px',
        xl: '16px 24px 20px',
    },
    cardContentTextAlign = 'start',
    titleMargin,
    descriptionMargin = 6,
    cardBorder = BORDERS.light,
    position,
    cardBorderRadius = '4px',
    cardHeaderNoOfLines,
    imageBorderRadius = cardBorderRadius,
    subtitleOrder,
    descriptionOrder,
    bookmarksOrder,
    buttonsOrder,
    buttonsJustify = 'flex-end',
    gap,
    buttonsMargin = 'auto',
    descriptionHeight,
    imageFit = 'unset',
    cardDataTestId,
    ...rest
}) => (
    <Flex
        data-test-id={cardDataTestId}
        flex={cardFlexWidth}
        position={position}
        minWidth={minWidth}
        maxWidth={maxWidth}
        w={width}
        h={height}
        wrap={wrap}
        border={cardBorder}
        cursor='pointer'
        _hover={!noHoverEffect ? { boxShadow: SHADOWS.sideMunu } : ''}
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
                objectFit={imageFit}
            />
        )}
        <Flex
            direction='column'
            p={cardContentPadding}
            textAlign={cardContentTextAlign}
            width='100%'
        >
            <Flex mb={titleMargin} order={subtitleOrder}>
                <SubtitleText
                    {...rest}
                    titleText={title}
                    titleTextNoOfLines={cardHeaderNoOfLines}
                />
            </Flex>
            {!noDescription && (
                <Flex mb={descriptionMargin} order={descriptionOrder} height={descriptionHeight}>
                    <TextRegular {...rest} regText={text} />
                </Flex>
            )}
            <BookmarksSection {...rest} order={bookmarksOrder} />
            <Flex order={buttonsOrder} justifyContent={buttonsJustify} mt={buttonsMargin}>
                {!noButtons && <RecieptButtonsSection {...rest} />}
            </Flex>
        </Flex>
    </Flex>
);
