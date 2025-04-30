import { createSlice } from '@reduxjs/toolkit';

import { navTree } from '~/configs/navigationConfig';

type KeysProps = {
    categories: { [x: string]: string };
    meats: string[];
    sides: { [key: string]: string };
    allergens: string[];
};

const categories: { [key: string]: string } = {};
navTree.forEach((e) => {
    if (!e.skipSideMenu) {
        categories[e.title] = e.route.slice(1);
    }
});

const initialState: KeysProps = {
    categories,
    meats: ['Курица', 'Свинина', 'Говядина', 'Индейка', 'Утка'],
    sides: {
        Картошка: 'potatoes',
        Гречка: '',
        Паста: '',
        Спагетти: 'spagetty',
        Рис: 'rice',
        Капуста: '',
        Фасоль: '',
        'Другие овощи': 'other',
    },
    allergens: [
        'Молочные продукты',
        'Яйцо',
        'Рыба',
        'Моллюски',
        'Орехи',
        'Томат (помидор)',
        'Цитрусовые',
        'Клубника (ягоды)',
        'Шоколад',
    ],
};

const keys = createSlice({
    name: 'keys',
    initialState,
    reducers: {},
});

// export const { } = reciepts.actions;
export const { reducer: keysReducer } = keys;
