import { createSlice } from '@reduxjs/toolkit';

import { navTree } from '~/configs/navigationConfig';

type KeysProps = {
    categories: string[];
    meats: string[];
    sides: string[];
    allergens: string[];
};

const initialState: KeysProps = {
    categories: navTree.map((e) => e.title),
    meats: ['Картошка', 'Гречка', 'Паста', 'Спагетти', 'Рис', 'Капуста', 'Фасоль', 'Другие овощи'],
    sides: ['Курица', 'Свинина', 'Говядина', 'Индейка', 'Утка'],
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
