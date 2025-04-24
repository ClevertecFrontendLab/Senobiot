import { Middleware } from '@reduxjs/toolkit';

import { applyFilters, filterByAllergens, filtrateReciepts } from '~/reducers'; // Импортируйте ваш action creator
import { ApplicationState } from '~/store/configure-store';
import { RecipeProps } from '~/types';

export const filterMiddleware: Middleware<ApplicationState> = (store) => (next) => (action) => {
    if (filterByAllergens.match(action)) {
        const { allergens } = action.payload;
        console.log(' MW filterByAllergens');
        const state = store.getState();
        const allRecipes: RecipeProps[] = state.reciepts.initial;

        const filteredRecipes = allRecipes.filter(
            (recipe) =>
                !recipe.ingredients.some((ingredient) =>
                    allergens.some((allergen: string) =>
                        ingredient.title.toLowerCase().includes(allergen.toLowerCase()),
                    ),
                ),
        );

        store.dispatch(filtrateReciepts(filteredRecipes));
    }

    if (applyFilters.match(action)) {
        console.log(' MW applyFilters');
        const { category, meat, side } = action.payload;
        const state = store.getState();
        const allRecipes: RecipeProps[] = state.reciepts.filtrated; // бкркм пофилтрованые аллергенами

        const filteredRecipes = allRecipes.filter((recipe) => {
            let include = false;

            if (category && category.length > 0) {
                if (recipe.category.some((e) => category.includes(e))) {
                    include = true;
                }
            }

            if (recipe.meat) {
                if (meat && meat.length > 0) {
                    if (meat.includes(recipe.meat)) {
                        include = true;
                    }
                } else {
                    include = false;
                }
            } else {
                include = false;
            }

            if (recipe.side) {
                if (side && side.length > 0) {
                    if (side.includes(recipe.side)) {
                        include = true;
                    }
                } else {
                    include = false;
                }
            } else {
                include = false;
            }

            return include;
        });

        store.dispatch(filtrateReciepts(filteredRecipes));
    }

    return next(action);
};
