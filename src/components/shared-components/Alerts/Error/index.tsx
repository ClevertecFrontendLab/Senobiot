import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, CloseButton } from '@chakra-ui/react';
import React from 'react';

import { INSCRIPTIONS, TEST_IDS } from '~/constants';
import { ServerErrorAlertProps } from '~/types';

import { alertCloseButtonStyles, alertStyles } from './Error.styles';

export const ServerErrorAlert: React.FC<ServerErrorAlertProps> = ({
    onClose,
    title = INSCRIPTIONS.alert.title.default,
    body = INSCRIPTIONS.alert.body.default,
}) => (
    <Alert data-test-id={TEST_IDS.alert} sx={alertStyles}>
        <AlertIcon boxSize='24px' mr={3} />
        <Box flex='1'>
            <AlertTitle fontWeight={700}>{title}</AlertTitle>
            <AlertDescription display='block' fontWeight={400}>
                {body}
            </AlertDescription>
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
