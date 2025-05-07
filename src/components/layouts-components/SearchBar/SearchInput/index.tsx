import { SearchIcon } from '@chakra-ui/icons';
import {
    Button,
    IconButton,
    Image,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
} from '@chakra-ui/react';
import { ChangeEvent } from 'react';

import { PLACEHOLDERS, TEST_IDS } from '~/constants';
import { SEARCH_STATE } from '~/types';

import * as styles from './SearchInput.styles';

type SearchInputProps = {
    inputValue: string;
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onSearch: () => void;
    onReset: () => void;
    onOpenFilters: () => void;
    searchResultState: SEARCH_STATE | undefined;
    isEnabled: boolean | undefined;
};

export const SearchInput: React.FC<SearchInputProps> = ({
    inputValue,
    onInputChange,
    onKeyDown,
    onSearch,
    onReset,
    onOpenFilters,
    searchResultState,
    isEnabled = false,
}) => (
    <InputGroup display='flex' alignItems='center'>
        <InputLeftElement sx={styles.filterButtonWrapper}>
            <IconButton
                data-test-id={TEST_IDS.filtersOpenButton}
                onClick={onOpenFilters}
                icon={<Image src='/icons/filter.svg' alt='filter' sx={styles.icon} />}
                aria-label='Filter'
                sx={styles.filterButton}
            />
        </InputLeftElement>
        <Input
            data-test-id={TEST_IDS.searchInput}
            value={inputValue}
            onChange={onInputChange}
            onKeyDown={onKeyDown}
            sx={styles.getInputStyles(searchResultState)}
            placeholder={PLACEHOLDERS.search}
        />
        <InputRightElement display='flex'>
            <IconButton
                data-test-id={TEST_IDS.searchButton}
                onClick={onSearch}
                icon={<SearchIcon sx={styles.icon} />}
                aria-label='Search'
                sx={styles.getSearchButtonStyles(isEnabled)}
            />
            {inputValue && (
                <Button onClick={onReset} sx={styles.resetButton}>
                    ✕
                </Button>
            )}
        </InputRightElement>
    </InputGroup>
);
