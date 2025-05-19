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

export type BurgerNavMenuProps = {
    breadCrumbsClickHandler: React.MouseEventHandler<HTMLAnchorElement>;
    menuClickHandler: React.MouseEventHandler<HTMLDivElement>;
};

export type CategoriesByIds = {
    [key: string]: AllCategories;
};

export type CurrentLocationState = {
    area?: { label: string; route: string };
    category?: { label: string; route?: string };
    subcategory?: { label: string; route?: string };
    reciept?: { label: string; route?: string };
};

export type LocationParams = {
    category?: string;
    subcategory?: string;
    id?: string;
};

export type NavigationConfig = {
    categoriesByIds: CategoriesByIds;
    navigationTree: AllCategories[];
    subCategoriesByIds: SubCategoriesByIds;
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
