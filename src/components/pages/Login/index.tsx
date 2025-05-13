import { Button, Link, VStack } from '@chakra-ui/react';
import React from 'react';

import { AuthPageWrapper, FormInput } from '~/components/shared-components';
import { BUTTONS_TEXT, EXCLUDED_ROUTES, INSCRIPTIONS, TEST_IDS } from '~/constants';
import { useLoginForm } from '~/hooks/useLoginForm';
import { LoginInputsListProps } from '~/types';

import * as styles from '../Auth.styles';

const inputList: LoginInputsListProps[] = [
    {
        field: 'username',
        label: 'Логин для входа на сайт:',
        placeholder: 'Логин',
        dataTestId: TEST_IDS.form.login.login,
    },
    {
        field: 'password',
        label: 'Пароль:',
        type: 'password',
        placeholder: 'Пароль',
        dataTestId: TEST_IDS.form.login.password,
    },
];

const RegistrationPage: React.FC = () => {
    const {
        formValues,
        errors,
        showPassword,
        handlePasswordShow,
        handleChange,
        handleBlur,
        handleSubmit,
    } = useLoginForm();

    return (
        <AuthPageWrapper pageRoute={EXCLUDED_ROUTES.login}>
            <form
                onSubmit={handleSubmit}
                style={{ width: 'inherit' }}
                data-test-id={TEST_IDS.form.login.form}
            >
                <VStack gap={6} sx={styles.form}>
                    {inputList.map((e) => (
                        <FormInput
                            key={e.label}
                            field={e.field}
                            label={e.label}
                            type={e.type ? e.type : 'initial'}
                            value={formValues[e.field]}
                            error={errors[e.field]}
                            placeholder={e.placeholder}
                            helper={e.helper}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            showPassword={showPassword}
                            setShowPassword={handlePasswordShow}
                            dataTestId={e.dataTestId}
                        />
                    ))}
                    <Link sx={styles.restore} data-test-id={TEST_IDS.form.login.restoreLink}>
                        {INSCRIPTIONS.loginRemember}
                    </Link>
                    <Button
                        data-test-id={TEST_IDS.form.login.buttonSubmit}
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
