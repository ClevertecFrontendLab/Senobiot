interface DishCategory {
    name: string;
    route: string;
    icon: string;
    subcategories?: { name: string; route: string }[]; // Optional subcategories
}

export const dishesCategories: DishCategory[] = [
    {
        name: 'Салаты',
        route: '/salates',
        icon: '/icons/salates.svg',
    },
    {
        name: 'Закуски',
        route: '/zakuski',
        icon: '/icons/eggplant.svg',
    },
    {
        name: 'Первые блюда',
        route: '/pervye-blyuda',
        icon: '/icons/frying-pan.svg',
    },
    {
        name: 'Вторые блюда',
        route: '/vtorye-blyuda',
        icon: '/icons/leaf.svg',
    },
    {
        name: 'Десерты, выпечка',
        route: '/deserty-vypechka',
        icon: '/icons/mortar.svg',
    },
    {
        name: 'Блюда на гриле',
        route: '/blyuda-na-grile',
        icon: '/icons/pasta.svg',
    },
    {
        name: 'Веганская кухня',
        route: '/veganskaya-kuhnya',
        icon: '/icons/pot-medical.svg',
        subcategories: [
            { name: 'Закуски', route: '/veganskaya-kuhnya/zakuski' },
            { name: 'Первые блюда', route: '/veganskaya-kuhnya/pervye-blyuda' },
            { name: 'Вторые блюда', route: '/veganskaya-kuhnya/vtorye-blyuda' },
            { name: 'Гарниры', route: '/veganskaya-kuhnya/garniry' },
            { name: 'Десерты', route: '/veganskaya-kuhnya/deserty' },
            { name: 'Выпечка', route: '/veganskaya-kuhnya/vypechka' },
            { name: 'Сыроедческие блюда', route: '/veganskaya-kuhnya/syroedcheskie-blyuda' },
            { name: 'Напитки', route: '/veganskaya-kuhnya/napitki' },
        ],
    },
    {
        name: 'Детские блюда',
        route: '/detskie-blyuda',
        icon: '/icons/child-tasty.svg',
    },
    {
        name: 'Лечебное питание',
        route: '/lechebnoe-pitanie',
        icon: '/icons/healthy-eating.svg',
    },
    {
        name: 'Национальные блюда',
        route: '/nacionalnye',
        icon: '/icons/international-food.svg',
    },
    {
        name: 'Соусы',
        route: '/sousy',
        icon: '/icons/pot.svg',
    },
    {
        name: 'Напитки',
        route: '/napitki',
        icon: '/icons/cup-tea.svg',
    },
    {
        name: 'Заготовки',
        route: '/zagotovki',
        icon: '/icons/washing-maschine.svg',
    },
];
