import { useState } from 'react';

import { FormErrors, FormLoginValues, FormValues, ShowPasswords } from '~/types';

import { validatePassword, validateUsername } from '../utils/validators';

export const useLoginForm = () => {
    const [formValues, setFormValues] = useState<FormLoginValues>({
        username: '',
        password: '',
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [showPassword, setShowPassword] = useState<ShowPasswords>({});

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
        const usernameError = validateUsername(formValues.username);
        const passwordError = validatePassword(formValues.password ?? '');

        setErrors({
            username: usernameError,
            password: passwordError,
        });

        return !usernameError && !passwordError;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (validateAllFields()) {
            console.log('Logining', formValues);
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
