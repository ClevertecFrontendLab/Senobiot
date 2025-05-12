export const validateName = (value: string, isFirstName: boolean = true): string => {
    if (!value) return isFirstName ? 'Введите имя' : 'Введите фамилию';
    if (!/^[А-Я]/.test(value)) return 'Должно начинаться с кириллицы А-Я';
    if (!/^[А-Яа-я-]+$/.test(value)) return 'Только кириллица А-Я, и "-"';
    if (value.length > 50) return 'Максимальная длина 50 символов';
    return '';
};

export const validateEmail = (value: string): string => {
    if (!value) return 'Введите e-mail';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return 'Введите корректный e-mail';
    if (value.length > 50) return 'Максимальная длина 50 символов';
    return '';
};

export const validateUsername = (value: string): string => {
    if (!value || value.trim().length === 0) return 'Введите логин';
    if (value.length > 50) return 'Максимальная длина 50 символов';
    return '';
};

export const validatePassword = (value: string): string => {
    if (!value) return 'Введите пароль';
    if (value.length < 6) return 'Пароль должен содержать минимум 6 символов';
    return '';
};

export const validateConfirmPassword = (value: string, password: string): string => {
    if (!value) return 'Введите подтверждение пароля';
    if (value !== password) return 'Пароли не совпадают';
    return '';
};
