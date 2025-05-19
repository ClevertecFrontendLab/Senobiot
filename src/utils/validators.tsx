export const validateName = (value: string, isFirstName: boolean = true): string => {
    if (!value) return isFirstName ? 'Введите имя' : 'Введите фамилию';
    if (!/^[А-Я]/.test(value)) return 'Должно начинаться с кириллицы А-Я';
    if (!/^[А-Яа-я-]+$/.test(value)) return 'Только кириллица А-Я, и "-"';
    if (value.length > 50) return 'Максимальная длина 50 символов';
    return '';
};

export const validateEmail = (value: string): string => {
    if (!value) return 'Введите e-mail';
    if (value.length > 50) return 'Максимальная длина 50 символов';
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(value)) return 'Введите корректный e-mail';

    return '';
};

export const validateLogin = (value: string): string => {
    const regex = /^[A-Za-z0-9!@#$&_+\-.]+$/;

    if (!value || value.trim().length === 0) return 'Введите логин';
    if (value.length < 5) return 'Не соответствует формату';
    if (value.length > 50) return 'Максимальная длина 50 символов';
    if (!regex.test(value)) return 'Не соответствует формату';
    return '';
};

export const validatePassword = (value: string): string => {
    if (!value) return 'Введите пароль';

    const regex = /^[A-Za-z0-9!@#$&_+\-.]+$/;

    if (value.length < 8) return 'Не соответствует формату';
    if (value.length > 50) return 'Максимальная длина 50 символов';
    if (!regex.test(value)) return 'Не соответствует формату';

    if (!/[A-Z]/.test(value)) return 'Не соответствует формату';

    if (!/\d/.test(value)) return 'Не соответствует формату';

    return '';
};

export const validateConfirmPassword = (value: string, password: string): string => {
    if (!value) return 'Повторите пароль';
    if (value !== password) return 'Пароли должны совпадать';
    return '';
};
