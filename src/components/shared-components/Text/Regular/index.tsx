import { ResponsiveValue, Text, TextProps } from '@chakra-ui/react';
import React from 'react';

export type TextRegularProps = {
    regText?: string | number;
    regTextFz?: ResponsiveValue<string>;
    regTextFw?: number;
    regTextFf?: string;
    regTextLh?: ResponsiveValue<string>;
    regTextColor?: string;
    regTextNoOfLines?: ResponsiveValue<number>;
    regTextAlign?: TextProps['textAlign'];
};

export const TextRegular: React.FC<TextRegularProps> = ({
    regText = '',
    regTextFz = '14px',
    regTextFw = 400,
    regTextFf = 'Inter',
    regTextLh = '20px',
    regTextColor = '#000',
    regTextNoOfLines = 3,
    regTextAlign = 'left',
}) => (
    <Text
        textAlign={regTextAlign}
        fontSize={regTextFz}
        fontWeight={regTextFw}
        fontFamily={regTextFf}
        lineHeight={regTextLh}
        color={regTextColor}
        noOfLines={regTextNoOfLines}
    >
        {regText}
    </Text>
);
