import {
    createSlice,
    // PayloadAction
} from '@reduxjs/toolkit';

import { AllCategories, CategoriesByIds, SubCategoriesByIds } from '~/types';
import { getLocallySavedNavigationConfig, saveLocallyNavigationConfig } from '~/utils';

import { apiSlice } from '../query/create-api';

export type NavigationReducerProps = {
    navigationTree: AllCategories[];
    categoriesByIds: CategoriesByIds;
    subCategoriesByIds: SubCategoriesByIds;
};

const initialState: NavigationReducerProps = {
    navigationTree: getLocallySavedNavigationConfig()?.navigationTree,
    categoriesByIds: getLocallySavedNavigationConfig()?.categoriesByIds,
    subCategoriesByIds: getLocallySavedNavigationConfig()?.subCategoriesByIds,
};

const navigation = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        // setNavigationConfig(state, action: PayloadAction<AllCategories[]>) {
        //     state.config = action.payload;
        // },
    },
    extraReducers: (builder) => {
        builder.addMatcher(apiSlice.endpoints.allCategories.matchFulfilled, (state, action) => {
            state.navigationTree = action.payload.navigationTree;
            state.categoriesByIds = action.payload.categoriesByIds;
            state.subCategoriesByIds = action.payload.subCategoriesByIds;
            saveLocallyNavigationConfig(action.payload);
            console.log(action.payload);
        });
    },
});

// export const { setNavigationConfig } = navigation.actions;
export const { reducer: navigationReducer } = navigation;
