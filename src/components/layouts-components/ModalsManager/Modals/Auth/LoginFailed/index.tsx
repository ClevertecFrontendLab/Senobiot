import { Text } from '@chakra-ui/react';

import { ButtonBlack } from '~/components/shared-components';
import { AuthPopupProps } from '~/types';

import { ModalPopup } from '../../Default';

export const LoginFailed: React.FC<AuthPopupProps> = ({ isOpen, onClose }) => (
    <ModalPopup
        isOpen={isOpen}
        onClose={onClose}
        imageSrc='/modals/modal-login-error.png'
        header='Вход не выполнен'
        description={<Text>Что-то пошло не так. Попробуйте еще раз</Text>}
        content={<ButtonBlack text='Повторить' onClick={onClose} />}
    />
);
