import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, CloseButton } from '@chakra-ui/react';
import React from 'react';

import { TEST_IDS } from '~/constants';
import { AlertProps } from '~/types';

import { alertCloseButtonStyles, getAlertStyles } from './Alert.styles';

export const AlertPopup: React.FC<AlertProps> = ({
    onClose,
    title,
    body,
    status = 'error',
    noBody = false,
    position,
}) => (
    <Alert
        data-test-id={TEST_IDS.alert}
        sx={getAlertStyles(status, position)}
        status={status}
        variant='solid'
    >
        <AlertIcon boxSize='24px' mr={3} />
        <Box flex='1'>
            <AlertTitle fontWeight={700}>{title}</AlertTitle>
            {!noBody && (
                <AlertDescription display='block' fontWeight={400}>
                    {body}
                </AlertDescription>
            )}
        </Box>
        {onClose && (
            <CloseButton
                data-test-id={TEST_IDS.alertCloseButton}
                onClick={onClose}
                sx={alertCloseButtonStyles}
            />
        )}
    </Alert>
);
