import { Button, Progress, VStack } from '@chakra-ui/react';
import React from 'react';

import { AuthPageWrapper, TextRegular } from '~/components/shared-components';
import {
    BUTTONS_TEXT,
    EXCLUDED_ROUTES,
    INSCRIPTIONS,
    REGISTRATION_INPUT_LIST,
    TEST_IDS,
} from '~/constants';
import { useRegistrationForm } from '~/hooks/useRegistrationForm';

import * as styles from '../Auth.styles';
import RegistrationStep from './Step';

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

    const inputList = [...REGISTRATION_INPUT_LIST];

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
                            sx={styles.buttonRegister}
                            onClick={handleNext}
                        >
                            {BUTTONS_TEXT.registration.step1}
                        </Button>
                    ) : (
                        <Button
                            sx={styles.buttonRegister}
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
