import { Text } from '@chakra-ui/react';
import React from 'react';

export interface TextRegularProps {
    text: string;
    fontSize?: string;
    fontWeight?: string;
    fontFamily?: string;
    fontStyle?: string;
    lineHeight?: string;
    color?: string;
    noOfLines?: number;
}

const TextRegular: React.FC<TextRegularProps> = ({
    text = '',
    fontSize = '14px',
    fontWeight = '500',
    fontFamily = 'Inter',
    fontStyle = 'normal',
    lineHeight = '20px',
    color = 'rgba(0, 0, 0, 0.64)',
    noOfLines = 3,
}) => (
    <Text
        fontSize={fontSize}
        fontWeight={fontWeight}
        fontFamily={fontFamily}
        fontStyle={fontStyle}
        lineHeight={lineHeight}
        color={color}
        noOfLines={noOfLines}
    >
        {text}
    </Text>
);

export default TextRegular;
