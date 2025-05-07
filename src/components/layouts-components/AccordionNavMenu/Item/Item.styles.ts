import { SystemStyleObject } from '@chakra-ui/react';

export const getButtonStyles = (isExpanded: boolean): SystemStyleObject => ({
    bg: isExpanded ? 'lime.100' : 'white',
    px: 2,
    height: 12,
    fontWeight: isExpanded ? 700 : 500,
    fontSize: 16,
    position: 'relative',
    _hover: {
        bg: isExpanded ? 'lime.100' : 'lime.50',
    },
    '&::after': {
        content: '""',
        height: 2,
        width: 2,
        position: 'absolute',
        right: 2.5,
        borderLeft: '1px solid #000',
        borderBottom: '1px solid #000',
        transform: isExpanded ? 'rotate(135deg)' : 'rotate(-45deg)',
    },
});

export const buttonInnerWrapper = {
    display: 'flex',
    alignItems: 'start',
    pl: 1,
    gap: 3,
};

export const getSubCategoryButtonStyles = (isActive: boolean): SystemStyleObject => ({
    py: 2,
    ml: 5,
    textStyle: 'xs',
    fontWeight: isActive ? 700 : 500,
    pl: 4,
    position: 'relative',
    _hover: {
        bg: 'lime.50',
    },
    '&::before': {
        content: '""',
        height: 'calc(100% - 12px)',
        width: isActive ? '8px' : '1px',
        position: 'absolute',
        top: '6px',
        left: isActive ? '-8px' : 0,
        background: 'lime.300',
    },
});
