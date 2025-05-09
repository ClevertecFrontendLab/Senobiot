import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CurrentLocationState, NavigationConfig } from '~/types';
import { getLocallySavedNavigationConfig, saveLocallyNavigationConfig } from '~/utils';

import { apiSlice } from '../query/create-api';

export type NavigationReducerProps = {
    navigationConfig: NavigationConfig;
    currentLocationState: CurrentLocationState;
};

const initialState: NavigationReducerProps = {
    navigationConfig: getLocallySavedNavigationConfig(),
    currentLocationState: { area: { label: 'Главная', route: '/' } },
};

const navigation = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        setCurrentLocation(state, action: PayloadAction<CurrentLocationState | undefined>) {
            state.currentLocationState = {
                ...initialState.currentLocationState,
                ...action.payload,
            };
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(apiSlice.endpoints.allCategories.matchFulfilled, (state, action) => {
            state.navigationConfig = action.payload;
            saveLocallyNavigationConfig(action.payload);
        });
    },
});

export const { setCurrentLocation } = navigation.actions;
export const { reducer: navigationReducer } = navigation;
