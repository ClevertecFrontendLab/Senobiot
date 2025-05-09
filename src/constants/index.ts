export const PAGE_TITLES = {
    home: 'Приятного аппетита!',
    slider: 'Новые рецепты',
    juiciest: 'Самое сочное',
    notFound: 'Упс! Такой страницы нет',
} as const;

export const EXCLUDED_ROUTES = {
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

export const INSCRIPTIONS = {
    alert: {
        title: { default: 'Ошибка сервера' },
        body: { default: 'Попробуйте поискать снова попозже' },
    },
    footer: {
        title: 'Версия программы 03.25',
        copyright: 'Все права защищены, ученический файл, \n©Клевер Технолоджи, 2025',
    },
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
