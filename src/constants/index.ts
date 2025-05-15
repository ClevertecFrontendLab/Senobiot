import { LoginInputsListProps, RegistrationInputsListProps, ResetnInputsListProps } from '~/types';

export const PAGE_TITLES = {
    home: 'Приятного аппетита!',
    slider: 'Новые рецепты',
    juiciest: 'Самое сочное',
    notFound: 'Упс! Такой страницы нет',
} as const;

export const EXCLUDED_ROUTES = {
    registration: 'registration',
    login: 'login',
    juiciest: 'the-juiciest',
    notFound: 'not-found',
} as const;

export const TEST_IDS = {
    alert: 'error-notification',
    alertCloseButton: 'close-alert-button',
    allergens: 'allergens-menu',
    allergensSwitcher: 'allergens-switcher',
    allergensInputToggler: 'allergens-menu-button',
    buttonViewMore: 'load-more-button',
    breadcrumbs: 'breadcrumbs',
    carouselCard: 'carousel-card',
    carouselButtonLeft: 'carousel-back',
    carouselButtonRight: 'carousel-forward',
    filters: 'filter-drawer',
    filtersOpenButton: 'filter-button',
    filtersCloseButton: 'close-filter-drawer',
    filtersClearButton: 'clear-filter-button',
    filtersFindButton: 'find-recipe-button',
    filtersCategoryInput: 'filter-menu-button-категория',
    filtersTag: 'filter-tag',
    modals: {
        signInError: {
            window: 'sign-in-error-modal',
            closeButton: 'close-button',
            repeatButton: 'repeat-button',
        },
        signUpSuccess: {
            window: 'sign-up-success-modal',
            closeButton: 'close-button',
        },
        verificationFailed: {
            window: 'email-verification-failed-modal',
            closeButton: 'close-button',
        },
        restoreByEmail: {
            window: 'send-email-modal',
            email: 'email-input',
            submitButton: 'submit-button',
            closeButton: 'close-button',
        },
        otp: {
            window: 'verification-code-modal',
            closeButton: 'close-button',
            digitInput: 'verification-code-input-',
        },
        resetPassword: {
            window: 'reset-credentials-modal',
            closeButton: 'close-button',
            login: 'login-input',
            password: 'password-input',
            passwordConfirm: 'confirm-password-input',
            submitButton: 'submit-button',
        },
    },
    pages: {
        signIn: {
            form: 'sign-in-form',
            login: 'login-input',
            password: 'password-input',
            passwordShowButton: 'password-visibility-button',
            submitButton: 'submit-button',
            forgotLink: 'forgot-password',
        },
        signUp: {
            firstStep: {
                progress: 'sign-up-progress',
                form: 'sign-up-form',
                firstName: 'first-name-input',
                lastName: 'last-name-input',
                email: 'email-input',
                nextButton: 'submit-button',
            },
            secondStep: {
                login: 'login-input',
                password: 'password-input',
                passwordConfirm: 'confirm-password-input',
                submitButton: 'submit-button',
            },
        },
    },
    footer: 'footer',
    hamburgerIcon: 'hamburger-icon',
    hamburgerCloseButton: 'close-icon',
    header: 'header',
    homeLink: 'error-page-go-home',
    ingridientQuantity: 'ingredient-quantity',
    juciestLink: 'juiciest-link',
    juciestLinkMobile: 'juiciest-link-mobile',
    spinner: 'app-loader',
    minispinner: 'loader-search-block',
    navigationMenu: 'nav',
    portionsIncrement: 'increment-stepper',
    poritonsDecrement: 'decrement-stepper',
    searchInput: 'search-input',
    searchButton: 'search-button',
} as const;

export const predefinedAllergens: string[] = [
    'Молочные продукты',
    'Яйцо',
    'Рыба',
    'Моллюски',
    'Орехи',
    'Томат (помидор)',
    'Цитрусовые',
    'Клубника (ягоды)',
    'Шоколад',
] as const;

export const API_QUERY_PARAMS = {
    defaultPage: 1,
    defaultRequestAmount: 8,
    juiciestHomePageBlockAmount: 4,
    randomSectionAmount: 5,
    sliderDefaultAmount: 10,
} as const;

export const ALERTS: {
    default: { title: string; body: string };
    login: Record<number, { title: string; body: string }>;
    registration: Record<number, { title: string; body: string }>;
    restore: Record<number, { title: string; body: string }>;
    verify: Record<number, { title: string; body: string }>;
    reset: Record<number, { title: string; body: string }>;
} = {
    default: { title: 'Ошибка сервера', body: 'Попробуйте поискать снова попозже' },
    login: {
        401: { title: 'Неверный логин или пароль', body: 'Попробуйте снова' },
        403: { title: 'E-mail не верифицирован', body: 'Проверьте почту и перейдите по ссылке' },
    },
    registration: {
        500: { title: 'Ошибка сервера', body: 'Попробуйте немного позже' },
    },
    restore: {
        403: {
            title: 'Такого e-mail нет',
            body: 'Попробуйте другой e-mail или проверьте правильность его написания',
        },
        500: { title: 'Ошибка сервера', body: 'Попробуйте немного позже' },
    },
    verify: {
        500: { title: 'Ошибка сервера', body: 'Попробуйте немного позже' },
    },
    reset: {
        500: { title: 'Ошибка сервера', body: 'Попробуйте немного позже' },
    },
};

export const POPUPS = {
    resetPasswordSuccess: 'Восстановление данных успешно',
};

export const INSCRIPTIONS = {
    footer: {
        title: 'Версия программы 03.25',
        copyright: 'Все права защищены, ученический файл, \n©Клевер Технолоджи, 2025',
    },
    registration: {
        step1: 'Шаг 1. Личная информация',
        step2: 'Шаг 2. Логин и пароль',
    },
    loginRemember: 'Забыли логин или пароль?',
} as const;

export const PLACEHOLDERS = {
    allergens: 'Выберите из списка...',
    filters: {
        category: 'Категория',
        author: 'Поиск по автору',
    },
    search: 'Название или ингредиент...',
} as const;

export const TITLES = {
    filters: {
        meat: 'Тип мяса',
        garnish: 'Тип гарнира',
        exludeAllergens: 'Исключить аллергены',
    },
} as const;

export const BUTTONS_TEXT = {
    filters: {
        clear: 'Очистить фильтр',
        apply: 'Найти рецепт',
    },
    footer: 'Выйти',
    viewMore: {
        loaded: 'Загрузить еще',
        loading: 'Загрузка',
    },
    registration: {
        step1: 'Дальше',
        step2: 'Зарегистрироваться',
    },
    login: 'Войти',
} as const;

export const BOTTOM_MENU_CONIG = [
    {
        name: 'Главная',
        iconUrl: '/icons/bottom-menu/home.svg',
        route: '',
        isActive: true,
    },
    {
        name: 'Поиск',
        iconUrl: '/icons/bottom-menu/lense.svg',
        route: '',
        isActive: false,
    },
    {
        name: 'Записать',
        iconUrl: '/icons/bottom-menu/pen.svg',
        route: '',
        isActive: false,
    },
    {
        name: 'Мой профиль',
        iconUrl: '/avatars/avatar-4.png',
        route: '',
        isActive: false,
    },
] as const;

export const LOGIN_INPUT_LIST: LoginInputsListProps[] = [
    {
        field: 'login',
        label: 'Логин для входа на сайт:',
        placeholder: 'Логин',
        dataTestId: TEST_IDS.pages.signIn.login,
        autocomplete: 'username',
    },
    {
        field: 'password',
        label: 'Пароль:',
        type: 'password',
        placeholder: 'Пароль',
        dataTestId: TEST_IDS.pages.signIn.password,
        autocomplete: 'current-password',
    },
];

export const RESTORE_INPUT_LIST: ResetnInputsListProps[] = [
    {
        field: 'login',
        label: 'Логин для входа на сайт:',
        placeholder: 'Логин',
        helper: 'Логин не менее 5 символов, только латиница',
        autocomplete: 'username',
        dataTestId: TEST_IDS.modals.resetPassword.login,
    },
    {
        field: 'password',
        label: 'Пароль:',
        type: 'password',
        placeholder: 'Пароль',
        helper: 'Пароль не менее 8 символов, с заглавной буквой и цифрой',
        autocomplete: 'current-password',
        dataTestId: TEST_IDS.modals.resetPassword.password,
    },
    {
        field: 'passwordConfirm',
        label: 'Повторите пароль:',
        type: 'password',
        placeholder: 'Пароль',
        autocomplete: 'new-password',
        dataTestId: TEST_IDS.modals.resetPassword.passwordConfirm,
    },
];

export const REGISTRATION_INPUT_LIST: RegistrationInputsListProps[] = [
    {
        field: 'firstName',
        label: 'Ваше имя',
        placeholder: 'Имя',
        dataTestId: TEST_IDS.pages.signUp.firstStep.firstName,
        autocomplete: 'given-name',
    },
    {
        field: 'lastName',
        label: 'Ваша фамилия',
        placeholder: 'Фамилия',
        dataTestId: TEST_IDS.pages.signUp.firstStep.lastName,
        autocomplete: 'family-name',
    },
    {
        field: 'email',
        label: 'Ваш e-mail',
        placeholder: 'email',
        dataTestId: TEST_IDS.pages.signUp.firstStep.email,
        autocomplete: 'email',
    },
    {
        field: 'login',
        label: 'Логин для входа на сайт:',
        // helper: 'Логин не менее 5 символов, только латиница',
        placeholder: 'Логин',
        dataTestId: TEST_IDS.pages.signUp.secondStep.login,
        autocomplete: 'username',
    },
    {
        field: 'password',
        label: 'Пароль:',
        type: 'password',
        placeholder: 'Пароль',
        // helper: 'Пароль не менее 8 символов, с заглавной буквой и цифрой',
        dataTestId: TEST_IDS.pages.signUp.secondStep.password,
        autocomplete: 'new-password',
    },
    {
        field: 'passwordConfirm',
        label: 'Повторите пароль:',
        type: 'password',
        placeholder: 'Пароль',
        dataTestId: TEST_IDS.pages.signUp.secondStep.passwordConfirm,
        autocomplete: 'new-password',
    },
];
