import { useEffect, useState } from 'react';

import { useRestoreMutation } from '~/redux';
import { FormErrors, FormValues, RestoreValues } from '~/types';

import { validateEmail } from '../utils/validators';

export const useRestoreByEmail = () => {
    const [value, setEmail] = useState<RestoreValues>({ email: '' });
    const [error, setError] = useState<FormErrors>({});

    const handleChange = (field: keyof FormValues, value: string) =>
        setEmail((prev) => ({
            ...prev,
            [field]: value,
        }));
    const [restore, { isError }] = useRestoreMutation();

    const handleBlur = (field: keyof FormValues, value: string) => {
        const trimmedEmail = value.trim();

        handleChange(field, trimmedEmail);
        setError(() => ({ [field]: error[field] && !trimmedEmail ? error[field] : '' }));
    };

    const validate = (): boolean => {
        const emailError = validateEmail(value.email);
        setError({ email: emailError });

        return !emailError;
    };

    const handleSubmit = () => {
        if (validate()) {
            restore(value);
        }
    };

    useEffect(() => {
        if (isError) {
            setError({ email: ' ' });
            setEmail({ email: '' });
        }
    }, [isError]);

    return {
        email: value.email,
        error: error.email,
        handleChange,
        handleBlur,
        handleSubmit,
    };
};
