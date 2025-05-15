import { Button, Link, VStack } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';

import { AuthPageWrapper, FormInput } from '~/components/shared-components';
import {
    BUTTONS_TEXT,
    EXCLUDED_ROUTES,
    INSCRIPTIONS,
    LOGIN_INPUT_LIST,
    TEST_IDS,
} from '~/constants';
import { useLoginForm } from '~/hooks';
import { setAppModal } from '~/redux/store/app-slice';
import { Modals } from '~/types';

import * as styles from '../Auth.styles';

const RegistrationPage: React.FC = () => {
    const dispatch = useDispatch();
    const {
        formValues,
        errors,
        showPassword,
        handlePasswordShow,
        handleChange,
        handleBlur,
        handleSubmit,
    } = useLoginForm();

    const handleRestore = () => dispatch(setAppModal(Modals.AUTH_RESTORE_BY_EMAIL));

    return (
        <AuthPageWrapper pageRoute={EXCLUDED_ROUTES.login}>
            <form
                onSubmit={handleSubmit}
                style={{ width: 'inherit' }}
                data-test-id={TEST_IDS.pages.signIn.form}
            >
                <VStack gap={6} sx={styles.form}>
                    {LOGIN_INPUT_LIST.map((e) => (
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
                    <Link
                        onClick={handleRestore}
                        sx={styles.restore}
                        data-test-id={TEST_IDS.pages.signIn.forgotLink}
                    >
                        {INSCRIPTIONS.loginRemember}
                    </Link>
                    <Button
                        data-test-id={TEST_IDS.pages.signIn.submitButton}
                        sx={styles.buttonLogin}
                        type='submit'
                    >
                        {BUTTONS_TEXT.login}
                    </Button>
                </VStack>
            </form>
        </AuthPageWrapper>
    );
};

export default RegistrationPage;
