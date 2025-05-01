import { useLocation } from 'react-router';

import { NavigationReducerProps } from '~/redux';
import { RecipeProps, SubCategoriesByIds } from '~/types';

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

export const saveLocallyNavigationConfig = (config: NavigationReducerProps) => {
    if (!config.navigationTree.length) return;

    localStorage.setItem('navigationConfig', JSON.stringify(config));
};

export const populateRecieptCategory = (
    reciept: RecipeProps,
    categoriesIds: SubCategoriesByIds,
) => {
    const populatedCategories = reciept.categoriesIds
        .map((e) => ({
            categoryTitle: categoriesIds[e].categoryRu,
            categoryIconUrl: categoriesIds[e].categoryIcon,
        }))
        .filter(
            (obj, index, array) =>
                array.findIndex((item) => item.categoryTitle === obj.categoryTitle) === index,
        );
    const populatedSubCategories = reciept.categoriesIds.map((e) => categoriesIds[e].subcategoryRu);

    return { ...reciept, category: populatedCategories, subcategory: populatedSubCategories };
};
