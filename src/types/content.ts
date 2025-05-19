import { AllCategories, SubCategoryList } from './navigation';

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

export type CategoryMenuProps = {
    list: SubCategoryList[];
    activeSubcategory?: string;
};

export type FooterProps = { noExitButton?: boolean; p?: string };

export type Ingredients = {
    title: string;
    count: string | number;
    measureUnit: string;
};

export type NutritionValue = {
    calories: number;
    fats: number;
    carbohydrates: number;
    proteins?: number;
    protein?: number;
};

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

export type PreviewRecipesSectionProps = Partial<{
    recipes: RecipeProps[];
    markdownText: string;
}>;

export type RelevantKitchenSectionProps = Partial<{
    title: string;
    description: string;
    data: RecipeProps[];
}>;

export type NextSectionCardMinimizedProps = {
    title: string;
    buttonText?: string;
    iconUrl?: string;
};
