import { Link, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import { BASE_URL, EXCLUDED_ROUTES, TEST_IDS } from '~/constants';
import { useRecentCredentials } from '~/hooks';

import { ModalPopup } from '../../Default';

export type AuthPopupProps = {
    isOpen: boolean;
    onClose: () => void;
};

export const RegistrationSuccess: React.FC<AuthPopupProps> = ({ isOpen, onClose }) => {
    const {
        recentCredentials: { email },
    } = useRecentCredentials();
    const navigate = useNavigate();

    const handleClose = () => {
        navigate(`/${EXCLUDED_ROUTES.login}`, { replace: true });
        onClose();
    };

    const description = (
        <Text>
            Мы отправили вам на почту
            <Text as='span'>{email}</Text>
            ссылку для верификации.
        </Text>
    );
    const footer = (
        <Text>
            Не пришло письмо? Проверьте папку Спам.По другим вопросам свяжитесь&nbsp;
            <Link href='#'>с поддержкой</Link>
        </Text>
    );

    return (
        <ModalPopup
            dataTestIdWindow={TEST_IDS.modals.signUpSuccess.window}
            dataTestIdCloseButton={TEST_IDS.modals.signUpSuccess.closeButton}
            isOpen={isOpen}
            onClose={handleClose}
            imageSrc={`${BASE_URL}assets/images/modals/modal-verification.png`}
            header='Остался последний шаг. Нужно верифицировать ваш e-mail'
            description={description}
            footer={footer}
        />
    );
};
