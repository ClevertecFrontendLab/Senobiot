import { Box, Flex, Image } from '@chakra-ui/react';
import React from 'react';

import ButtonOutlined from '~/components/shared/Button/Outlined';
import TextRegular from '~/components/shared/Text/Regular';

interface NextSectionCardMinimized {
    title: string;
    buttonText?: string;
    iconUrl?: string;
    bg?: string;
}

const NextSectionCardMinimized: React.FC<NextSectionCardMinimized> = ({
    title,
    iconUrl,
    buttonText = 'Готовить',
}) => (
    <Flex>
        <Image boxSize={6} src={iconUrl}></Image>
        <Box>
            <TextRegular fontSize='20px' lineHeight='28px' text={title} noOfLines={1} />
        </Box>
        <Box>
            <ButtonOutlined text={buttonText} />
        </Box>
    </Flex>
);

export default NextSectionCardMinimized;
