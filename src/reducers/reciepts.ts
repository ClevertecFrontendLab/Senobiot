import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import mockRespone from '~/data/data.json';
import { ComposeFiltersPayloadType, RecipeProps } from '~/types';
const data = JSON.parse(JSON.stringify(mockRespone));

type Reciepts = {
    initial: RecipeProps[];
    filtrated: RecipeProps[];
    categoryInitial?: RecipeProps[];
    categoryFiltrated?: RecipeProps[];
    isSearchHighlighted?: boolean;
};

const initialState: Reciepts = {
    initial: data,
    filtrated: data,
    isSearchHighlighted: false,
};

const reciepts = createSlice({
    name: 'reciepts',
    initialState,
    reducers: {
        filterByAllergens(state, action: PayloadAction<{ allergens: string[] }>) {
            console.log('filterByAllergens');
            void action;
            return state;
        },
        applyFilters(state, action: PayloadAction<ComposeFiltersPayloadType>) {
            console.log('applyFilters');
            void action;
            return state;
        },
        searchReciepts(state, action: PayloadAction<string>) {
            console.log('searchReciepts');
            void action;
            return state;
        },
        filtrateReciepts(state, action: PayloadAction<RecipeProps[]>) {
            console.log('filtrateReciepts');
            state.filtrated = action.payload;
        },
        filtrateCategory(state, action: PayloadAction<RecipeProps[]>) {
            state.filtrated = action.payload;
        },
        resetRecieptFilters(state) {
            console.log('resetRecieptFilters');
            state.filtrated = state.initial;
        },
        resetCategory(state) {
            console.log('filtrateReciepts');
            state.filtrated = state.initial;
        },
    },
});

export const {
    filterByAllergens,
    applyFilters,
    searchReciepts,
    filtrateReciepts,
    resetRecieptFilters,
    filtrateCategory,
    resetCategory,
} = reciepts.actions;
export const { reducer: recieptsReducer } = reciepts;
