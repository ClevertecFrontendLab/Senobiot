import { PADDINGS } from '~/constants/styles';

export const bottomNavMenuStyles = {
    position: 'fixed',
    bottom: 0,
    zIndex: 10,
    bg: 'lime.50',
    display: { base: 'flex', xl: 'none' },
    height: PADDINGS.bottomMnu * 4,
    width: '100%',
    justifyContent: 'space-around',
};
