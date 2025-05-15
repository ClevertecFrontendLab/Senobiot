import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Loader } from '~/components/layouts-components';
import { AlertPopup } from '~/components/shared-components';
import { selectError, selectLoadingStatus, selectPopup } from '~/redux/selectors';
import { setAppError } from '~/redux/store/app-slice';
import { AuthViews } from '~/views';

export const AuthLayout: React.FC = () => {
    const isLoading = useSelector(selectLoadingStatus);
    const error = useSelector(selectError);
    const popup = useSelector(selectPopup);
    const dispatch = useDispatch();
    const resetError = useCallback(() => {
        dispatch(setAppError(null));
    }, [dispatch]);

    return (
        <>
            {isLoading && <Loader />}
            <AuthViews />
            {error && (
                <AlertPopup
                    title={error && error.title}
                    body={error && error.body}
                    onClose={resetError}
                />
            )}
            {popup && <AlertPopup title={popup} onClose={resetError} status='success' />}
        </>
    );
};
