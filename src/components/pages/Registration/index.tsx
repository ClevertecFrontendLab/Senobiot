import { Button, Progress, VStack } from '@chakra-ui/react';
import React from 'react';

import { AuthPageWrapper } from '~/components/shared-components';
import { EXCLUDED_ROUTES } from '~/constants';
import { useRegistrationForm } from '~/hooks/useRegistrationForm';
import { RegistrationInputsListProps } from '~/types';

import RegistrationStep from './Step';

const inputList: RegistrationInputsListProps[] = [
    {
        field: 'firstName',
        label: 'Ваше имя:',
    },
    {
        field: 'lastName',
        label: 'Ваша фамилия:',
    },
    {
        field: 'email',
        label: 'Ваш e-mail:',
    },
    {
        field: 'username',
        label: 'Логин:',
    },
    {
        field: 'password',
        label: 'Пароль:',
        type: 'password',
    },
    {
        field: 'confirmPassword',
        label: 'Подтверждение пароля:',
        type: 'password',
    },
];

const RegistrationPage: React.FC = () => {
    const {
        formValues,
        errors,
        currentStep,
        getProgress,
        handleChange,
        handleBlur,
        handleNext,
        handleSubmit,
    } = useRegistrationForm();

    return (
        <AuthPageWrapper pageRoute={EXCLUDED_ROUTES.registration}>
            <form onSubmit={handleSubmit}>
                <VStack spacing={4}>
                    <Progress
                        value={getProgress()}
                        size='sm'
                        colorScheme='green'
                        width='100%'
                        hasStripe
                        aria-valuenow={getProgress()}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    />
                    <RegistrationStep
                        formValues={formValues}
                        errors={errors}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        inputList={currentStep === 1 ? inputList.slice(0, 3) : inputList.slice(-3)}
                    />{' '}
                    {currentStep === 1 ? (
                        <Button colorScheme='blue' onClick={handleNext} width='full'>
                            Далее
                        </Button>
                    ) : (
                        <Button colorScheme='green' type='submit' width='full'>
                            Зарегистрироваться
                        </Button>
                    )}
                </VStack>
            </form>
        </AuthPageWrapper>
    );
};

export default RegistrationPage;
