import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, CloseButton } from '@chakra-ui/react';
import React from 'react';

interface ServerErrorAlertProps {
    onClose?: () => void;
    title?: string;
    body?: string;
}

export const ServerErrorAlert: React.FC<ServerErrorAlertProps> = ({
    onClose,
    title = 'Ошибка сервера',
    body = 'Попробуйте поискать снова попозже',
}) => (
    <Alert
        data-test-id='error-notification'
        fontFamily='Inter'
        bg='red.500'
        status='error'
        variant='solid'
        borderRadius='md'
        position='fixed'
        w={{ base: '328px', xl: '400px' }}
        h='72px'
        left='50%'
        transform='translateX(-50%)'
        bottom={{ base: '100px', xl: '80px' }}
        zIndex={100}
    >
        <AlertIcon boxSize='24px' mr={3} />
        <Box flex='1'>
            <AlertTitle fontWeight={700}>{title}</AlertTitle>
            <AlertDescription display='block' fontWeight={400}>
                {body}
            </AlertDescription>
        </Box>
        {onClose && (
            <CloseButton
                data-test-id='close-alert-button'
                position='absolute'
                right='8px'
                top='8px'
                onClick={onClose}
                color='white'
                _hover={{ bg: 'transparent' }}
            />
        )}
    </Alert>
);
