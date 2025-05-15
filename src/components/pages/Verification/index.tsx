// VerificationPage.tsx
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router';

import { EXCLUDED_ROUTES } from '~/constants';
import { setAppModal, setAppPopup } from '~/redux/store/app-slice';
import { Modals } from '~/types';

const VerificationPage: React.FC = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const emailVerified = searchParams.get('emailVerified');
    const dispatch = useDispatch();

    useEffect(() => {
        if (emailVerified === 'true') {
            dispatch(setAppPopup('Верификация прошла успешно'));
            navigate(`/${EXCLUDED_ROUTES.login}`, { replace: true });
        } else {
            dispatch(setAppModal(Modals.AUTH_VERIFICATION_FAILED));
            navigate(`/${EXCLUDED_ROUTES.registration}`, { replace: true });
        }
    }, [emailVerified, navigate, dispatch]);

    return null;
};

export default VerificationPage;
