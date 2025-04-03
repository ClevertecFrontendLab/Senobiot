import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from '~/app/App.tsx';
import { store } from '~/store/configure-store.ts';

const customTheme = extendTheme({
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

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <ChakraProvider theme={customTheme}>
                <App />
            </ChakraProvider>
        </Provider>
    </StrictMode>,
);
