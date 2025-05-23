import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    HStack,
    Image,
    VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import {
    AllergensFilter,
    CheckBoxLime,
    SelectInnerTags,
    SelectRegular,
    SwitchToggler,
} from '~/components/shared-components';
import { BASE_URL, BUTTONS_TEXT, PLACEHOLDERS, TEST_IDS, TITLES } from '~/constants';
import { useFilters } from '~/providers/Filters/useFilters';
import { getCategories, getMeats, getSides } from '~/redux/selectors';

import * as styles from './Filter.styles';
import FilterTag from './FilterTag';
import FilterTitle from './FilterTitle';

export const RecipeFilter: React.FC = () => {
    const meats = useSelector(getMeats);
    const sidesMap = useSelector(getSides);
    const categoriesMap = useSelector(getCategories);
    const categories = Object.keys(categoriesMap);
    const sides = Object.keys(sidesMap);

    const authors = ['Сергей Разумов'];

    const { isOpen, closeFilters, setFilters, filters } = useFilters();

    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isAuthorsOpen, setIsAuthorsOpen] = useState(false);

    const [selectedMeats, setSelectedMeats] = useState<string[]>([]);
    const [selectedSides, setSelectedSides] = useState<string[]>([]);
    const [isExcludeAllergens, setIsExcludeAllergens] = useState(false);

    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedAuthors, setSelectedAuthors] = useState<string[]>([]);

    const toggleCategoriesDropdown = () => setIsCategoryOpen(!isCategoryOpen);
    const toggleAuthorsDropdown = () => setIsAuthorsOpen(!isAuthorsOpen);

    const toggleCategorySelection = (category: string) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((item) => item !== category)
                : [...prev, category],
        );
    };

    const toggleAuthorSelection = (category: string) => {
        setSelectedAuthors((prev) =>
            prev.includes(category)
                ? prev.filter((item) => item !== category)
                : [...prev, category],
        );
    };

    const toggleMeatSelection = (meat: string) => {
        setSelectedMeats((prev) =>
            prev.includes(meat) ? prev.filter((item) => item !== meat) : [...prev, meat],
        );
    };

    const toggleSideSelection = (side: string) => {
        setSelectedSides((prev) =>
            prev.includes(side) ? prev.filter((item) => item !== side) : [...prev, side],
        );
    };

    const toggleAllergensSelection = (allergen: string) => {
        setFilters({ ...filters, allergens: filters.allergens?.filter((e) => e !== allergen) });
    };

    const resetCategories = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setSelectedCategories([]);
    };

    const resetAuthors = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setSelectedAuthors([]);
    };

    const searchReciepts = () => {
        const sideKeys = selectedSides.map((e) => sidesMap[e]);

        setFilters({
            ...filters,
            meat: selectedMeats.join(','),
            garnish: sideKeys.join(','),
        });

        setSelectedCategories([]);
        closeFilters();
    };

    const clearFilters = () => {
        setFilters({});
        setSelectedAuthors([]);
        setSelectedCategories([]);
        setSelectedMeats([]);
        setSelectedSides([]);
        setIsExcludeAllergens(false);

        if (isCategoryOpen) {
            toggleCategoriesDropdown();
        }
        if (isAuthorsOpen) {
            toggleAuthorsDropdown();
        }
    };

    return (
        <Drawer isOpen={isOpen} placement='right' onClose={closeFilters}>
            <DrawerOverlay />
            <DrawerContent data-test-id={TEST_IDS.filters} sx={styles.content}>
                <DrawerCloseButton
                    data-test-id={TEST_IDS.filtersCloseButton}
                    sx={styles.closeButton}
                >
                    <Image src={`${BASE_URL}assets/images/icons/close-filter-icon.svg`}></Image>
                </DrawerCloseButton>
                <DrawerHeader sx={styles.header}>Фильтр</DrawerHeader>
                <DrawerBody sx={styles.body}>
                    <VStack sx={styles.filtersWrapper}>
                        <VStack w='100%' position='relative'>
                            <SelectInnerTags
                                dataTestId={TEST_IDS.filtersCategoryInput}
                                options={selectedCategories}
                                toggleDropdown={toggleCategoriesDropdown}
                                isOpen={isCategoryOpen}
                                onReset={resetCategories}
                                noTagCloseButton={true}
                                placeholder={PLACEHOLDERS.filters.category}
                                noResetButton={!selectedCategories.length}
                            />
                            {isCategoryOpen && (
                                <VStack sx={styles.multiCheckBoxWrapper}>
                                    {categories.map((category, index) => (
                                        <CheckBoxLime
                                            dataTestCatagory={`checkbox-${category.toLowerCase()}`}
                                            key={index}
                                            index={index}
                                            item={category}
                                            isChecked={selectedCategories.includes(category)}
                                            toggleItem={toggleCategorySelection}
                                        />
                                    ))}
                                </VStack>
                            )}
                        </VStack>
                        <VStack w='100%'>
                            <SelectRegular
                                noResetButton={!selectedAuthors.length}
                                placeholder={PLACEHOLDERS.filters.author}
                                isOpen={isAuthorsOpen}
                                toggleDropdown={toggleAuthorsDropdown}
                                onReset={resetAuthors}
                            />
                            {isAuthorsOpen && (
                                <VStack sx={styles.multiCheckBoxWrapper}>
                                    {authors.map((author, index) => (
                                        <CheckBoxLime
                                            key={index}
                                            index={index}
                                            item={author}
                                            isChecked={selectedAuthors.includes(author)}
                                            toggleItem={toggleAuthorSelection}
                                        />
                                    ))}
                                </VStack>
                            )}
                        </VStack>
                        <Box mt={4} w='100%'>
                            <FilterTitle title={TITLES.filters.meat} />
                            {meats.map((meat, index) => (
                                <CheckBoxLime
                                    labelColor='#000'
                                    px={0}
                                    key={index}
                                    index={0}
                                    item={meat}
                                    isChecked={selectedMeats.includes(meat)}
                                    toggleItem={toggleMeatSelection}
                                />
                            ))}
                        </Box>
                        <Box mt={4} w='100%'>
                            <FilterTitle title={TITLES.filters.garnish} />
                            {sides.map((side, index) => (
                                <CheckBoxLime
                                    dataTestCatagory={`checkbox-${side.toLowerCase()}`}
                                    labelColor='#000'
                                    px={0}
                                    key={index}
                                    index={0}
                                    item={side}
                                    isChecked={selectedSides.includes(side)}
                                    toggleItem={() => toggleSideSelection(side)}
                                />
                            ))}
                        </Box>
                        <Box w='100%'>
                            <Flex sx={styles.allergensWrapper}>
                                <SwitchToggler
                                    dataTestId='allergens-switcher-filter'
                                    text={TITLES.filters.exludeAllergens}
                                    onChange={() => setIsExcludeAllergens(!isExcludeAllergens)}
                                    isChecked={isExcludeAllergens}
                                />
                                <AllergensFilter
                                    dataTestCheckBoKeykey='allergen-'
                                    dataTestIdToggler='allergens-menu-button-filter'
                                    disabled={!isExcludeAllergens}
                                />
                            </Flex>
                        </Box>
                    </VStack>
                    <HStack w='100%' wrap='wrap'>
                        {selectedCategories.map((category, index) => (
                            <FilterTag
                                testId={true}
                                key={index}
                                item={category}
                                onClick={() => toggleCategorySelection(category)}
                            />
                        ))}
                        {selectedAuthors.map((author, index) => (
                            <FilterTag
                                testId={true}
                                key={index}
                                item={author}
                                onClick={() => toggleAuthorSelection(author)}
                            />
                        ))}
                        {selectedMeats.map((meat, index) => (
                            <FilterTag
                                testId={true}
                                key={index}
                                item={meat}
                                onClick={() => toggleMeatSelection(meat)}
                            />
                        ))}
                        {selectedSides.map((side, index) => (
                            <FilterTag
                                testId={true}
                                key={index}
                                item={side}
                                onClick={() => toggleSideSelection(side)}
                            />
                        ))}
                        {filters.allergens?.map((allergen, index) => (
                            <FilterTag
                                testId={true}
                                key={index}
                                item={allergen}
                                onClick={() => toggleAllergensSelection(allergen)}
                            />
                        ))}
                    </HStack>
                </DrawerBody>
                <DrawerFooter sx={styles.footer}>
                    <Button
                        data-test-id={TEST_IDS.filtersClearButton}
                        onClick={clearFilters}
                        sx={styles.clearButton}
                    >
                        {BUTTONS_TEXT.filters.clear}
                    </Button>
                    <Button
                        data-test-id={TEST_IDS.filtersFindButton}
                        onClick={searchReciepts}
                        pointerEvents={
                            selectedCategories.length ||
                            selectedAuthors.length ||
                            selectedMeats.length ||
                            selectedSides.length
                                ? 'unset'
                                : 'none'
                        }
                        isDisabled={
                            !selectedCategories.length &&
                            !selectedAuthors.length &&
                            !selectedMeats.length &&
                            !selectedSides.length
                        }
                        sx={styles.applyButton}
                    >
                        {BUTTONS_TEXT.filters.apply}
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};
