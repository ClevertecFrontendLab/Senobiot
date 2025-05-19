import { Link, Text } from '@chakra-ui/react';

import { BASE_URL, TEST_IDS } from '~/constants';
import { AuthPopupProps } from '~/types';

import { ModalPopup } from '../../Default';

export const VerificationFailed: React.FC<AuthPopupProps> = ({ isOpen, onClose }) => {
    const description = (
        <Text color='blackAlpha.700'>
            Ваша ссылка для верификации недействительна. Попробуйте зарегистрироваться снова.
        </Text>
    );
    const footer = (
        <Text>
            Остались вопросы? Свяжитесь&nbsp;
            <Link href='#'>с поддержкой</Link>
        </Text>
    );

    return (
        <ModalPopup
            dataTestIdWindow={TEST_IDS.modals.verificationFailed.window}
            dataTestIdCloseButton={TEST_IDS.modals.verificationFailed.closeButton}
            isOpen={isOpen}
            onClose={onClose}
            imageSrc={`${BASE_URL}assets/images/modals/modal-error.png`}
            header='Упс! Что-то пошло не так'
            description={description}
            footer={footer}
        />
    );
};
