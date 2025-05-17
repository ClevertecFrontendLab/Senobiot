import { useEffect, useState } from 'react';

import { RecipeProps, SEARCH_STATE } from '~/types';

type UseSearchStateParams = {
    searchString: string | undefined;
    categoryData?: RecipeProps[];
    latestData?: RecipeProps[];
    juiciestData?: RecipeProps[];
    relevantData?: RecipeProps[];
    isError: boolean;
};

export const useSearchState = ({
    searchString,
    categoryData,
    latestData,
    juiciestData,
    relevantData,
    isError,
}: UseSearchStateParams) => {
    const [searchResultState, setSearchResultState] = useState<SEARCH_STATE | undefined>(undefined);
    const [markdownText, setMarkdownText] = useState<string>('');

    useEffect(() => {
        if (searchString && isError) {
            setSearchResultState(SEARCH_STATE.ERROR);
            setMarkdownText('');
            return;
        }

        if (
            (categoryData?.length ||
                latestData?.length ||
                juiciestData?.length ||
                relevantData?.length) &&
            searchString
        ) {
            setSearchResultState(SEARCH_STATE.SUCCESS);
            setMarkdownText(searchString);
        } else if (searchString) {
            setSearchResultState(SEARCH_STATE.EMPTY);
            setMarkdownText('');
        } else {
            setSearchResultState(undefined);
            setMarkdownText('');
        }
    }, [searchString, categoryData, latestData, juiciestData, relevantData, isError]);

    return { searchResultState, markdownText };
};
