import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AllCategories } from '~/types';
import { getLocallySavedNavigationConfig, saveLocallyNavigationConfig } from '~/utils';

import { apiSlice } from '../query/create-api';

type NavigationReducerProps = {
    config: AllCategories[];
};

const initialState: NavigationReducerProps = {
    config: getLocallySavedNavigationConfig(),
};

const navigation = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        setNavigationConfig(state, action: PayloadAction<AllCategories[]>) {
            state.config = action.payload;
        },
        getNavigationConfig(state) {
            return state;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(apiSlice.endpoints.allCategories.matchFulfilled, (state, action) => {
            state.config = action.payload;
            saveLocallyNavigationConfig(action.payload);
            console.log(action.payload);
        });
    },
});

export const { setNavigationConfig, getNavigationConfig } = navigation.actions;
export const { reducer: navigationReducer } = navigation;
