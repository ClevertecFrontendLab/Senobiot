import { Flex, Image } from '@chakra-ui/react';
import React from 'react';

import { ButtonOutlined, SubtitleText } from '~/components/shared-components';
import { BORDERS } from '~/constants/styles';

type NextSectionCardMinimized = {
    title: string;
    buttonText?: string;
    iconUrl?: string;
};

const NextSectionCardMinimized: React.FC<NextSectionCardMinimized> = ({
    title,
    iconUrl,
    buttonText = 'Готовить',
}) => (
    <Flex
        maxH={{ base: '52px', '2xl': '56px' }}
        gap={2}
        alignItems='center'
        border={BORDERS.light}
        py={2.5}
        px={3}
        borderRadius='6px'
        flexGrow={1}
    >
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
            <ButtonOutlined
                size='sm'
                outlBtnText={buttonText}
                outlBtnColor='lime.600'
                outlBtnBorderColor='lime.600'
                outlBtnBorder='1px solid'
                maxWidth={{ base: '70px', '2xl': '87px' }}
                minWidth={{ base: '70px', '2xl': '87px' }}
                outlBtnTextFontSize={{ base: '12px', '2xl': '14px' }}
                outlBtnTextPadding={{ base: '8px', '2xl': '6px 12px' }}
            />
        </Flex>
    </Flex>
);

export default NextSectionCardMinimized;
