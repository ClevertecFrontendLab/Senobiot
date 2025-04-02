interface MostTastyCardsDataProps {
    title: string;
    description: string;
    img: string;
}

interface DishCategoryProps {
    name: string;
    route: string;
    icon: string;
    subcategories?: { name: string; route: string }[];
}

export const dishesCategories: DishCategoryProps[] = [
    {
        name: 'Салаты',
        route: '/salates',
        icon: '/icons/dishes-category/salates.svg',
    },
    {
        name: 'Закуски',
        route: '/zakuski',
        icon: '/icons/dishes-category/eggplant.svg',
    },
    {
        name: 'Первые блюда',
        route: '/pervye-blyuda',
        icon: '/icons/dishes-category/frying-pan.svg',
    },
    {
        name: 'Вторые блюда',
        route: '/vtorye-blyuda',
        icon: '/icons/dishes-category/leaf.svg',
    },
    {
        name: 'Десерты, выпечка',
        route: '/deserty-vypechka',
        icon: '/icons/dishes-category/mortar.svg',
    },
    {
        name: 'Блюда на гриле',
        route: '/blyuda-na-grile',
        icon: '/icons/dishes-category/pasta.svg',
    },
    {
        name: 'Веганская кухня',
        route: '/veganskaya-kuhnya',
        icon: '/icons/dishes-category/pot-medical.svg',
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
        icon: '/icons/dishes-category/child-tasty.svg',
    },
    {
        name: 'Лечебное питание',
        route: '/lechebnoe-pitanie',
        icon: '/icons/dishes-category/healthy-eating.svg',
    },
    {
        name: 'Национальные блюда',
        route: '/nacionalnye',
        icon: '/icons/dishes-category/international-food.svg',
    },
    {
        name: 'Соусы',
        route: '/sousy',
        icon: '/icons/dishes-category/pot.svg',
    },
    {
        name: 'Напитки',
        route: '/napitki',
        icon: '/icons/dishes-category/cup-tea.svg',
    },
    {
        name: 'Заготовки',
        route: '/zagotovki',
        icon: '/icons/dishes-category/washing-maschine.svg',
    },
];

export const mostTastyCardsData: MostTastyCardsDataProps[] = [
    {
        title: 'Кнели со спагетти',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить...',
        img: '/card-images/card-1.png',
    },
    {
        title: 'Лапша с курицей и шафраном',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить...',
        img: '/card-images/card-2.png',
    },
    {
        title: 'Пряная ветчина по итальянски',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить...',
        img: '/card-images/card-3.png',
    },
    {
        title: 'Том-ям с капустой кимчи',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить...',
        img: '/card-images/card-4.png',
    },
];
