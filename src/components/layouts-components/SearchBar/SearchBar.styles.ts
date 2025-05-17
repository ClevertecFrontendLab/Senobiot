import { SHADOWS } from '~/constants/styles';

export const wrapper = {
    flexDirection: 'column',
    w: { base: '100%', md: '480px', xl: 898 },
    mx: 'auto',
    px: { base: 4, xl: '30px' },
    mb: { base: 4, xl: 6 },
    pb: { base: 4, xl: 8 },
    _focusWithin: {
        boxShadow: SHADOWS.searchBar,
        borderRadius: '0 0 8px 8px',
    },
    gap: { base: 4, xl: 8 },
};

export const inputWrapper = {
    mx: 'auto',
    minW: { base: 298, md: 448, xl: 518 },
    flexDirection: 'column',
};

export const allergensWrapper = {
    mt: { xl: 4 },
    alignItems: 'center',
    justifyContent: 'space-between',
};
