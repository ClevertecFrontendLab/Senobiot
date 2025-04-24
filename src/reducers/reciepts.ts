import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import mockRespone from '~/data/data.json';
import { RecipeProps } from '~/types';
const data = JSON.parse(JSON.stringify(mockRespone));

type Reciepts = {
    initial: RecipeProps[];
    filtrated: RecipeProps[];
    categoryInitial?: RecipeProps[];
    categoryFiltrated?: RecipeProps[];
};

const initialState: Reciepts = {
    initial: data,
    filtrated: data,
};

const reciepts = createSlice({
    name: 'reciepts',
    initialState,
    reducers: {
        filtrateReciepts(state, action: PayloadAction<RecipeProps[]>) {
            state.filtrated = action.payload;
        },
        filtrateCategory(state, action: PayloadAction<RecipeProps[]>) {
            state.filtrated = action.payload;
        },
        resetRecieptFilters(state) {
            state.filtrated = state.initial;
        },
        resetCategory(state) {
            state.filtrated = state.initial;
        },
    },
});

export const { filtrateReciepts, resetRecieptFilters, filtrateCategory, resetCategory } =
    reciepts.actions;
export const { reducer: recieptsReducer } = reciepts;
