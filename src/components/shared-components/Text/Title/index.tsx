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
    textAlign?: ResponsiveValue<'left' | 'center' | 'right' | 'justify'>;
};

const TitleText: React.FC<TitleTextProps> = ({
    titleText = '',
    titleTextFz = '48px',
    titleTextFw = '700',
    titleTextFf = 'Inter',
    titleTextFs = 'normal',
    titleTextLh = '48px',
    titleTextColor = '#000',
    textAlign = 'center',
}) => (
    <Heading
        as='h1'
        fontSize={titleTextFz}
        fontWeight={titleTextFw}
        fontFamily={titleTextFf}
        fontStyle={titleTextFs}
        lineHeight={titleTextLh}
        color={titleTextColor}
        textAlign={textAlign}
    >
        {titleText}
    </Heading>
);

export default TitleText;
