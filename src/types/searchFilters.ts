import { MouseEventHandler } from 'react';

export type AllergensFilterProps = {
    disabled: boolean;
    outerTags?: boolean;
    dataTestIdToggler?: string;
    dataTestCheckBoKeykey?: string;
    dataTestAllergenTag?: string;
};

export type ComposeFiltersPayloadType = {
    category?: string[];
    author?: string[];
    meat?: string[];
    side?: string[];
};

export type Filters = {
    allergens?: string[];
    searchString?: string;
    meat?: string;
    garnish?: string;
    subcategoriesIds?: string;
};

export type FilterTagProps = {
    item: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    testId?: boolean;
};

export enum SEARCH_STATE {
    SUCCESS = 'success',
    EMPTY = 'empty',
    ERROR = 'error-search',
}

export type SearchInputProps = {
    onSearch: (searchText: string) => void;
};

export type SearchBarProps = {
    pageTitle: string;
    isLoading: boolean;
    pageDescription?: string;
    searchResultState?: SEARCH_STATE;
};
