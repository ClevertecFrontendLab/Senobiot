import { Flex, Image } from '@chakra-ui/react';
import React from 'react';

import { ButtonOutlined, SubtitleText } from '~/components/shared-components';
import { BORDERS } from '~/constants/styles';

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
    <Flex gap={2} alignItems='center' border={BORDERS.light} py={2.5} px={3} borderRadius='6px'>
        <Flex flex='0 0 24px'>
            <Image boxSize={6} src={iconUrl}></Image>
        </Flex>

        <Flex flex='1 1 100%' justifyContent='flex-start' textAlign='left'>
            <SubtitleText
                titleTextLh='24px'
                titleHeading='h5'
                titleTextFz={{ base: 'sm' }}
                titleText={title}
                titleTextNoOfLines={1}
                titleTextAlign='left'
            />
        </Flex>
        <Flex flex='0 0 32px'>
            <ButtonOutlined size='sm' outlBtnText={buttonText} />
        </Flex>
    </Flex>
);

export default NextSectionCardMinimized;
