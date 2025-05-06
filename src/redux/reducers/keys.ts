import { createSlice } from '@reduxjs/toolkit';

type KeysProps = {
    categories: { [x: string]: string };
    meats: string[];
    sides: { [key: string]: string };
    allergens: string[];
};

const initialState: KeysProps = {
    categories: {
        Соусы: 'souses',
        'Домашние заготовки': 'zagotovki',
        Напитки: 'drinks',
        Салаты: 'salads',
        Закуски: 'snacks',
        'Веганская кухня': 'vegan',
        Национальные: 'national',
        'Вторые блюда': 'second-dish',
        'Первые блюда': 'first-dish',
        'Детские блюда': 'children-dishes',
        'Десерты и выпечка': 'dessert',
        'Блюда на гриле': 'grilled-dishes',
        'Лечебное питание': 'healthy-food',
    },
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

export const { reducer: keysReducer } = keys;
