import { AlertStatus, ResponsiveValue } from '@chakra-ui/react';

export type AlertError = {
    title?: string;
    body?: string;
    position?: { left?: ResponsiveValue<string> };
};

export type AlertProps = {
    onClose?: () => void;
    title?: string;
    body?: string;
    status?: AlertStatus;
    noBody?: boolean;
    position?: { left?: ResponsiveValue<string> };
};
