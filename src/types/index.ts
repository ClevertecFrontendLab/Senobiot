import { AlertStatus, ResponsiveValue } from '@chakra-ui/react';
import { MouseEventHandler } from 'react';

export type RecipeProps = {
    _id: string;
    id: string;
    title: string;
    description: string;
    category: CategoriesProps[];
    categoriesIds: string[];
    subcategory: string[];
    createdAt: string;
    image: string;
    bookmarks: number;
    likes: number;
    date: string;
    time: string;
    portions: number;
    nutritionValue: NutritionValue;
    ingredients: Ingredients[];
    steps: CoockingSteps[];
    side: string;
    meat?: string;
};

export type NutritionValue = {
    calories: number;
    fats: number;
    carbohydrates: number;
    proteins?: number;
    protein?: number;
};

export type Ingredients = {
    title: string;
    count: string | number;
    measureUnit: string;
};

export type CoockingSteps = {
    stepNumber: number;
    description: string;
    image: string;
};

export type CategoriesProps = {
    categoryTitle: string;
    categoryIconUrl: string;
    route: string;
};

export type CategorySectionProps = {
    activeSubcategory?: string;
    categoryRecipes?: RecipeProps[];
    categoryData?: AllCategories;
    categoryButtonText?: string;
    noButton?: boolean;
    categoryHeaderMb?: string | number;
    noHeader?: boolean;
    noFooter?: boolean;
    noNavMenu?: boolean;
    noButtonIcon?: boolean;
    noHeaderButton?: boolean;
    mb?: string | number;
    activeSearch?: string | null;
    onClick?: () => void;
    markdownText?: string;
    recieptsByCategory?: RecipeProps[];
};

export type ComposeFiltersPayloadType = {
    category?: string[];
    author?: string[];
    meat?: string[];
    side?: string[];
};

export type AllCategories = {
    categoryEn: string;
    categoryRu: string;
    route: string;
    categoryDescription?: string;
    categoryIcon?: string;
    categoryId?: string;
    apiQueryId?: string;
    subCategories?: SubCategory[];
    subCategoriesList?: SubCategoryList[];
};

export type SubCategory = {
    categoryId: string;
    categoryEn: string;
    categoryRu: string;
    categoryIcon: string;
    categoryDescription: string;
    subcategoryId: string;
    subcategoryEn: string;
    subcategoryRu: string;
    route: string;
    subCategoriesList: SubCategoryList[];
    apiQueryId: string;
};

export type SubCategoryList = {
    categoryEn: string;
    categoryRu: string;
    route: string;
};

export type SubCategoriesByIds = {
    [key: string]: SubCategory;
};

export type CategoriesByIds = {
    [key: string]: AllCategories;
};

export type NavigationConfig = {
    categoriesByIds: CategoriesByIds;
    navigationTree: AllCategories[];
    subCategoriesByIds: SubCategoriesByIds;
};

export type LocationParams = {
    category?: string;
    subcategory?: string;
    id?: string;
};

export type BreadcrumbsItems = {
    area?: BreadcrumbItem;
    category?: BreadcrumbItem;
    subcategory?: BreadcrumbItem;
    recipe?: BreadcrumbItem;
};

export type BreadcrumbItem = {
    label: string;
    to?: string;
};

export type CurrentLocationState = {
    area?: { label: string; route: string };
    category?: { label: string; route?: string };
    subcategory?: { label: string; route?: string };
    reciept?: { label: string; route?: string };
};

export type Filters = {
    allergens?: string[];
    searchString?: string;
    meat?: string;
    garnish?: string;
    subcategoriesIds?: string;
};

export enum SEARCH_STATE {
    SUCCESS = 'success',
    EMPTY = 'empty',
    ERROR = 'error-search',
}

export type CategoryMenuProps = {
    list: SubCategoryList[];
    activeSubcategory?: string;
};

export type SearchInputProps = {
    onSearch: (searchText: string) => void;
};

export type AlertProps = {
    onClose?: () => void;
    title?: string;
    body?: string;
    status?: AlertStatus;
    noBody?: boolean;
    position?: { left?: ResponsiveValue<string> };
};

export type BurgerNavMenuProps = {
    breadCrumbsClickHandler: React.MouseEventHandler<HTMLAnchorElement>;
    menuClickHandler: React.MouseEventHandler<HTMLDivElement>;
};

export type FilterTagProps = {
    item: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    testId?: boolean;
};

export type FooterProps = { noExitButton?: boolean; p?: string };

export type SearchBarProps = {
    pageTitle: string;
    isLoading: boolean;
    pageDescription?: string;
    searchResultState?: SEARCH_STATE;
};

export type AllergensFilterProps = {
    disabled: boolean;
    outerTags?: boolean;
    dataTestIdToggler?: string;
    dataTestCheckBoKeykey?: string;
    dataTestAllergenTag?: string;
};

export type AuthorCardProps = {
    name: string;
    email: string;
    profilePic?: string;
    subscribers?: string | number;
};

export type BlogProps = {
    id: number;
    name: string;
    email: string;
    profilePic: string;
    quote: string;
};

export type NextSectionCardMinimizedProps = {
    title: string;
    buttonText?: string;
    iconUrl?: string;
};

export type CategorySectionNextProps = {
    title: string;
    description?: string;
    data: RecipeProps[];
};

export type CheckBoxLimeProps = {
    index: number;
    item: string;
    isChecked: boolean;
    toggleItem: CallableFunction;
    dataTestIds?: string | number;
    dataTestCheckBoKeykey?: string;
    dataTestCatagory?: string;
    px?: number;
    labelColor?: string;
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

export type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    login: string;
    password: string;
    passwordConfirm: string;
};

export type FormResetValues = Pick<FormValues, 'login' | 'password' | 'passwordConfirm'>;
export type FormLoginValues = Pick<FormValues, 'login' | 'password'>;
export type FormRestoreValues = Pick<FormValues, 'email'>;

export type LoginInputsListProps = {
    field: keyof FormLoginValues;
    label: string;
    placeholder: string;
    type?: string;
    helper?: string;
    dataTestId?: string;
    autocomplete?: string;
};

export type ResetnInputsListProps = {
    field: keyof FormResetValues;
    label: string;
    placeholder: string;
    type?: string;
    helper?: string;
    dataTestId?: string;
    autocomplete?: string;
};

export type FormErrors = {
    firstName?: string;
    lastName?: string;
    email?: string;
    login?: string;
    password?: string;
    passwordConfirm?: string;
};

export type ShowPasswords = {
    password?: boolean;
    passwordConfirm?: boolean;
};

export type FormInputProps = {
    field: keyof FormValues;
    label: string;
    value: string;
    error?: string;
    type?: string;
    placeholder?: string;
    helper?: string;
    showPassword?: ShowPasswords;
    dataTestId?: string;
    autocomplete?: string;
    setShowPassword?: (field: keyof FormValues, value: boolean) => void;
    onChange: (field: keyof FormValues, value: string) => void;
    onBlur: (field: keyof FormValues, value: string) => void;
};

export type RegistrationStepProps = {
    formValues: FormValues;
    inputList: RegistrationInputsListProps[];
    errors: FormErrors;
    showPassword?: ShowPasswords;
    dataTestId?: string;
    setShowPassword: (field: keyof FormValues, value: boolean) => void;
    onChange: (field: keyof FormValues, value: string) => void;
    onBlur: (field: keyof FormValues, value: string) => void;
};

export type RegistrationInputsListProps = {
    field: keyof FormValues;
    label: string;
    placeholder: string;
    type?: string;
    helper?: string;
    dataTestId?: string;
    autocomplete?: string;
};

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

export type AlertError = {
    title?: string;
    body?: string;
    position?: { left?: ResponsiveValue<string> };
};

export enum Modals {
    AUTH_VERIFICATION_SEND = 'AUTH_VERIFICATION_SEND',
    AUTH_VERIFICATION_FAILED = 'AUTH_VERIFICATION_FAILED',
    AUTH_LOGIN_FAILED = 'AUTH_LOGIN_FAILED',
    AUTH_RESTORE_BY_EMAIL = 'AUTH_RESTORE_BY_EMAIL',
    AUTH_ENTER_PIN = 'AUTH_ENTER_PIN',
    AUTH_RESET_PASSWORD = 'AUTH_RESET_PASSWORD',
}

export type AuthPopupProps = {
    isOpen: boolean;
    onClose: () => void;
};
