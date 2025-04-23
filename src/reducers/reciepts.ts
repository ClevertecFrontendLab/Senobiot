import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import mockRespone from '~/data/data.json';
import { RecipeProps } from '~/types';
const data = JSON.parse(JSON.stringify(mockRespone));

type Reciepts = {
    initial: RecipeProps[];
    filtrated: RecipeProps[];
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
    },
});

export const { filtrateReciepts } = reciepts.actions;
export const { reducer: recieptsReducer } = reciepts;
