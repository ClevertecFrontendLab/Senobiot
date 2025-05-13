import { useState } from 'react';

import { useSignInMutation } from '~/redux';
import { FormErrors, FormLoginValues, FormValues, ShowPasswords } from '~/types';

import { validateLogin, validatePassword } from '../utils/validators';

export const useLoginForm = () => {
    const [formValues, setFormValues] = useState<FormLoginValues>({
        login: '',
        password: '',
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [showPassword, setShowPassword] = useState<ShowPasswords>({});
    const [signIn] = useSignInMutation();

    const handleChange = (field: keyof FormValues, value: string) => {
        setFormValues((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleBlur = (field: keyof FormValues, value: string) => {
        const trimmedValue = field === 'password' ? value : value.trim();

        handleChange(field, trimmedValue);
        setErrors((prev) => ({
            ...prev,
            [field]: errors[field] && !trimmedValue ? errors[field] : '',
        }));
    };

    const handlePasswordShow = (field: keyof FormValues, value: boolean) => {
        setShowPassword((prev) => ({ ...prev, [field]: value }));
    };

    const validateAllFields = (): boolean => {
        const loginError = validateLogin(formValues.login);
        const passwordError = validatePassword(formValues.password ?? '');

        setErrors({
            login: loginError,
            password: passwordError,
        });

        return !loginError && !passwordError;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (validateAllFields()) {
            signIn(formValues);
        }
    };

    return {
        formValues,
        errors,
        showPassword,
        handlePasswordShow,
        handleChange,
        handleBlur,
        handleSubmit,
    };
};
