import { useState } from 'react';

import { useResetMutation } from '~/redux';
import { FormErrors, FormResetValues, FormValues, ShowPasswords } from '~/types';
import { validateConfirmPassword, validateLogin, validatePassword } from '~/utils/validators';

export const useResetForm = (email: string) => {
    const initialValues = { login: '', password: '', passwordConfirm: '', email };

    const [formValues, setFormValues] = useState<FormResetValues>(initialValues);
    const [errors, setErrors] = useState<FormErrors>({});
    const [showPassword, setShowPassword] = useState<ShowPasswords>({});
    const [reset] = useResetMutation();

    const handleChange = (field: keyof FormValues, value: string) => {
        setFormValues((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleBlur = (field: keyof FormValues, value: string) => {
        const trimmedValue =
            field === 'password' || field === 'passwordConfirm' ? value : value.trim();

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
        const passwordError = validatePassword(formValues.password);
        const passwordConfirmError = validateConfirmPassword(
            formValues.passwordConfirm,
            formValues.password,
        );

        setErrors({
            login: loginError,
            password: passwordError,
            passwordConfirm: passwordConfirmError,
        });

        return !loginError && !passwordError && !passwordConfirmError;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (validateAllFields()) {
            reset(formValues);
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
