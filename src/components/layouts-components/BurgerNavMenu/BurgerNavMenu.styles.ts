import { PADDINGS, SHADOWS, WIDTHS } from '~/constants/styles';

export const burgerMenuWrapperStyles = {
    ml: 'auto',
    flexDirection: 'column',
    justifyContent: 'space-between',
    w: WIDTHS.burgerNavMenu,
    pt: PADDINGS.burgerMenu,
    maxH: `calc(100vh - ${PADDINGS.bottomMnu * 4}px)`,
    pl: 5,
    pr: 1,
    bg: 'white',
    borderRadius: '0 0 12px 12px',
    boxShadow: SHADOWS.burgerNavMenu,
};

export const burgerMenuStyles = {
    overflow: 'auto',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '8px',
    pr: 1,
    pt: { base: '20px', md: '30px' },
    '.chakra-accordion__button': {
        paddingLeft: 0,
    },
};
