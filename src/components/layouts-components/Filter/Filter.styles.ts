import { BORDERS, SHADOWS } from '~/constants/styles';

export const content = {
    minW: { base: 344, xl: 463 },
    p: { base: 4, xl: 8 },
    pr: { base: 1.5, xl: 2 },
};

export const closeButton = {
    top: { base: 5, xl: 8 },
    right: { base: 3, xl: 5 },
};

export const body = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    p: 0,
    h: '100%',
};

export const header = {
    p: 0,
    mb: 8,
};

export const filtersWrapper = {
    w: '100%',
    gap: 4,
    pr: { base: 2.5 },
    mb: 6,
};

export const multiCheckBoxWrapper = {
    align: 'start',
    w: '100%',
    borderRadius: '4px',
    boxShadow: SHADOWS.allergensMenu,
    border: BORDERS.light,
};

export const footer = {
    display: 'flex',
    p: '32px 14px 0 0',
    w: '100%',
};

export const clearButton = {
    fontSize: '14px',
    fontWeight: 600,
    variant: 'outline',
    mr: 2,
    px: 6,
    border: BORDERS.main,
};

export const applyButton = {
    fontSize: '14px',
    fontWeight: 600,
    bg: '#000',
    color: '#fff',
    px: 6,
    _hover: { bg: '#000' },
};

export const allergensWrapper = {
    w: '100%',
    alignItems: 'center',
    wrap: 'wrap',
    gap: 2,
};
