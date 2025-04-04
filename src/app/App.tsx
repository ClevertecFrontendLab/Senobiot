import { BrowserRouter, Route, Routes } from 'react-router';

import AppLayout from '~/layouts/app-layout';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<AppLayout />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
