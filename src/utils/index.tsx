import { useLocation } from 'react-router';

import { RecipeProps } from '~/types';

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
