import { Flex, FlexProps, Image, ImageProps, ResponsiveValue } from '@chakra-ui/react';
import React from 'react';

import { TextRegular, TextRegularProps } from '~/components/shared-components';
import { BookmarksSection, BookmarksSectionProps } from '~/components/shared-components';
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
    // Main container
    title: string;
    text?: string;
    noImage?: boolean;
    noButtons?: ResponsiveValue<boolean>;
    noDescription?: ResponsiveValue<boolean>;
    cardDataTestId?: string;
    cardBorder?: FlexProps['border'];
    cardBorderRadius?: FlexProps['borderRadius'];
    cardContentPadding?: FlexProps['padding'];
    cardContentTextAlign?: FlexProps['textAlign'];
    cardFlexWidth?: FlexProps['flex'];
    minWidth?: FlexProps['minWidth'];
    maxWidth?: FlexProps['maxWidth'];
    width?: FlexProps['width'];
    height?: FlexProps['height'];
    position?: FlexProps['position'];

    // Image
    imageSrc?: string;
    imageWidth?: ImageProps['width'];
    imageMinWidth?: ImageProps['minWidth'];
    imageHeight?: ImageProps['height'];
    imageMinHeight?: ImageProps['minHeight'];
    imageBorderRadius?: ImageProps['borderRadius'];
    imageFit?: ImageProps['objectFit'];

    // Typo
    titleMargin?: FlexProps['marginBottom'];
    descriptionMargin?: FlexProps['marginBottom'];
    subtitleOrder?: FlexProps['order'];
    descriptionOrder?: FlexProps['order'];
    bookmarksOrder?: FlexProps['order'];
    buttonsOrder?: FlexProps['order'];
    buttonsMargin?: FlexProps['marginTop'];
    buttonsJustify?: FlexProps['justifyContent'];

    // Header
    cardHeaderNoOfLines?: ResponsiveValue<number>;
    cardHeaderHeight?: FlexProps['height'];

    // Description
    descriptionHeight?: FlexProps['height'];
    descriptionMinHeight?: FlexProps['minHeight'];

    // Effects
    noHoverEffect?: boolean;
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
    imageMinWidth,
    imageMinHeight,
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
    descriptionMinHeight,
    imageFit = 'unset',
    cardDataTestId,
    cardHeaderHeight = { base: '3.5em', xl: '1.5em' },
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
                minH={imageMinHeight}
                width={imageWidth}
                minW={imageMinWidth}
                objectFit={imageFit}
            />
        )}
        <Flex
            direction='column'
            p={cardContentPadding}
            textAlign={cardContentTextAlign}
            width='100%'
        >
            <Flex mb={titleMargin} order={subtitleOrder} h={cardHeaderHeight}>
                <SubtitleText
                    {...rest}
                    titleText={title}
                    titleTextNoOfLines={cardHeaderNoOfLines}
                />
            </Flex>
            {!noDescription && (
                <Flex
                    mb={descriptionMargin}
                    order={descriptionOrder}
                    height={descriptionHeight}
                    minH={descriptionMinHeight}
                >
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
