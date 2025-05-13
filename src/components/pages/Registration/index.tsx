import { Button, Progress, VStack } from '@chakra-ui/react';
import React from 'react';

import { AuthPageWrapper, TextRegular } from '~/components/shared-components';
import { BUTTONS_TEXT, EXCLUDED_ROUTES, INSCRIPTIONS, TEST_IDS } from '~/constants';
import { useRegistrationForm } from '~/hooks/useRegistrationForm';
import { RegistrationInputsListProps } from '~/types';

import * as styles from './Registration.styles';
import RegistrationStep from './Step';

const inputList: RegistrationInputsListProps[] = [
    {
        field: 'firstName',
        label: 'Ваше имя',
        placeholder: 'Имя',
        dataTestId: TEST_IDS.formRegistrationInputName,
    },
    {
        field: 'lastName',
        label: 'Ваша фамилия',
        placeholder: 'Фамилия',
        dataTestId: TEST_IDS.formRegistrationInputLastName,
    },
    {
        field: 'email',
        label: 'Ваш e-mail',
        placeholder: 'email',
        dataTestId: TEST_IDS.formRegistrationInputEmail,
    },
    {
        field: 'username',
        label: 'Логин для входа на сайт:',
        helper: 'Логин не менее 5 символов, только латиница',
        placeholder: 'Логин',
        dataTestId: TEST_IDS.formRegistrationInputLogin,
    },
    {
        field: 'password',
        label: 'Пароль:',
        type: 'password',
        placeholder: 'Пароль',
        helper: 'Пароль не менее 8 символов, с заглавной буквой и цифрой',
        dataTestId: TEST_IDS.formRegistrationInputPassword,
    },
    {
        field: 'confirmPassword',
        label: 'Повторите пароль:',
        type: 'password',
        placeholder: 'Пароль',
        dataTestId: TEST_IDS.formRegistrationInputPasswordConfirm,
    },
];

const RegistrationPage: React.FC = () => {
    const {
        formValues,
        errors,
        step,
        showPassword,
        handlePasswordShow,
        getProgress,
        handleChange,
        handleBlur,
        handleNext,
        handleSubmit,
    } = useRegistrationForm();

    return (
        <AuthPageWrapper pageRoute={EXCLUDED_ROUTES.registration}>
            <form
                onSubmit={handleSubmit}
                style={{ width: 'inherit' }}
                data-test-id={TEST_IDS.formRegistration}
            >
                <VStack spacing={4} sx={styles.form}>
                    <VStack sx={styles.progressWrapper}>
                        <TextRegular
                            regTextAlign='left'
                            regText={
                                step === 1
                                    ? INSCRIPTIONS.registration.step1
                                    : INSCRIPTIONS.registration.step2
                            }
                        />
                        <Progress
                            data-test-id={TEST_IDS.formRegistrationProgress}
                            value={getProgress()}
                            size='sm'
                            sx={styles.progressBar}
                            hasStripe
                            aria-valuenow={getProgress()}
                            aria-valuemin={0}
                            aria-valuemax={100}
                        />
                    </VStack>
                    <RegistrationStep
                        formValues={formValues}
                        errors={errors}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        showPassword={showPassword}
                        setShowPassword={handlePasswordShow}
                        inputList={step === 1 ? inputList.slice(0, 3) : inputList.slice(-3)}
                    />
                    {step === 1 ? (
                        <Button
                            data-test-id={TEST_IDS.formRegistrationSubmitButton}
                            sx={styles.button}
                            onClick={handleNext}
                        >
                            {BUTTONS_TEXT.registration.step1}
                        </Button>
                    ) : (
                        <Button
                            sx={styles.button}
                            type='submit'
                            data-test-id={TEST_IDS.formRegistrationSubmitButton}
                        >
                            {BUTTONS_TEXT.registration.step2}
                        </Button>
                    )}
                </VStack>
            </form>
        </AuthPageWrapper>
    );
};

export default RegistrationPage;
