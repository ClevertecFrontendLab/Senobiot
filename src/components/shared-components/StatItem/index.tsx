import { Flex, HStack, Image, Text } from '@chakra-ui/react';

export type StatItemProps = {
    statIconUrl?: string;
    statValue?: number | string;
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
    statValue,
    statTextColor = 'lime.600',
    statTextFontWeight = 700,
    stateIconSize = 8,
    stateTextFontSize = '20px',
    statIconAltText = 'heart',
    stateTextLh,
    statAlign = 'center',
    statGap = 1.5,
}) => (
    <Flex alignItems={statAlign}>
        <HStack spacing={statGap} w='max-content'>
            <Image src={statIconUrl} alt={statIconAltText} boxSize={stateIconSize} />
            <Text
                fontSize={stateTextFontSize}
                color={statTextColor}
                fontWeight={statTextFontWeight}
                lineHeight={stateTextLh}
            >
                {statValue === undefined ? '-' : statValue}
            </Text>
        </HStack>
    </Flex>
);
