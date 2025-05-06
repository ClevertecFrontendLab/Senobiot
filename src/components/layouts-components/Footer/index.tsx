import { Button, Flex, HStack, Image, Spacer, Text } from '@chakra-ui/react';
import React from 'react';

import { FooterProps } from '~/types';

export const Footer: React.FC<FooterProps> = ({ noExitButton = false, p = '32px 24px 0px' }) => (
    <Flex flexDirection='column' p={p} fontSize={12} as='footer'>
        <HStack mb={4}>
            <Text color='blackAlpha.400'>Версия программы 03.25</Text>
            <Spacer />
        </HStack>
        <Text color='blackAlpha.700' mb={4}>
            Все права защищены, ученический файл,
            <br />
            ©Клевер Технолоджи, 2025
        </Text>
        {!noExitButton && (
            <Button
                justifyContent='start'
                colorScheme='black'
                variant='link'
                size='sm'
                leftIcon={<Image src='/icons/left-icon.svg' boxSize={3} alt='icon' />}
            >
                Выйти
            </Button>
        )}
    </Flex>
);
