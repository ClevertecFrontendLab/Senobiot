import './App.css';

import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router';

import { Loader } from '~/components/layouts-components';
import { ModalManager } from '~/components/layouts-components/ModalsManager';
import { useCheckAuth } from '~/hooks/useCheckAuth';
import { AuthLayout, ContentLayout } from '~/layouts';
import { selectLoginStatus } from '~/redux/selectors';

function App() {
    const { isLoading } = useCheckAuth();
    const isLogged = useSelector(selectLoginStatus);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <BrowserRouter>
            {isLogged ? <ContentLayout /> : <AuthLayout />}
            <ModalManager />
        </BrowserRouter>
    );
}

export default App;
