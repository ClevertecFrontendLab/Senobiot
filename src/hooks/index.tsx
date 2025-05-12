import { useContext, useEffect, useState } from 'react';

import { BreadCrumbsContext } from '~/providers/BreadCrumbs/Context';
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
    const [markdownText, setMarkdownText] = useState<string | undefined>(undefined);

    useEffect(() => {
        if (searchString && isError) {
            setSearchResultState(SEARCH_STATE.ERROR);
            setMarkdownText(undefined);
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
            setMarkdownText(undefined);
        } else {
            setSearchResultState(undefined);
            setMarkdownText(undefined);
        }
    }, [searchString, categoryData, latestData, juiciestData, relevantData, isError]);

    return { searchResultState, markdownText };
};

export const useBreadCrumbs = () => {
    const context = useContext(BreadCrumbsContext);
    if (!context) {
        throw new Error('useBreadCrumbs должен использоваться внутри BreadCrumbsProvider');
    }
    return context;
};
