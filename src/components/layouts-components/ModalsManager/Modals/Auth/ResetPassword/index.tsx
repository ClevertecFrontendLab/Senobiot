import { VStack } from '@chakra-ui/react';

import { ButtonBlack, FormInput } from '~/components/shared-components';
import { RESTORE_INPUT_LIST, TEST_IDS } from '~/constants';
import { useResetForm } from '~/hooks';
import { AuthPopupProps } from '~/types';

import { ModalPopup } from '../../Default';

export const ResetPassword: React.FC<AuthPopupProps> = ({ isOpen, onClose }) => {
    const {
        formValues,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        showPassword,
        handlePasswordShow,
    } = useResetForm();

    const content = (
        <form onSubmit={handleSubmit} style={{ width: 'inherit' }}>
            <VStack gap={6}>
                {RESTORE_INPUT_LIST.map((e) => (
                    <FormInput
                        key={e.label}
                        field={e.field}
                        label={e.label}
                        type={e.type ? e.type : 'text'}
                        value={formValues[e.field]}
                        error={errors[e.field]}
                        placeholder={e.placeholder}
                        helper={e.helper}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        showPassword={showPassword}
                        setShowPassword={handlePasswordShow}
                        dataTestId={e.dataTestId}
                        autocomplete={e.autocomplete}
                    />
                ))}
                <ButtonBlack
                    text='Зарегистрироваться'
                    type='submit'
                    color='red'
                    dataTestId={TEST_IDS.modals.resetPassword.submitButton}
                />
            </VStack>
        </form>
    );

    return (
        <ModalPopup
            dataTestIdWindow={TEST_IDS.modals.resetPassword.window}
            dataTestIdCloseButton={TEST_IDS.modals.resetPassword.closeButton}
            header={`Восстановление\nаккаунта`}
            isOpen={isOpen}
            onClose={onClose}
            content={content}
        />
    );
};
