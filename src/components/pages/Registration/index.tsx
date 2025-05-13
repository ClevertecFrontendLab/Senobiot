import { Button, Progress, VStack } from '@chakra-ui/react';
import React from 'react';

import { AuthPageWrapper, TextRegular } from '~/components/shared-components';
import { BUTTONS_TEXT, EXCLUDED_ROUTES, INSCRIPTIONS } from '~/constants';
import { useRegistrationForm } from '~/hooks/useRegistrationForm';
import { RegistrationInputsListProps } from '~/types';

import * as styles from './Registration.styles';
import RegistrationStep from './Step';

const inputList: RegistrationInputsListProps[] = [
    {
        field: 'firstName',
        label: 'Ваше имя',
        placeholder: 'Имя',
    },
    {
        field: 'lastName',
        label: 'Ваша фамилия',
        placeholder: 'Фамилия',
    },
    {
        field: 'email',
        label: 'Ваш e-mail',
        placeholder: 'email',
    },
    {
        field: 'username',
        label: 'Логин для входа на сайт:',
        placeholder: 'Логин',
    },
    {
        field: 'password',
        label: 'Пароль:',
        type: 'password',
        placeholder: 'Пароль',
    },
    {
        field: 'confirmPassword',
        label: 'Повторите пароль:',
        type: 'password',
        placeholder: 'Пароль',
    },
];

const RegistrationPage: React.FC = () => {
    const {
        formValues,
        errors,
        step,
        getProgress,
        handleChange,
        handleBlur,
        handleNext,
        handleSubmit,
    } = useRegistrationForm();

    return (
        <AuthPageWrapper pageRoute={EXCLUDED_ROUTES.registration}>
            <form onSubmit={handleSubmit} style={{ width: 'inherit' }}>
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
                        inputList={step === 1 ? inputList.slice(0, 3) : inputList.slice(-3)}
                    />
                    {step === 1 ? (
                        <Button sx={styles.button} onClick={handleNext}>
                            {BUTTONS_TEXT.registration.step1}
                        </Button>
                    ) : (
                        <Button sx={styles.button} type='submit'>
                            {BUTTONS_TEXT.registration.step2}
                        </Button>
                    )}
                </VStack>
            </form>
        </AuthPageWrapper>
    );
};

export default RegistrationPage;
