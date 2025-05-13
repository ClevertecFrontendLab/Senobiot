import './App.css';

import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router';

import { AuthLayout, ContentLayout } from '~/layouts';
import { selectLoginStatus } from '~/redux/selectors';

function App() {
    const isLogged = useSelector(selectLoginStatus);

    return <BrowserRouter>{isLogged ? <ContentLayout /> : <AuthLayout />}</BrowserRouter>;
}

export default App;
