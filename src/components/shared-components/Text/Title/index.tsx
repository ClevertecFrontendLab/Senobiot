import { Heading, ResponsiveValue } from '@chakra-ui/react';
import React from 'react';

import { getHighlightedText } from '~/utils';

export type TitleTextProps = {
    titleText?: string;
    titleTextFz?: ResponsiveValue<string>;
    titleTextFw?: number;
    titleTextFf?: string;
    titleTextFs?: string;
    titleTextLh?: ResponsiveValue<string>;
    titleTextColor?: string;
    titleTextAlign?: ResponsiveValue<'left' | 'center' | 'right' | 'justify'>;
    titleHeading?: React.ElementType;
    titleTextNoOfLines?: ResponsiveValue<number> | number;
    titleTextHighlight?: string | null;
};

export const TitleText: React.FC<TitleTextProps> = ({
    titleText = '',
    titleTextFz = '48px',
    titleTextFw = '700',
    titleTextFf = 'Inter',
    titleTextFs = 'normal',
    titleTextLh = '48px',
    titleTextColor = '#000',
    titleTextAlign = 'center',
    titleHeading = 'h1',
    titleTextNoOfLines = 3,
    titleTextHighlight,
}) => (
    <Heading
        as={titleHeading}
        fontSize={titleTextFz}
        fontWeight={titleTextFw}
        fontFamily={titleTextFf}
        fontStyle={titleTextFs}
        lineHeight={titleTextLh}
        color={titleTextColor}
        textAlign={titleTextAlign}
        noOfLines={titleTextNoOfLines}
    >
        {!titleTextHighlight
            ? titleText
            : getHighlightedText(titleText, titleTextHighlight, '#2DB100')}
    </Heading>
);
