import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectModal } from '~/redux/selectors';
import { setAppModal } from '~/redux/store/app-slice';
import { Modals } from '~/types';

import {
    EnterPin,
    LoginFailed,
    RegistrationSuccess,
    ResetPassword,
    RestoreByEmail,
    VerificationFailed,
} from './Modals';

export const ModalManager: React.FC = () => {
    const currentModal = useSelector(selectModal);
    const dispatch = useDispatch();

    const onClose = () => {
        dispatch(setAppModal(null));
    };

    if (!currentModal) return null;

    switch (currentModal) {
        case Modals.AUTH_VERIFICATION_SEND:
            return <RegistrationSuccess isOpen={!!currentModal} onClose={onClose} />;

        case Modals.AUTH_VERIFICATION_FAILED:
            return <VerificationFailed isOpen={!!currentModal} onClose={onClose} />;

        case Modals.AUTH_LOGIN_FAILED:
            return <LoginFailed isOpen={!!currentModal} onClose={onClose} />;

        case Modals.AUTH_RESTORE_BY_EMAIL:
            return <RestoreByEmail isOpen={!!currentModal} onClose={onClose} />;

        case Modals.AUTH_ENTER_PIN:
            return <EnterPin isOpen={!!currentModal} onClose={onClose} />;

        case Modals.AUTH_RESET_PASSWORD:
            return <ResetPassword isOpen={!!currentModal} onClose={onClose} />;

        default:
            return null;
    }
};
