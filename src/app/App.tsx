import './App.css';

import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router';

import { AuthLayout, ContentLayout } from '~/layouts';
import { getIsLogged } from '~/redux/selectors';

function App() {
    const isLogged = useSelector(getIsLogged);

    return <BrowserRouter>{isLogged ? <ContentLayout /> : <AuthLayout />}</BrowserRouter>;
}

export default App;
