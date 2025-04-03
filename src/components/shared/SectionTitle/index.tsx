import { Text } from '@chakra-ui/react';
import React from 'react';

export interface SectionTitleProps {
    title: string;
    fontSize?: string;
    fontWeight?: string;
    fontFamily?: string;
    fontStyle?: string;
    lineHeight?: string;
    color?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
    title = '',
    fontSize = '48px',
    fontWeight = '700',
    fontFamily = 'Inter',
    fontStyle = 'normal',
    lineHeight = '48px',
    color = '#000',
}) => (
    <Text
        fontSize={fontSize}
        fontWeight={fontWeight}
        fontFamily={fontFamily}
        fontStyle={fontStyle}
        lineHeight={lineHeight}
        color={color}
    >
        {title}
    </Text>
);

export default SectionTitle;
