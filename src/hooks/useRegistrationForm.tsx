import { useState } from 'react';

import { FormErrors, FormValues } from '~/types';

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
    const [currentStep, setCurrentStep] = useState<number>(1);

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

        let errorMessage = '';

        switch (field) {
            case 'firstName':
                errorMessage = validateName(trimmedValue);
                break;
            case 'lastName':
                errorMessage = validateName(trimmedValue, false);
                break;
            case 'email':
                errorMessage = validateEmail(trimmedValue);
                break;
            case 'username':
                errorMessage = validateUsername(trimmedValue);
                break;
            case 'password':
                errorMessage = validatePassword(trimmedValue);
                break;
            case 'confirmPassword':
                errorMessage = validateConfirmPassword(trimmedValue, formValues.password);
                break;
            default:
                break;
        }
        setErrors((prev) => ({ ...prev, [field]: errorMessage }));
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

    const handleNext = () => {
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
            setCurrentStep(2);
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
        currentStep,
        getProgress,
        handleChange,
        handleBlur,
        handleNext,
        handleSubmit,
    };
};
