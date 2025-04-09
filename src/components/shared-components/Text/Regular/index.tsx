import { Text } from '@chakra-ui/react';
import React from 'react';

export type TextRegularProps = {
    regText?: string;
    regTextFz?: string;
    regTextFw?: number;
    regTextFf?: string;
    regTextLh?: string;
    regTextColor?: string;
    regTextNoOfLines?: number;
};

export const TextRegular: React.FC<TextRegularProps> = ({
    regText = '',
    regTextFz = '14px',
    regTextFw = 500,
    regTextFf = 'Inter',
    regTextLh = '20px',
    regTextColor = 'rgba(0, 0, 0, 0.64)',
    regTextNoOfLines = 3,
}) => (
    <Text
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
