import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { setAccessToken, useCheckAuthQuery, useRefreshAuthMutation } from '~/redux';
import { setLogged } from '~/redux/store/app-slice';

export const useCheckAuth = () => {
    const dispatch = useDispatch();
    const {
        data,
        error,
        isLoading: isCheckingAuth,
        isError: isErrorChecking,
    } = useCheckAuthQuery();
    const [refreshAuth, { isLoading: isRefreshing, isError: isErrorRefreshing }] =
        useRefreshAuthMutation();

    const [hasTriedRefresh, setHasTriedRefresh] = useState(false);

    useEffect(() => {
        if (!isRefreshing && !hasTriedRefresh) {
            if (data) {
                dispatch(setLogged(true));
            } else if (error) {
                refreshAuth()
                    .unwrap()
                    .then((res) => {
                        dispatch(setAccessToken(res.accessToken));
                        dispatch(setLogged(true));
                    })
                    .catch((err) => {
                        console.error('Ошибка обновления токена:', err);
                    })
                    .finally(() => {
                        setHasTriedRefresh(true);
                    });
            }
        }
    }, [data, error, isRefreshing, hasTriedRefresh, dispatch, refreshAuth]);

    return {
        isLoading: isCheckingAuth || isRefreshing,
        isError: isErrorChecking || isErrorRefreshing,
    };
};
