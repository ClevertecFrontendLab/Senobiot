import './App.css';

import { BrowserRouter } from 'react-router';

import AppLayout from '~/layouts/app-layout';

function App() {
    return (
        <BrowserRouter>
            <AppLayout />
        </BrowserRouter>
    );
}

export default App;
