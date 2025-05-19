export type AuthPopupProps = {
    isOpen: boolean;
    onClose: () => void;
};

export type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    login: string;
    password: string;
    passwordConfirm: string;
};

export type LoginInputsListProps = {
    field: keyof FormLoginValues;
    label: string;
    placeholder: string;
    type?: string;
    helper?: string;
    dataTestId?: string;
    autocomplete?: string;
};

export enum Modals {
    AUTH_VERIFICATION_SEND = 'AUTH_VERIFICATION_SEND',
    AUTH_VERIFICATION_FAILED = 'AUTH_VERIFICATION_FAILED',
    AUTH_LOGIN_FAILED = 'AUTH_LOGIN_FAILED',
    AUTH_RESTORE_BY_EMAIL = 'AUTH_RESTORE_BY_EMAIL',
    AUTH_ENTER_PIN = 'AUTH_ENTER_PIN',
    AUTH_RESET_PASSWORD = 'AUTH_RESET_PASSWORD',
}

export type FormResetValues = Pick<FormValues, 'login' | 'password' | 'passwordConfirm'>;
export type FormLoginValues = Pick<FormValues, 'login' | 'password'>;
export type FormRestoreValues = Pick<FormValues, 'email'>;

export type FormErrors = {
    firstName?: string;
    lastName?: string;
    email?: string;
    login?: string;
    password?: string;
    passwordConfirm?: string;
};

export type ShowPasswords = {
    password?: boolean;
    passwordConfirm?: boolean;
};

export type FormInputProps = {
    field: keyof FormValues;
    label: string;
    value: string;
    error?: string;
    type?: string;
    placeholder?: string;
    helper?: string;
    showPassword?: ShowPasswords;
    dataTestId?: string;
    autocomplete?: string;
    setShowPassword?: (field: keyof FormValues, value: boolean) => void;
    onChange: (field: keyof FormValues, value: string) => void;
    onBlur: (field: keyof FormValues, value: string) => void;
};

export type ResetnInputsListProps = {
    field: keyof FormResetValues;
    label: string;
    placeholder: string;
    type?: string;
    helper?: string;
    dataTestId?: string;
    autocomplete?: string;
};

export type RegistrationStepProps = {
    formValues: FormValues;
    inputList: RegistrationInputsListProps[];
    errors: FormErrors;
    showPassword?: ShowPasswords;
    dataTestId?: string;
    setShowPassword: (field: keyof FormValues, value: boolean) => void;
    onChange: (field: keyof FormValues, value: string) => void;
    onBlur: (field: keyof FormValues, value: string) => void;
};

export type RegistrationInputsListProps = {
    field: keyof FormValues;
    label: string;
    placeholder: string;
    type?: string;
    helper?: string;
    dataTestId?: string;
    autocomplete?: string;
};
