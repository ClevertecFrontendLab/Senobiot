import { ApplicationState } from '~/store/configure-store';

export const getFilteredReciepts = (state: ApplicationState) => state.reciepts.filtrated;
export const getAllReciepts = (state: ApplicationState) => state.reciepts.initial;
export const getCategories = (state: ApplicationState) => state.keys.categories;
export const getMeats = (state: ApplicationState) => state.keys.meats;
export const getSides = (state: ApplicationState) => state.keys.sides;
export const getAllergens = (state: ApplicationState) => state.keys.allergens;
