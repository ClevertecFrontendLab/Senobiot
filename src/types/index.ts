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
    nutritionValue: {
        calories: number;
        proteins?: number;
        protein?: number;
        fats: number;
        carbohydrates: number;
    };
    ingredients: {
        title: string;
        count: string | number;
        measureUnit: string;
    }[];
    steps: {
        stepNumber: number;
        description: string;
        image: string;
    }[];
    meat?: string;
    side: string;
};

export type CategoriesProps = {
    categoryTitle: string;
    categoryIconUrl: string;
    route: string;
};

export type CategorySectionProps = {
    activeSubcategory?: string;
    recieptsData?: RecipeProps[];
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
};

export type ComposeFiltersPayloadType = {
    category?: string[];
    author?: string[];
    meat?: string[];
    side?: string[];
};

export type AllCategories = {
    categoryId?: string;
    categoryEn: string;
    categoryRu: string;
    categoryDescription?: string;
    categoryIcon?: string;
    route: string;
    apiQureryId?: string;
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
    apiQureryId: string;
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
    category: string;
    subcategory?: string;
    id?: string;
};

export type BreadcrumbItem = {
    label: string;
    to: string;
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
