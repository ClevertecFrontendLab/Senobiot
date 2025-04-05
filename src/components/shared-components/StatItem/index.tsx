import { HStack, Image, Text } from '@chakra-ui/react';

export type StatItemProps = {
    statIconUrl?: string;
    statValue?: number;
    statIconAltText?: string;
    statTextColor?: string;
    statTextFontWeight?: number;
    stateIconSize?: number;
    stateTextFontSize?: string;
    stateTextLh?: string;
};

export const StatItem: React.FC<StatItemProps> = ({
    statIconUrl,
    statValue = 85,
    statTextColor = 'lime.600',
    statTextFontWeight = 700,
    stateIconSize = 8,
    stateTextFontSize = '20px',
    statIconAltText = 'heart',
    stateTextLh,
}) => (
    <HStack spacing={2} width={14}>
        <Image src={statIconUrl} alt={statIconAltText} boxSize={stateIconSize} />
        <Text
            fontSize={stateTextFontSize}
            color={statTextColor}
            fontWeight={statTextFontWeight}
            lineHeight={stateTextLh}
        >
            {statValue}
        </Text>
    </HStack>
);
