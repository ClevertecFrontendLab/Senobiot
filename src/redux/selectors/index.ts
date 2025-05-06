import { ApplicationState } from '~/redux/store/configure-store';

export const getCategories = (state: ApplicationState) => state.keys.categories;
export const getMeats = (state: ApplicationState) => state.keys.meats;
export const getSides = (state: ApplicationState) => state.keys.sides;
export const getAllergens = (state: ApplicationState) => state.keys.allergens;
export const getNavigationConfig = (state: ApplicationState) =>
    state.navigation.navigationConfig.navigationTree;
export const getSubCategoriesByIds = (state: ApplicationState) =>
    state.navigation.navigationConfig.subCategoriesByIds;
export const getCategoriesByIds = (state: ApplicationState) =>
    state.navigation.navigationConfig.categoriesByIds;
export const getcurrentLocationState = (state: ApplicationState) =>
    state.navigation.currentLocationState;
