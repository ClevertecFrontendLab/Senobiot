import { Link, Text } from '@chakra-ui/react';

import { ModalPopup } from '../../Default';

export type AuthPopupProps = {
    isOpen: boolean;
    onClose: () => void;
};

export const VerificationFailedModalPopup: React.FC<AuthPopupProps> = ({ isOpen, onClose }) => {
    const description = (
        <Text>
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
            isOpen={isOpen}
            onClose={onClose}
            imageSrc='/modals/modal-error.png'
            header='Упс! Что-то пошло не так'
            description={description}
            footer={footer}
        />
    );
};
