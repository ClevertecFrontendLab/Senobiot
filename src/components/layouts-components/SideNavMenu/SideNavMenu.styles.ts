import { PADDINGS, SHADOWS } from '~/constants/styles';

export const sideMenuWrapperStyles = {
    flexDirection: 'column',
    justifyContent: 'space-between',
    w: '256px',
    h: '100vh',
    pt: PADDINGS.topMenu,
    pl: 2.5,
    pb: 8,
    pr: 1,
    maxHeight: '100vh',
    position: 'fixed',
    zIndex: 9,
    bg: 'white',
    left: 0,
    boxShadow: SHADOWS.main,
    display: { base: 'none', xl: 'flex' },
};

export const sideMenuStyles = {
    overflow: 'auto',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '8px',
    pt: 8,
    pr: 1,
    '&:hover': {
        boxShadow: SHADOWS.sideMunu,
    },
};
