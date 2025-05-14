import { Text } from '@chakra-ui/react';

import { ButtonBlack } from '~/components/shared-components';

import { ModalPopup } from '../../Default';

export type AuthPopupProps = {
    isOpen: boolean;
    onClose: () => void;
};

export const LoginFailedModalPopup: React.FC<AuthPopupProps> = ({ isOpen, onClose }) => (
    <ModalPopup
        isOpen={isOpen}
        onClose={onClose}
        imageSrc='/modals/modal-login-error.png'
        header='Вход не выполнен'
        description={<Text>Что-то пошло не так. Попробуйте еще раз</Text>}
        content={<ButtonBlack text='Повторить' onClick={onClose} />}
    />
);
