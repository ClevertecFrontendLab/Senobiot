import { useLocation } from 'react-router';

import { CategoriesByIds, NavigationConfig, RecipeProps, SubCategoriesByIds } from '~/types';

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
    return saved;
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
    const ids = Object.keys(categories).filter((id) => id !== exceptId);
    const randomCategoryId = ids[Math.floor(Math.random() * ids.length)];
    return categories[randomCategoryId];
};
