import { extendTheme } from '@chakra-ui/react';

export const defaultTheme = extendTheme({
    colors: {
        lime: {
            50: '#FFFFD3',
            150: '#D7FF94',
            100: '#EAFFC7',
            300: '#C4FF61',
            600: '#2DB100',
            800: '134B00',
        },
        blackAlpha: {
            700: 'rgba(0, 0, 0, 0.64)',
            400: 'rgba(0, 0, 0, 0.24)',
            300: 'rgba(0, 0, 0, 0.16)',
            200: 'rgba(0, 0, 0, 0.08)',
            50: 'rgba(0, 0, 0, 0.04)',
        },
    },
    breakpoints: {
        sm: '360px',
        md: '768px',
        lg: '992px',
        xl: '1440px',
        '2xl': '1920px',
    },
});
