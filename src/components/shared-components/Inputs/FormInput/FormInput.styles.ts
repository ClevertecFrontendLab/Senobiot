import { SystemStyleObject } from '@chakra-ui/react';

import { BASE_URL } from '~/constants';
import { BORDERS } from '~/constants/styles';

export const getPasswordImgStyles = (showPassword: boolean = false): SystemStyleObject => ({
    position: 'relative',
    bgImage: showPassword
        ? `${BASE_URL}assets/images/icons/password-show.svg`
        : `${BASE_URL}assets/images/icons/password-hide.svg`,
    bgRepeat: 'no-repeat',
    bgSize: 'cover',
    w: '18px',
    minW: '18px',
    maxW: '18px',
    h: '18px',
    pos: 'absolute',
    p: 0,
    top: 10,
    right: 4,
    _hover: { backgrounColor: 'none' },
    _active: { backgrounColor: 'none' },
    zIndex: 5,
});

export const helper = {
    mt: 1,
    fontSize: '12px',
    color: 'blackAlpha.700',
};

export const input = {
    _placeholder: {
        color: 'lime.800',
    },
    bg: '#fff',
    border: BORDERS.lime,
    '::-ms-reveal': {
        display: 'none',
    },
    pos: 'relative',
    fontSize: '18px',
    h: 12,
};

export const label = {
    fontWeight: 400,
    fontSize: '16px',
    color: '#000',
    mb: 1,
};
