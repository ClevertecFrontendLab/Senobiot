import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, useSearchParams } from 'react-router';

import { EXCLUDED_ROUTES } from '~/constants';
import { setAppModal, setAppPopup } from '~/redux/store/app-slice';
import { Modals } from '~/types';

const VerificationPage: React.FC = () => {
    const [searchParams] = useSearchParams();
    const emailVerified = searchParams.get('emailVerified');
    const dispatch = useDispatch();

    useEffect(() => {
        if (emailVerified === 'true') {
            dispatch(setAppPopup('Верификация прошла успешно'));
        } else {
            dispatch(setAppModal(Modals.AUTH_VERIFICATION_FAILED));
        }
    }, [emailVerified, dispatch]);

    return emailVerified === 'true' ? (
        <Navigate to={`/${EXCLUDED_ROUTES.login}`} replace />
    ) : (
        <Navigate to={`/${EXCLUDED_ROUTES.registration}`} replace />
    );
};

export default VerificationPage;
