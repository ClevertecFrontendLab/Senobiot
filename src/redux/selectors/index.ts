import { ApplicationState } from '~/redux/store/configure-store';

export const getFilteredReciepts = (state: ApplicationState) => state.reciepts.filtrated;
export const getAllReciepts = (state: ApplicationState) => state.reciepts.initial;
export const getCategories = (state: ApplicationState) => state.keys.categories;
export const getMeats = (state: ApplicationState) => state.keys.meats;
export const getSides = (state: ApplicationState) => state.keys.sides;
export const getAllergens = (state: ApplicationState) => state.keys.allergens;
export const getActiveSearch = (state: ApplicationState) => state.reciepts.activeSearch;
export const isEmptySearch = (state: ApplicationState) => state.reciepts.isEmptySearch;
export const getNavigationConfig = (state: ApplicationState) => state.navigation.navigationTree;
export const getSubCategoriesByIds = (state: ApplicationState) =>
    state.navigation.subCategoriesByIds;
export const getCategoriesByIds = (state: ApplicationState) => state.navigation.categoriesByIds;
