import { useMemo } from 'react';
import { useLocation } from 'react-router';

import { EXCLUDED_ROUTES, PAGE_TITLES } from '~/constants';
import {
    AllCategories,
    BreadcrumbsItems,
    CategoriesByIds,
    LocationParams,
    NavigationConfig,
    RecipeProps,
    SubCategoriesByIds,
} from '~/types';

export const usePathnames = () => {
    const location = useLocation();
    const pathnames = location.pathname
        .split('/')
        .filter((x) => x)
        .map((e) => '/' + e);
    pathnames.unshift('/');

    return pathnames;
};

export const getHighlightedText = (
    text: string,
    highlight: string,
    textColor: string,
): React.ReactNode[] => {
    if (!highlight) return [text];
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={index} style={{ color: textColor }}>
                {part}
            </span>
        ) : (
            part
        ),
    );
};

export const searchByTitle = (reciepts: RecipeProps[], activeSearch: string) =>
    reciepts.filter((e) => e.title.toLowerCase().includes(activeSearch.toLowerCase()));

export const getLocallySavedNavigationConfig = () => {
    const saved = localStorage.getItem('navigationConfig');
    if (saved) {
        return JSON.parse(saved);
    }
    return {};
};

export const saveLocallyNavigationConfig = (config: NavigationConfig) => {
    if (!config.navigationTree.length) return;

    localStorage.setItem('navigationConfig', JSON.stringify(config));
};

export const populateRecieptCategory = (
    reciept: RecipeProps,
    categoriesIds: SubCategoriesByIds,
) => {
    const populatedCategories = reciept.categoriesIds.reduce(
        (acc, id) => {
            const category = categoriesIds[id];
            if (!category) return acc;

            if (!acc.some((item) => item.categoryTitle === category.categoryRu)) {
                acc.push({
                    categoryTitle: category.categoryRu,
                    categoryIconUrl: category.categoryIcon,
                    route: category.route,
                });
            }
            return acc;
        },
        [] as { categoryTitle: string; categoryIconUrl: string; route: string }[],
    );

    const populatedSubCategories = reciept.categoriesIds.map(
        (e) => categoriesIds[e]?.subcategoryRu,
    );

    return { ...reciept, category: populatedCategories, subcategory: populatedSubCategories };
};

export const getRandomCategory = (categories: CategoriesByIds, exceptId: string = '') => {
    if (!categories) return;

    const ids = Object.keys(categories).filter((id) => id !== exceptId);
    const randomCategoryId = ids[Math.floor(Math.random() * ids.length)];
    return categories[randomCategoryId];
};

export const categoryTitleSlicer = (category: AllCategories[] = []) =>
    category.map((e) => ({
        ...e,
        categoryRu:
            e.categoryRu === 'Десерты и выпечка'
                ? 'Десерты, выпечка'
                : e.categoryRu === 'Домашние заготовки'
                  ? 'Заготовки'
                  : e.categoryRu,
    }));

export const useCurrentLocation = (
    params: LocationParams,
    navigationConfig: NavigationConfig,
    recipe?: string,
) => {
    const { category, subcategory } = params;
    const { navigationTree } = navigationConfig;

    const {
        breadcrumbs,
        categoryRu,
        categoryDescription,
        apiQueryId,
        currentSubCategory,
        currentCategory,
    } = useMemo(() => {
        const crumbs: BreadcrumbsItems = {};

        if (category === EXCLUDED_ROUTES.juiciest) {
            crumbs.category = { label: PAGE_TITLES.juiciest, to: `/${EXCLUDED_ROUTES.juiciest}` };
        }

        const currentCategory = navigationTree.find((e) => e.categoryEn === category);
        const currentSubCategory = currentCategory?.subCategories?.find(
            (e) => e.subcategoryEn === subcategory,
        );
        const categoryRu = currentCategory?.categoryRu;
        const categoryDescription = currentCategory?.categoryDescription;
        const apiQueryId = currentSubCategory?.apiQueryId;

        if (category && currentCategory) {
            const { route: to, categoryRu } = currentCategory;
            crumbs.category = { label: categoryRu, to };
        }

        if (subcategory && currentSubCategory) {
            const { route: to, subcategoryRu } = currentSubCategory;
            crumbs.subcategory = { label: subcategoryRu, to };
        }

        if (recipe) {
            crumbs.recipe = { label: recipe };
        }

        return {
            breadcrumbs: crumbs,
            categoryRu,
            categoryDescription,
            apiQueryId,
            currentSubCategory,
            currentCategory,
        };
    }, [category, subcategory, navigationTree, recipe]);

    return {
        breadcrumbs,
        categoryRu,
        currentCategory,
        currentSubCategory,
        categoryDescription,
        apiQueryId,
    };
};
