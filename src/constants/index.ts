export const PAGE_TITLES = {
    home: 'Приятного аппетита!',
    slider: 'Новые рецепты',
    juiciest: 'Самое сочное',
    notFound: 'Упс! Такой страницы нет',
} as const;

export const EXCLUDED_ROUTES = {
    juiciest: 'the-juiciest',
} as const;

export const TEST_IDS = {
    buttonViewMore: 'load-more-button',
    allergens: 'allergens-menu',
    spinner: 'app-loader',
    minispinner: 'loader-search-block',
    header: 'header',
    footer: 'footer',
    navigationMenu: 'nav',
    hamburgerIcon: 'hamburger-icon',
    hamburgerCloseButton: 'close-icon',
    breadcrumbs: 'breadcrumbs',
    filters: 'filter-drawer',
    filtersOpenButton: 'filter-button',
    filtersCloseButton: 'close-filter-drawer',
    filtersClearButton: 'clear-filter-button',
    filtersFindButton: 'find-recipe-button',
    filtersTag: 'filter-tag',
    searchInput: 'search-input',
    searchButton: 'search-button',
    alert: 'error-notification',
    alertCloseButton: 'close-alert-button',
    portionsIncrement: 'increment-stepper',
    poritonsDecrement: 'decrement-stepper',
    carouselCard: 'carousel-card',
    carouselButtonLeft: 'carousel-back',
    carouselButtonRight: 'carousel-forward',
    ingridientQuantity: 'ingredient-quantity',
    homeLink: 'error-page-go-home',
    juciestLink: 'juiciest-link',
    juciestLinkMobile: 'juiciest-link-mobile',
} as const;
