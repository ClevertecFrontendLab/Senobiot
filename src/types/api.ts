import { RecipeProps } from './content';
import { AllCategories, SubCategoriesByIds } from './navigation';

export type SignUpRequest = {
    email: string;
    login: string;
    password: string;
    firstName?: string;
    lastName?: string;
};

export type SignInRequest = {
    login: string;
    password: string;
};

export type RestoreRequest = {
    email: string;
};

export type OtpVerifyRequest = {
    email: string;
    otpToken: string;
};

export type ResetRequest = {
    login: string;
    password: string;
    passwordConfirm: string;
};

export type SignUpResponse = {
    statusCode: number;
    message: string;
    error?: string;
};

export type useReciepeRequestsProps = {
    randomCategory?: AllCategories;
    isJuiciest?: boolean;
    apiQueryId?: string;
    page?: number;
    recipeId?: string;
    idKeys: SubCategoriesByIds;
    noSkipJuciciest?: boolean;
};

export type QueryParams = {
    limit?: number;
    page?: number;
    allergens?: string;
    searchString?: string;
    meat?: string;
    garnish?: string;
    subcategoriesIds?: string;
    isJuiciest?: boolean;
    isLatest?: boolean;
    idKeys: SubCategoriesByIds;
};

export type RecipesResponse = {
    data: RecipeProps[];
    meta: MetaData;
};

type MetaData = {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
};
