import { Box, Button, HStack, Image, Spacer, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const Footer: React.FC = () => (
    <Box bg='gray.100' py={4} px={6} borderTop='1px solid' borderColor='gray.300' textAlign='left'>
        <VStack spacing={2} align='stretch'>
            <HStack mb={4}>
                <Text fontSize='xs' color='gray.500'>
                    Версия программы 03.25
                </Text>
                <Spacer />
            </HStack>
            <Text fontSize='xs' color='gray.500' mb={4}>
                Все права защищены, ученический файл, ©Клевер Технолоджи, 2025
            </Text>
            <Button
                justifyContent='start'
                colorScheme='red'
                variant='outline'
                size='sm'
                leftIcon={<Image src='/icons/left-icon.svg' boxSize='24px' alt='icon' />}
            >
                Выйти
            </Button>
        </VStack>
    </Box>
);

export default Footer;
