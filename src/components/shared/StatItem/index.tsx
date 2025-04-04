import { HStack, Image, Text } from '@chakra-ui/react';

export type StatItemProps = {
    statIconUrl?: string;
    statValue?: number;
    statIconAltText?: string;
    statTextColor?: string;
    statTextFontWeight?: number;
    stateIconSize?: string;
    stateTextFontSize?: string;
};

const StatItem: React.FC<StatItemProps> = ({
    statIconUrl,
    statValue = 85,
    statTextColor = 'green.500',
    statTextFontWeight = 700,
    stateIconSize = '24px',
    stateTextFontSize = '20px',
    statIconAltText = 'heart',
}) => (
    <HStack spacing={2}>
        <Image src={statIconUrl} alt={statIconAltText} boxSize={stateIconSize} />
        <Text fontSize={stateTextFontSize} color={statTextColor} fontWeight={statTextFontWeight}>
            {statValue}
        </Text>
    </HStack>
);

export default StatItem;
