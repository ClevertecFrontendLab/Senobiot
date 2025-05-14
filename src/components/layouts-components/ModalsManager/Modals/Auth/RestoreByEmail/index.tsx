import { Text, VStack } from '@chakra-ui/react';

import { ButtonBlack, FormInput } from '~/components/shared-components';
import { useRestoreByEmail } from '~/hooks';
import { AuthPopupProps } from '~/types';

import { ModalPopup } from '../../Default';

export const RestoreByEmail: React.FC<AuthPopupProps> = ({ isOpen, onClose }) => {
    const { email, error, handleChange, handleBlur, handleSubmit } = useRestoreByEmail();

    const description = (
        <Text>
            Для восстановления входа введите ваш e-mail, куда можно отправить уникальный код
        </Text>
    );
    const footer = <Text>Не пришло письмо? Проверьте папку Спам.</Text>;

    const content = (
        <VStack gap={6} mt={4}>
            <FormInput
                field='email'
                label='Ваш e-mail'
                value={email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='email'
                error={error}
            />
            <ButtonBlack text='Получить код' onClick={handleSubmit} />
        </VStack>
    );

    return (
        <ModalPopup
            isOpen={isOpen}
            onClose={onClose}
            imageSrc='/modals/modal-login-error.png'
            description={description}
            content={content}
            footer={footer}
        />
    );
};
