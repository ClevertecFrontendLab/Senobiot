import { useEffect, useState } from 'react';

import { RecipeProps, SEARCH_STATE } from '~/types';

type UseSearchStateParams = {
    searchString: string | undefined;
    latestRecipes?: RecipeProps[];
    juiciestRecipes?: RecipeProps[];
    isError: boolean;
};

export const useSearchState = ({
    searchString,
    latestRecipes,
    juiciestRecipes,
    isError,
}: UseSearchStateParams) => {
    const [searchResultState, setSearchResultState] = useState<SEARCH_STATE | undefined>(undefined);
    const [markdownText, setMarkdownText] = useState<string | undefined>(undefined);

    useEffect(() => {
        if (searchString && isError) {
            setSearchResultState(SEARCH_STATE.ERROR);
            setMarkdownText(undefined);
            return;
        }

        if ((latestRecipes?.length || juiciestRecipes?.length) && searchString) {
            setSearchResultState(SEARCH_STATE.SUCCESS);
            setMarkdownText(searchString);
        } else if (searchString) {
            setSearchResultState(SEARCH_STATE.EMPTY);
            setMarkdownText(undefined);
        } else {
            setSearchResultState(undefined);
            setMarkdownText(undefined);
        }
    }, [searchString, latestRecipes, juiciestRecipes, isError]);

    return { searchResultState, markdownText };
};
