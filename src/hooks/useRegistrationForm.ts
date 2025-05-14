import { useState } from 'react';

import { useSignUpMutation } from '~/redux';
import { FormErrors, FormValues, ShowPasswords } from '~/types';

import {
    validateConfirmPassword,
    validateEmail,
    validateLogin,
    validateName,
    validatePassword,
} from '../utils/validators';

export const useRegistrationForm = () => {
    const [formValues, setFormValues] = useState<FormValues>({
        firstName: '',
        lastName: '',
        email: '',
        login: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [step, setStep] = useState<number>(1);
    const [showPassword, setShowPassword] = useState<ShowPasswords>({});
    const [signUp] = useSignUpMutation();

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
        if (!validateName(formValues.lastName, false)) validCount++;
        if (!validateEmail(formValues.email)) validCount++;
        if (!validateLogin(formValues.login)) validCount++;
        if (!validatePassword(formValues.password)) validCount++;
        if (!validateConfirmPassword(formValues.confirmPassword, formValues.password)) validCount++;

        return (validCount / 6) * 100;
    };

    const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const trimmedFirstName = formValues.firstName.trim();
        const trimmedLastName = formValues.lastName.trim();
        const trimmedEmail = formValues.email.trim();

        setFormValues((prev) => ({
            ...prev,
            firstName: trimmedFirstName,
            lastName: trimmedLastName,
            email: trimmedEmail,
        }));

        const firstNameError = validateName(trimmedFirstName);
        const lastNameError = validateName(trimmedLastName, false);
        const emailError = validateEmail(trimmedEmail);

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
        const lastNameError = validateName(formValues.lastName, false);
        const emailError = validateEmail(formValues.email);
        const loginError = validateLogin(formValues.login);
        const passwordError = validatePassword(formValues.password);
        const confirmPasswordError = validateConfirmPassword(
            formValues.confirmPassword,
            formValues.password,
        );

        setErrors({
            firstName: firstNameError,
            lastName: lastNameError,
            email: emailError,
            login: loginError,
            password: passwordError,
            confirmPassword: confirmPasswordError,
        });

        return (
            !firstNameError &&
            !lastNameError &&
            !emailError &&
            !loginError &&
            !passwordError &&
            !confirmPasswordError
        );
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (validateAllFields()) {
            const { confirmPassword, ...requestData } = formValues;
            signUp(requestData);
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
