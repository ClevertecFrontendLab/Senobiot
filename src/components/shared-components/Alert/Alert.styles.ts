import { AlertStatus, ResponsiveValue, SystemStyleObject } from '@chakra-ui/react';
export const getAlertStyles = (
    status: AlertStatus,
    position: { left?: ResponsiveValue<string> } = {},
): SystemStyleObject => ({
    fontFamily: 'Inter',
    bg: status === 'success' ? 'green.500' : 'red.500',
    borderRadius: 'md',
    position: 'fixed',
    w: { base: '328px', xl: '400px' },
    minH: status === 'success' ? '48px' : '72px',
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: { base: '100px', xl: '80px' },
    zIndex: 1401,
    ...position,
});

export const alertCloseButtonStyles = {
    position: 'absolute',
    right: '8px',
    top: '8px',
    color: 'white',
    _hover: { bg: 'transparent' },
};
