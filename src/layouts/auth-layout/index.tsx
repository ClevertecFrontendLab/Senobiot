import { useSelector } from 'react-redux';

import { Loader } from '~/components/layouts-components';
import { ServerErrorAlert } from '~/components/shared-components';
import { selectError, selectLoadingStatus } from '~/redux/selectors';
import { AuthViews } from '~/views';

export const AuthLayout: React.FC = () => {
    const isLoading = useSelector(selectLoadingStatus);
    const error = useSelector(selectError);

    return (
        <>
            {isLoading && <Loader />}
            <AuthViews />
            {error && <ServerErrorAlert title={error && error.title} body={error && error.body} />}
        </>
    );
};
