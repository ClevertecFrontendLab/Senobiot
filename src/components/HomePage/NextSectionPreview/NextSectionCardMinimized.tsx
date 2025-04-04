import { Box, Flex, Image } from '@chakra-ui/react';
import React from 'react';

import ButtonOutlined from '~/components/shared/Button/Outlined';
import TextRegular from '~/components/shared/Text/Regular';

interface NextSectionCardMinimized {
    title: string;
    buttonText?: string;
    iconUrl?: string;
}

const NextSectionCardMinimized: React.FC<NextSectionCardMinimized> = ({
    title,
    iconUrl,
    buttonText = 'Готовить',
}) => (
    <Flex>
        <Image boxSize={6} src={iconUrl}></Image>
        <Box>
            <TextRegular regTextFz='20px' regTextLh='28px' regText={title} regTextNoOfLines={1} />
        </Box>
        <Box>
            <ButtonOutlined outlBtnText={buttonText} />
        </Box>
    </Flex>
);

export default NextSectionCardMinimized;
