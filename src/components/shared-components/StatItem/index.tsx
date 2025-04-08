import { Flex, HStack, Image, Text } from '@chakra-ui/react';

export type StatItemProps = {
    statIconUrl?: string;
    statValue?: number;
    statIconAltText?: string;
    statTextColor?: string;
    statTextFontWeight?: number;
    stateIconSize?: number;
    stateTextFontSize?: string;
    stateTextLh?: string;
    statAlign?: string;
    statGap?: string | number;
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
    statAlign = 'center',
    statGap = 2,
}) => (
    <Flex alignItems={statAlign}>
        <HStack spacing={statGap}>
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
    </Flex>
);
