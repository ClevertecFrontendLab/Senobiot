import { Text, VStack } from '@chakra-ui/react';

import { ButtonBlack, FormInput } from '~/components/shared-components';
import { BASE_URL, TEST_IDS } from '~/constants';
import { useRestoreForm } from '~/hooks';
import { AuthPopupProps } from '~/types';

import { ModalPopup } from '../../Default';

export const RestoreByEmail: React.FC<AuthPopupProps> = ({ isOpen, onClose }) => {
    const { email, error, handleChange, handleBlur, handleSubmit } = useRestoreForm();

    const description = (
        <Text>
            Для восстановления входа введите ваш e-mail, куда можно отправить уникальный код
        </Text>
    );
    const footer = <Text>Не пришло письмо? Проверьте папку Спам.</Text>;

    const content = (
        <form onSubmit={handleSubmit} style={{ width: 'inherit' }}>
            <VStack gap={6} mt={4}>
                <FormInput
                    field='email'
                    label='Ваш e-mail'
                    value={email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder='email'
                    error={error}
                    dataTestId={TEST_IDS.modals.restoreByEmail.email}
                />
                <ButtonBlack
                    text='Получить код'
                    type='submit'
                    dataTestId={TEST_IDS.modals.restoreByEmail.submitButton}
                />
            </VStack>
        </form>
    );

    return (
        <ModalPopup
            dataTestIdWindow={TEST_IDS.modals.restoreByEmail.window}
            dataTestIdCloseButton={TEST_IDS.modals.restoreByEmail.closeButton}
            isOpen={isOpen}
            onClose={onClose}
            imageSrc={`${BASE_URL}assets/images/modals/modal-login-error.png`}
            description={description}
            content={content}
            footer={footer}
        />
    );
};
