import { SystemStyleObject } from '@chakra-ui/react';

import { BORDERS } from '~/constants/styles';

export const getWrapperStyles = (
    isOpen: boolean,
    options: string[],
    isDisabled: boolean,
): SystemStyleObject => ({
    p: 2,
    pr: 10,
    border: '1px solid',
    borderColor: isOpen || options?.length ? 'lime.400' : '#ccc',
    borderRadius: 'md',
    cursor: 'pointer',
    _focus: { borderColor: !isDisabled ? 'lime.400' : 'initial' },
    _hover: { borderColor: !isDisabled ? 'lime.400' : 'initial' },
    w: '100%',
});

export const inputStyles = {
    variant: 'ghost',
    bg: 0,
    _hover: { bg: 0 },
    p: 0,
    pl: 4,
    h: 'inherit',
    _disabled: {
        color: 'blackAlpha.700',
    },
    color: 'blackAlpha.700',
    fontWeight: 400,
    fontSize: 16,
};

export const tagStyles = {
    variant: 'outline',
    border: BORDERS.allergenTag,
    color: 'lime.600',
    fontSize: '12px',
    pt: 0.5,
    fontWeight: 500,
    h: '20px',
    boxShadow: 0,
};
