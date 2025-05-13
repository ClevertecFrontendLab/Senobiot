import { useState } from 'react';

import { FormErrors, FormValues, ShowPasswords } from '~/types';

import {
    validateConfirmPassword,
    validateEmail,
    validateName,
    validatePassword,
    validateUsername,
} from '../utils/validators';

export const useRegistrationForm = () => {
    const [formValues, setFormValues] = useState<FormValues>({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [step, setStep] = useState<number>(1);
    const [showPassword, setShowPassword] = useState<ShowPasswords>({});

    const handleChange = (field: keyof FormValues, value: string) => {
        setFormValues((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleBlur = (field: keyof FormValues, value: string) => {
        const trimmedValue =
            field === 'password' || field === 'confirmPassword' ? value : value.trim();

        handleChange(field, trimmedValue);
        setErrors((prev) => ({
            ...prev,
            [field]: errors[field] && !trimmedValue ? errors[field] : '',
        }));
    };

    const handlePasswordShow = (field: keyof FormValues, value: boolean) => {
        setShowPassword((prev) => ({ ...prev, [field]: value }));
    };

    const getProgress = (): number => {
        let validCount = 0;

        if (!validateName(formValues.firstName)) validCount++;
        if (!validateName(formValues.lastName)) validCount++;
        if (!validateEmail(formValues.email)) validCount++;
        if (!validateUsername(formValues.username)) validCount++;
        if (!validatePassword(formValues.password)) validCount++;
        if (!validateConfirmPassword(formValues.confirmPassword, formValues.password)) validCount++;

        return (validCount / 6) * 100;
    };

    const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const firstNameError = validateName(formValues.firstName);
        const lastNameError = validateName(formValues.lastName);
        const emailError = validateEmail(formValues.email);

        setErrors((prev) => ({
            ...prev,
            firstName: firstNameError,
            lastName: lastNameError,
            email: emailError,
        }));

        if (!firstNameError && !lastNameError && !emailError) {
            setStep(2);
        }
    };

    const validateAllFields = (): boolean => {
        const firstNameError = validateName(formValues.firstName);
        const lastNameError = validateName(formValues.lastName);
        const emailError = validateEmail(formValues.email);
        const usernameError = validateUsername(formValues.username);
        const passwordError = validatePassword(formValues.password);
        const confirmPasswordError = validateConfirmPassword(
            formValues.confirmPassword,
            formValues.password,
        );
        console.log('validateAllFields');
        setErrors({
            firstName: firstNameError,
            lastName: lastNameError,
            email: emailError,
            username: usernameError,
            password: passwordError,
            confirmPassword: confirmPasswordError,
        });

        return (
            !firstNameError &&
            !lastNameError &&
            !emailError &&
            !usernameError &&
            !passwordError &&
            !confirmPasswordError
        );
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (validateAllFields()) {
            console.log('Submitting registration', formValues);
        }
    };

    return {
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
    };
};
