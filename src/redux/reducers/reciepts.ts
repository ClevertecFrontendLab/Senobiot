import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import mockRespone from '~/data/data.json';
import { ComposeFiltersPayloadType, RecipeProps } from '~/types';
const data = JSON.parse(JSON.stringify(mockRespone));

type RecieptsFilterReducerProps = {
    initial: RecipeProps[];
    filtrated: RecipeProps[];
    // searched?: RecipeProps[] | null;
    allergens: string[] | null;
    activeFilters: ComposeFiltersPayloadType | null;
    activeSearch?: string | null;
    isEmptySearch?: boolean | null;
};

const initialState: RecieptsFilterReducerProps = {
    initial: data,
    filtrated: data,
    // searched: null,
    allergens: null,
    activeFilters: null,
    activeSearch: null,
    isEmptySearch: null,
};

const reciepts = createSlice({
    name: 'reciepts',
    initialState,
    reducers: {
        filterByAllergens(state, action: PayloadAction<string[]>) {
            state.allergens = action.payload;
        },
        applyFilters(state, action: PayloadAction<ComposeFiltersPayloadType>) {
            state.activeFilters = action.payload;
        },
        searchReciepts(state, action: PayloadAction<string>) {
            state.activeSearch = action.payload;
            state.isEmptySearch = false;
        },
        filtrateReciepts(state, action: PayloadAction<RecipeProps[]>) {
            console.log('filtrateReciepts');
            state.filtrated = action.payload;
        },
        resetReciepts(state) {
            state.filtrated = state.initial;
        },
        resetRecieptsFilters(state) {
            state.activeFilters = null;
        },
        resetRecieptsAllergens(state) {
            state.allergens = null;
        },
        resetSearch(state) {
            state.activeSearch = null;
            state.isEmptySearch = null;
        },
        setEmptySearch(state, action: PayloadAction<boolean | null>) {
            state.isEmptySearch = action.payload;
        },
    },
});

export const {
    filterByAllergens,
    applyFilters,
    searchReciepts,
    filtrateReciepts,
    resetReciepts,
    resetRecieptsFilters,
    resetRecieptsAllergens,
    resetSearch,
    setEmptySearch,
} = reciepts.actions;
export const { reducer: recieptsReducer } = reciepts;
