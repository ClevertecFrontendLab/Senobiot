import { Text } from '@chakra-ui/react';
import React from 'react';

export type TitleTextProps = {
    titleText?: string;
    titleTextFz?: string;
    titleTextFw?: number;
    titleTextFf?: string;
    titleTextFs?: string;
    titleTextLh?: string;
    titleTextColor?: string;
};

const TitleText: React.FC<TitleTextProps> = ({
    titleText = '',
    titleTextFz = '48px',
    titleTextFw = '700',
    titleTextFf = 'Inter',
    titleTextFs = 'normal',
    titleTextLh = '48px',
    titleTextColor = '#000',
}) => (
    <Text
        fontSize={titleTextFz}
        fontWeight={titleTextFw}
        fontFamily={titleTextFf}
        fontStyle={titleTextFs}
        lineHeight={titleTextLh}
        color={titleTextColor}
    >
        {titleText}
    </Text>
);

export default TitleText;
