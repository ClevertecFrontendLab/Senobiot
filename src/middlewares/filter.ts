import { Middleware } from '@reduxjs/toolkit';

import { applyFilters, filterByAllergens, filtrateReciepts } from '~/reducers';
import { ApplicationState } from '~/store/configure-store';
import { ComposeFiltersPayloadType, RecipeProps } from '~/types';

const filtrateAllergens = (reciepts: RecipeProps[], allergens: string[]) =>
    reciepts.filter(
        (recipe) =>
            !recipe.ingredients.some((ingredient) =>
                allergens.some((allergen: string) =>
                    ingredient.title.toLowerCase().includes(allergen.toLowerCase()),
                ),
            ),
    );

const filtratebyFilters = (reciepts: RecipeProps[], filters: ComposeFiltersPayloadType) => {
    const { category, meat, side } = filters;
    console.log(filters);
    return reciepts.filter((recipe) => {
        if (category && category.length > 0 && !recipe.category.some((e) => category.includes(e))) {
            return false;
        }

        if (meat && meat.length > 0 && !(recipe.meat && meat.includes(recipe.meat))) {
            return false;
        }

        if (side && side.length > 0 && !(recipe.side && side.includes(recipe.side))) {
            return false;
        }
        return true;
    });
};

export const filterMiddleware: Middleware<ApplicationState> = (store) => (next) => (action) => {
    if (filterByAllergens.match(action)) {
        console.log(' MW filterByAllergens');
        const state = store.getState();
        const allRecipes: RecipeProps[] = state.reciepts.initial;
        let filteredRecipes = filtrateAllergens(allRecipes, action.payload);
        const activeFilters = state.reciepts.activeFilters;

        if (activeFilters) {
            filteredRecipes = filtratebyFilters(filteredRecipes, activeFilters);
        }
        store.dispatch(filtrateReciepts(filteredRecipes));
    }

    if (applyFilters.match(action)) {
        console.log(' MW applyFilters');
        const state = store.getState();
        const allRecipes: RecipeProps[] = state.reciepts.filtrated; // бкркм пофилтрованые аллергенами
        let filteredRecipes = filtratebyFilters(allRecipes, action.payload);

        const allergens = state.reciepts.allergens;
        if (allergens) {
            filteredRecipes = filtrateAllergens(filteredRecipes, allergens);
        }
        store.dispatch(filtrateReciepts(filteredRecipes));
    }

    return next(action);
};
