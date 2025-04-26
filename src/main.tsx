import { ChakraProvider } from '@chakra-ui/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from '~/app/App.tsx';
import { store } from '~/store/configure-store.ts';
import { defaultTheme } from '~/themes';

import { AppProviders } from './providers';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <ChakraProvider theme={defaultTheme}>
                <AppProviders>
                    <App />
                </AppProviders>
            </ChakraProvider>
        </Provider>
    </StrictMode>,
);
