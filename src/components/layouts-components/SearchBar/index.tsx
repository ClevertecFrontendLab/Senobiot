import { Flex, useBreakpointValue } from '@chakra-ui/react';
import React, { ChangeEvent, useCallback, useMemo, useState } from 'react';

import { AllergensFilter, SwitchToggler } from '~/components/shared-components';
import { TEST_IDS, TITLES } from '~/constants';
import { useFilters } from '~/providers/Filters/useFilters';
import { SearchBarProps } from '~/types';

import { SearchLoader } from '../Loader';
import { HeaderSection } from './Header';
import * as styles from './SearchBar.styles';
import { SearchInput } from './SearchInput';

export const SearchBar: React.FC<SearchBarProps> = ({
    pageTitle,
    pageDescription,
    isLoading = false,
    searchResultState,
}) => {
    const { filters, openFilters, setFilters } = useFilters();
    const [isExcludeAllergens, setIsExcludeAllergens] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const isAllergensTogglerVisible = useBreakpointValue({ base: false, xl: true });

    const handleExcludeAllergens = () => {
        if (isExcludeAllergens) {
            if (filters.allergens?.length) {
                setFilters({ ...filters, allergens: [] });
            }
            return setIsExcludeAllergens(false);
        }
        setIsExcludeAllergens(true);
    };

    const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }, []);

    const isEnabled = useMemo(
        () => inputValue.trim().length >= 3 || !!filters.allergens?.length,
        [inputValue, filters.allergens],
    );

    const handleSearch = () => {
        if (isEnabled) {
            setFilters({ ...filters, searchString: inputValue });
        }
    };

    const handleReset = () => {
        setFilters({ ...filters, searchString: '' });
        setInputValue('');
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (isEnabled && e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <Flex sx={styles.wrapper}>
            <HeaderSection title={pageTitle} description={pageDescription} />
            {!isLoading ? (
                <Flex sx={styles.inputWrapper}>
                    <SearchInput
                        inputValue={inputValue}
                        onInputChange={handleInputChange}
                        onKeyDown={handleKeyPress}
                        onSearch={handleSearch}
                        onReset={handleReset}
                        onOpenFilters={openFilters}
                        searchResultState={searchResultState}
                        isEnabled={isEnabled}
                    />
                    {isAllergensTogglerVisible && (
                        <Flex sx={styles.allergensWrapper}>
                            <SwitchToggler
                                text={TITLES.filters.exludeAllergens}
                                onChange={handleExcludeAllergens}
                                isChecked={isExcludeAllergens}
                                dataTestId={TEST_IDS.allergensSwitcher}
                            />
                            <AllergensFilter
                                dataTestCheckBoKeykey='allergen-'
                                dataTestIdToggler={TEST_IDS.allergensInputToggler}
                                disabled={!isExcludeAllergens}
                            />
                        </Flex>
                    )}
                </Flex>
            ) : (
                <SearchLoader />
            )}
        </Flex>
    );
};
