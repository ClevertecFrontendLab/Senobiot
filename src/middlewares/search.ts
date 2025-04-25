import { Middleware } from '@reduxjs/toolkit';

import { filtrateReciepts, searchReciepts } from '~/reducers';
import { ApplicationState } from '~/store/configure-store';
import { RecipeProps } from '~/types';

export const searchMiddleware: Middleware<ApplicationState> = (store) => (next) => (action) => {
    if (searchReciepts.match(action)) {
        console.log(' MW searchMiddleware');
        const state = store.getState();
        const reciepts: RecipeProps[] = state.reciepts.filtrated;
        console.log(reciepts);
        const filteredRecipes = reciepts.filter((e) =>
            e.title.toLowerCase().includes(action.payload.toLowerCase()),
        );
        store.dispatch(filtrateReciepts(filteredRecipes));
    }

    return next(action);
};
