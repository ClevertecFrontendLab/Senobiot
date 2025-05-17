import { useState } from 'react';

import { useSignUpMutation } from '~/redux';
import { FormErrors, FormValues, ShowPasswords } from '~/types';
import {
    validateConfirmPassword,
    validateEmail,
    validateLogin,
    validateName,
    validatePassword,
} from '~/utils/validators';

import { useRecentCredentials } from './useRecentCredentials';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    login: '',
    password: '',
    passwordConfirm: '',
};

export const useRegistrationForm = () => {
    const [formValues, setFormValues] = useState<FormValues>(initialState);
    const [errors, setErrors] = useState<FormErrors>({});
    const [step, setStep] = useState(1);
    const [showPassword, setShowPassword] = useState<ShowPasswords>({});
    const [signUp] = useSignUpMutation();
    const { setRecentCredentials } = useRecentCredentials();
    const validators: Record<keyof FormValues, (value: string, values?: FormValues) => string> = {
        firstName: (value) => validateName(value),
        lastName: (value) => validateName(value, false),
        email: (value) => validateEmail(value),
        login: (value) => validateLogin(value),
        password: (value) => validatePassword(value),
        passwordConfirm: (value, values) =>
            values ? validateConfirmPassword(value, values.password) : '',
    };

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

    const getProgress = (): number => {
        const keys = Object.keys(formValues) as Array<keyof FormValues>;
        let invalidCount = 0;

        for (const key of keys) {
            if (!validators[key](formValues[key], formValues)) {
                invalidCount++;
            }
        }
        return (invalidCount / keys.length) * 100;
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
            formValues.passwordConfirm,
            formValues.password,
        );

        setErrors({
            firstName: firstNameError,
            lastName: lastNameError,
            email: emailError,
            login: loginError,
            password: passwordError,
            passwordConfirm: confirmPasswordError,
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
            const { passwordConfirm, ...requestData } = formValues;
            signUp(requestData);
            setRecentCredentials({ email: requestData.email });
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
