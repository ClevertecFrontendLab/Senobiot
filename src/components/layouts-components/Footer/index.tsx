import { Button, Flex, HStack, Image, Spacer, Text } from '@chakra-ui/react';
import React from 'react';

import { BUTTONS_TEXT, INSCRIPTIONS } from '~/constants';
import { FooterProps } from '~/types';

export const Footer: React.FC<FooterProps> = ({ noExitButton = false, p = '32px 24px 0px' }) => (
    <Flex flexDirection='column' p={p} fontSize={12} as='footer'>
        <HStack mb={4}>
            <Text color='blackAlpha.400'>{INSCRIPTIONS.footer.title}</Text>
            <Spacer />
        </HStack>
        <Text color='blackAlpha.700' mb={4} whiteSpace='pre-line'>
            {INSCRIPTIONS.footer.copyright}
        </Text>
        {!noExitButton && (
            <Button
                justifyContent='start'
                colorScheme='black'
                variant='link'
                size='sm'
                leftIcon={<Image src='/icons/left-icon.svg' boxSize={3} alt='icon' />}
            >
                {BUTTONS_TEXT.footer}
            </Button>
        )}
    </Flex>
);
