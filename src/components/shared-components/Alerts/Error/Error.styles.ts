import { SystemStyleObject } from '@chakra-ui/react';

export const alertStyles: SystemStyleObject = {
    fontFamily: 'Inter',
    bg: 'red.500',
    status: 'error',
    variant: 'solid',
    borderRadius: 'md',
    position: 'fixed',
    w: { base: '328px', xl: '400px' },
    h: '72px',
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: { base: '100px', xl: '80px' },
    zIndex: 100,
};

export const alertCloseButtonStyles = {
    position: 'absolute',
    right: '8px',
    top: '8px',
    color: 'white',
    _hover: { bg: 'transparent' },
};
