import { ROUTES_NAV } from '~/constants/routes';

export const APP_PREFIX_PATH = '';

type navTreeProps = {
    key: string;
    path: string;
    title: string;
    breadcrumb: boolean;
    submenu: Array<navTreeProps>;
};

export const navTree: Array<navTreeProps> = [
    {
        key: 'main',
        path: ROUTES_NAV.root,
        title: 'Главная',
        breadcrumb: true,
        submenu: [],
    },
    {
        key: 'salates',
        path: ROUTES_NAV.salates,
        title: 'Салаты',
        breadcrumb: true,
        submenu: [],
    },
    {
        key: 'zakuski',
        path: ROUTES_NAV.zakuski,
        title: 'Закуски',
        breadcrumb: true,
        submenu: [],
    },
    {
        key: 'pervye-blyuda',
        path: ROUTES_NAV.pervyeBlyuda,
        title: 'Первые блюда',
        breadcrumb: true,
        submenu: [],
    },
    {
        key: 'vtorye-blyuda',
        path: ROUTES_NAV.vtoryeBlyuda,
        title: 'Вторые блюда',
        breadcrumb: true,
        submenu: [],
    },
    {
        key: 'deserty',
        path: ROUTES_NAV.desertyVypechka,
        title: 'Десерты',
        breadcrumb: true,
        submenu: [],
    },
    {
        key: 'grill',
        path: ROUTES_NAV.blyudaNaGrile,
        title: 'Блюда на грилле',
        breadcrumb: true,
        submenu: [],
    },
    {
        key: 'vegan-kitchen',
        path: ROUTES_NAV.veganskayaKuhnya.root,
        title: 'Веганская кухня',
        breadcrumb: true,
        submenu: [
            {
                key: 'zakuski',
                path: ROUTES_NAV.veganskayaKuhnya.zakuski,
                title: 'Закуски',
                breadcrumb: true,
                submenu: [],
            },
            {
                key: 'pervye-blyuda',
                path: ROUTES_NAV.veganskayaKuhnya.pervyeBlyuda,
                title: 'Первые блюда',
                breadcrumb: true,
                submenu: [],
            },
            {
                key: 'vtorye-blyuda',
                path: ROUTES_NAV.veganskayaKuhnya.vtoryeBlyuda,
                title: 'Вторые блюда',
                breadcrumb: true,
                submenu: [],
            },
            {
                key: 'garniry',
                path: ROUTES_NAV.veganskayaKuhnya.garniry,
                title: 'Гарниры',
                breadcrumb: true,
                submenu: [],
            },
            {
                key: 'deserty',
                path: ROUTES_NAV.veganskayaKuhnya.deserty,
                title: 'Десерты',
                breadcrumb: true,
                submenu: [],
            },
            {
                key: 'vypechka',
                path: ROUTES_NAV.veganskayaKuhnya.vypechka,
                title: 'Выпечка',
                breadcrumb: true,
                submenu: [],
            },
            {
                key: 'syroedcheskie-blyuda',
                path: ROUTES_NAV.veganskayaKuhnya.syroedcheskieBlyuda,
                title: 'Сыроедческие блюда',
                breadcrumb: true,
                submenu: [],
            },
            {
                key: 'napitki',
                path: ROUTES_NAV.veganskayaKuhnya.napitki,
                title: 'Напитки',
                breadcrumb: true,
                submenu: [],
            },
        ],
    },
    {
        key: 'detskie',
        path: ROUTES_NAV.detskieBlyuda,
        title: 'Детские блюда',
        breadcrumb: true,
        submenu: [],
    },
    {
        key: 'lechebnoe',
        path: ROUTES_NAV.lechebnoePitanie,
        title: 'Лечебное питание',
        breadcrumb: true,
        submenu: [],
    },
    {
        key: 'nacionalnye',
        path: ROUTES_NAV.nacionalnyeBlyuda,
        title: 'Национальные блюда',
        breadcrumb: true,
        submenu: [],
    },
    {
        key: 'sousy',
        path: ROUTES_NAV.sousy,
        title: 'Соусы',
        breadcrumb: true,
        submenu: [],
    },
    {
        key: 'napitki',
        path: ROUTES_NAV.napitki,
        title: 'Напитки',
        breadcrumb: true,
        submenu: [],
    },
    {
        key: 'zagotovki',
        path: ROUTES_NAV.zagotovki,
        title: 'Заготовки',
        breadcrumb: true,
        submenu: [],
    },
];
