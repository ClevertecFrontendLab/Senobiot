import { extendTheme } from '@chakra-ui/react';

export const defaultTheme = extendTheme({
    colors: {
        lime: {
            50: '#F7FEE7',
            300: '#C4FF61',
            600: '#2DB100',
        },
        black: {
            alpha700: 'rgba(0, 0, 0, 0.64)',
        },
    },
    breakpoints: {
        sm: '360px',
        md: '768px',
        xl: '1440px',
        '2xl': '1920px',
    },
});
