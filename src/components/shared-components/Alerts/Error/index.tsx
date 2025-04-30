import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, CloseButton } from '@chakra-ui/react';
import React from 'react';

interface ServerErrorAlertProps {
    onClose?: () => void;
}

export const ServerErrorAlert: React.FC<ServerErrorAlertProps> = ({ onClose }) => (
    <Alert status='error' variant='solid' borderRadius='md' position='relative'>
        <AlertIcon boxSize='24px' mr={3} />

        <Box flex='1'>
            <AlertTitle fontWeight='bold'>ОШИБКА СЕРВЕРА</AlertTitle>
            <AlertDescription display='block'>ПОПРОБУЙТЕ НЕМНОГО ПОЗЖЕ</AlertDescription>
        </Box>

        {onClose && (
            <CloseButton
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
