import { Text } from '@chakra-ui/react';

import { ButtonBlack } from '~/components/shared-components';
import { BASE_URL, TEST_IDS } from '~/constants';
import { useRecentCredentials } from '~/hooks';
import { useSignInMutation } from '~/redux';
import { AuthPopupProps } from '~/types';

import { ModalPopup } from '../../Default';

export const LoginFailed: React.FC<AuthPopupProps> = ({ isOpen, onClose }) => {
    const {
        recentCredentials: { login, password },
    } = useRecentCredentials();
    const [signIn] = useSignInMutation();

    const handleRepeat = () => {
        if (login && password) {
            signIn({ login, password });
        }
        onClose();
    };

    return (
        <ModalPopup
            isOpen={isOpen}
            onClose={onClose}
            imageSrc={`${BASE_URL}assets/images/modals/modal-login-error.png`}
            header='Вход не выполнен'
            description={
                <Text color='blackAlpha.700'>
                    Что-то пошло не так.
                    <br />
                    Попробуйте еще раз
                </Text>
            }
            content={
                <ButtonBlack
                    dataTestId={TEST_IDS.modals.signInError.repeatButton}
                    text='Повторить'
                    onClick={handleRepeat}
                />
            }
            dataTestIdWindow={TEST_IDS.modals.signInError.window}
            dataTestIdCloseButton={TEST_IDS.modals.signInError.closeButton}
        />
    );
};
