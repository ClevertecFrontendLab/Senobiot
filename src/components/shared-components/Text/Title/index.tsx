import { Heading, ResponsiveValue } from '@chakra-ui/react';
import React from 'react';

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
};

const TitleText: React.FC<TitleTextProps> = ({
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
        {titleText}
    </Heading>
);

export default TitleText;
