import { CategorySectionDataProps } from '~/components/shared-components/CategorySection';

interface DishCategoryProps {
    name: string;
    description: string;
    route: string;
    icon: string;
    subcategories?: { name: string; route: string }[];
}

export type BlogType = {
    id: number;
    name: string;
    username: string;
    profilePic: string;
    excerpt: string;
};

export const dishesCategories: DishCategoryProps[] = [
    {
        name: 'Салаты',
        route: '/salates',
        icon: '/icons/dishes-category/salates.svg',
        description: '',
    },
    {
        name: 'Закуски',
        route: '/zakuski',
        icon: '/icons/dishes-category/eggplant.svg',
        description: '',
    },
    {
        name: 'Первые блюда',
        route: '/pervye-blyuda',
        icon: '/icons/dishes-category/frying-pan.svg',
        description: '',
    },
    {
        name: 'Вторые блюда',
        route: '/vtorye-blyuda',
        icon: '/icons/dishes-category/leaf.svg',
        description: '',
    },
    {
        name: 'Десерты, выпечка',
        route: '/deserty-vypechka',
        icon: '/icons/dishes-category/mortar.svg',
        description:
            'Без них невозможно представить себе ни современную, ни традиционную кулинарию. Пироги и печенья, блины, пончики, вареники и, конечно, хлеб — рецепты изделий из теста многообразны и невероятно популярны.',
    },
    {
        name: 'Блюда на гриле',
        route: '/blyuda-na-grile',
        icon: '/icons/dishes-category/pasta.svg',
        description: '',
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
        description:
            'Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.',
    },
    {
        name: 'Детские блюда',
        route: '/detskie-blyuda',
        icon: '/icons/dishes-category/child-tasty.svg',
        description: '',
    },
    {
        name: 'Лечебное питание',
        route: '/lechebnoe-pitanie',
        icon: '/icons/dishes-category/healthy-eating.svg',
        description: '',
    },
    {
        name: 'Национальные блюда',
        route: '/nacionalnye',
        icon: '/icons/dishes-category/international-food.svg',
        description: '',
    },
    {
        name: 'Соусы',
        route: '/sousy',
        icon: '/icons/dishes-category/pot.svg',
        description: '',
    },
    {
        name: 'Напитки',
        route: '/napitki',
        icon: '/icons/dishes-category/cup-tea.svg',
        description: '',
    },
    {
        name: 'Заготовки',
        route: '/zagotovki',
        icon: '/icons/dishes-category/washing-maschine.svg',
        description: '',
    },
];

export const mostTastyCardsData: CategorySectionDataProps[] = [
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

export const blogsData: BlogType[] = [
    {
        id: 1,
        name: 'Елена Высоцкая',
        username: '@elenadvor',
        profilePic: 'path/to/avatar1.jpg',
        excerpt:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время...',
    },
    {
        id: 2,
        name: 'Alex Cook',
        username: '@funtasticcooking',
        profilePic: 'path/to/avatar2.jpg',
        excerpt:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время...',
    },
    {
        id: 3,
        name: 'Екатерина Константинова',
        username: '@bake_and_pie',
        profilePic: 'path/to/avatar3.jpg',
        excerpt:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время...',
    },
];

export type DishesListDataType = {
    name: string;
    route: string;
    category: string;
    subcategory: string;
    img: string;
    description: string;
};

export const dishesList: DishesListDataType[] = [
    {
        name: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        route: '/kartoshka-tushenaya',
        category: 'Веганская кухня',
        subcategory: 'Национальные блюда',
        img: '/dishes/vegan/potato.svg',
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, - вариант сытного блюда на каждый день. Фасоль в данном случае заменяет мясо, делая рагу сытным и питательным. Чтобы сократить время приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт добавления томатной пасты.',
    },
    {
        name: 'Картофельные рулетики с грибами',
        route: '/kartofelnye-ruletiki',
        category: 'Веганская кухня',
        subcategory: 'Детские блюда',
        img: '/dishes/kids/potato_rolls.svg',
        description:
            'Рекомендуем всем приготовить постное блюдо из картофеля и грибов. Готовится это блюдо без яиц, масла и молока.',
    },
    {
        name: 'Том-ям с капустой кимчи',
        route: '/tom-yam-kimchi',
        category: 'Веганская кухня',
        subcategory: 'Национальные блюда',
        img: '/dishes/national/tom_yam_kimchi.svg',
        description:
            'Как раз после праздников, когда мясные продукты ещё остались, но никто их уже не хочет, время варить суп.',
    },
    {
        name: 'Овощная лазанья из лаваша',
        route: '/ovoshchnaya-lazanya',
        category: 'Веганская кухня',
        subcategory: 'Блюда на гриле',
        img: '/dishes/grill/vegetable_lasagna.svg',
        description:
            'Большое, сытное блюдо для семейного обеда! Такая лазанья готовится с овощным соусом.',
    },
    {
        name: 'Тефтели из булгура и чечевицы',
        route: '/tefteli-bulgur-chechevitsa',
        category: 'Веганская кухня',
        subcategory: 'Вторые блюда',
        img: '/dishes/main/bulgur_lentil_meatballs.svg',
        description:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят для постного и вегетарианского меню.',
    },
    {
        name: 'Чесночная картошка',
        route: '/chesnochnaya-kartoshka',
        category: 'Веганская кухня',
        subcategory: 'Национальные блюда',
        img: '/dishes/national/garlic_potato.svg',
        description:
            'Такая картошка украсит любой семейный обед! Все будут в полном восторге, очень вкусно! А аромат чеснока!',
    },
    {
        name: 'Пури',
        route: '/puri',
        category: 'Веганская кухня',
        subcategory: 'Национальные блюда',
        img: '/dishes/national/puri.svg',
        description: 'Пури – это индийские жареные лепёшки. Рецепт лепёшек из пшеничной муки.',
    },
];

export const sliderData: CategorySectionDataProps[] = [
    {
        title: 'Кнели со спагетти',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить...',
        img: '/card-images/card-1.png',
        subcategory: 'Первые блюда',
        icon: '/icons/dishes-category/pot.svg',
    },
    {
        title: 'Лапша с курицей и шафраном',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить...',
        img: '/card-images/card-2.png',
        subcategory: 'Веганская кухня',
        icon: '/icons/dishes-category/leaf.svg',
    },
    {
        title: 'Пряная ветчина по итальянски',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить...',
        img: '/card-images/card-3.png',
        subcategory: 'Десерты и выпечка',
        icon: '/icons/dishes-category/salates.svg',
    },
    {
        title: 'Том-ям с капустой кимчи',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить...',
        img: '/card-images/card-4.png',
        subcategory: 'Десерты и выпечка',
        icon: '/icons/dishes-category/pot.svg',
    },
    {
        title: 'Кнели со спагетти',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить...',
        img: '/card-images/card-1.png',
        subcategory: 'Веганская кухня',
        icon: '/icons/dishes-category/leaf.svg',
    },

    {
        title: 'Лапша с курицей и шафраном',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить...',
        img: '/card-images/card-2.png',
        subcategory: 'Первые блюда',
        icon: '/icons/dishes-category/pot.svg',
    },
    {
        title: 'Пряная ветчина по итальянски',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить...',
        img: '/card-images/card-3.png',
        subcategory: 'Салаты',
        icon: '/icons/dishes-category/eggplant.svg',
    },
    {
        title: 'Том-ям с капустой кимчи',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить...',
        img: '/card-images/card-4.png',
        subcategory: 'Салаты',
        icon: '/icons/dishes-category/eggplant.svg',
    },
];

export const allergensIngredients = [
    'Корень мандрагоры',
    'Рог единорога',
    'Секретный ингридиент из слёрма и еще чего',
];
