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
export const selectLoginStatus = (state: ApplicationState) => state.app.isLogged;
export const selectLoadingStatus = (state: ApplicationState) => state.app.isLoading;
export const selectError = (state: ApplicationState) => state.app.error;
export const selectPopup = (state: ApplicationState) => state.app.popup;
export const selectModal = (state: ApplicationState) => state.app.modal;
export const selectUserEmail = (state: ApplicationState) => state.app.userEmail;
