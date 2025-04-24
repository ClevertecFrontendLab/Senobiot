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
    VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    AllergensFilter,
    CheckBoxLime,
    SelectRegular,
    SwitchToggler,
} from '~/components/shared-components';
import { BORDERS, SHADOWS } from '~/constants/styles';
import { useDrawer } from '~/providers/DrawerFilters/useDrawer';
import { applyFilters, resetRecieptFilters } from '~/reducers';
import { getCategories, getMeats, getSides } from '~/selectors';
import { ComposeFiltersPayloadType } from '~/types';

import FilterTag from './FilterTag';
import FilterTitle from './FilterTitle';

export const RecipeFilter: React.FC = () => {
    const dispatch = useDispatch();
    const meats = useSelector(getMeats);
    const sides = useSelector(getSides);
    const categoriesMap = useSelector(getCategories);
    const categories = Object.keys(categoriesMap);

    const authors = ['Сергей Разумов'];

    const { isOpen, closeDrawer } = useDrawer();

    const [isCategoryOpen, setIsCategoryOpen] = useState(false); // Возможно стоит декомпозировать всё
    const [isAuthorsOpen, setIsAuthorsOpen] = useState(false);

    const [selectedMeats, setSelectedMeats] = useState<string[]>([]);
    const [selectedSides, setSelectedSides] = useState<string[]>([]);
    const [selectedAllergens, setSelectedAllergens] = useState<string[]>([]);
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

    const resetCategories = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setSelectedCategories([]);
    };

    const resetAuthors = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setSelectedAuthors([]);
    };

    const searchReciepts = () => {
        const categoryKeys = selectedCategories.map((e) => categoriesMap[e]);

        const appliedFilters: ComposeFiltersPayloadType = {
            category: categoryKeys,
            author: selectedAuthors,
            meat: selectedMeats,
            side: selectedSides,
        };

        dispatch(applyFilters(appliedFilters));
        closeDrawer();
    };

    const clearFilters = () => {
        setSelectedAuthors([]);
        setSelectedCategories([]);
        setSelectedMeats([]);
        setSelectedSides([]);
        setSelectedAllergens([]);
        setIsExcludeAllergens(false);
        dispatch(resetRecieptFilters());
        if (isCategoryOpen) {
            toggleCategoriesDropdown();
        }
        if (isAuthorsOpen) {
            toggleAuthorsDropdown();
        }
    };

    return (
        <Drawer isOpen={isOpen} placement='right' onClose={closeDrawer}>
            <DrawerOverlay />
            <DrawerContent
                minW={{ base: 344, xl: 463 }}
                p={{ base: 4, xl: 8 }}
                pr={{ base: 1.5, xl: 2 }}
            >
                <DrawerCloseButton />
                <DrawerHeader>Фильтр</DrawerHeader>
                <DrawerBody
                    width='100%'
                    display='flex'
                    flexDirection='column'
                    justifyContent='space-between'
                    p={0}
                    h='100%'
                >
                    <VStack w='100%' gap={4} pr={{ base: 2.5 }}>
                        {/* Категория */}
                        <VStack w='100%'>
                            <SelectRegular
                                noResetButton={!selectedCategories.length}
                                placeholder='Категория'
                                isOpen={isCategoryOpen}
                                toggleDropdown={toggleCategoriesDropdown}
                                onReset={resetCategories}
                            />
                            {isCategoryOpen && (
                                <VStack
                                    align='start'
                                    w='100%'
                                    borderRadius='4px'
                                    boxShadow={SHADOWS.allergensMenu}
                                    border={BORDERS.light}
                                >
                                    {categories.map((category, index) => (
                                        <CheckBoxLime
                                            key={index}
                                            index={index}
                                            item={category}
                                            isChecked={selectedCategories.includes(category)}
                                            toggleItem={toggleCategorySelection}
                                            // dataTestIds={index}
                                            // dataTestkey='allergen-'
                                        />
                                    ))}
                                </VStack>
                            )}
                        </VStack>

                        {/* Авторы */}
                        <VStack w='100%'>
                            <SelectRegular
                                noResetButton={!selectedAuthors.length}
                                placeholder='Поиск по автору'
                                isOpen={isAuthorsOpen}
                                toggleDropdown={toggleAuthorsDropdown}
                                onReset={resetAuthors}
                            />
                            {isAuthorsOpen && (
                                <VStack w='100%' align='start'>
                                    {authors.map((author, index) => (
                                        <CheckBoxLime
                                            key={index}
                                            index={index}
                                            item={author}
                                            isChecked={selectedAuthors.includes(author)}
                                            toggleItem={toggleAuthorSelection}
                                            // dataTestIds={index}
                                            // dataTestkey='allergen-'
                                        />
                                    ))}
                                </VStack>
                            )}
                        </VStack>

                        {/* meat */}
                        <Box mt={4}>
                            <FilterTitle title='Тип мяса' />
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

                        {/* side */}
                        <Box mt={4} w='100%'>
                            <FilterTitle title='Тип гарнира' />
                            {sides.map((side, index) => (
                                <CheckBoxLime
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

                        {/* Allergens */}
                        <Box w='100%'>
                            <Flex
                                w='100%'
                                alignItems='center'
                                // justifyContent='space-between'
                                // display={{ base: 'none', xl: 'flex' }}
                                wrap='wrap'
                                gap={2}
                            >
                                <SwitchToggler
                                    text=' Исключить аллергены'
                                    onChange={() => setIsExcludeAllergens(!isExcludeAllergens)}
                                    isChecked={isExcludeAllergens}
                                />
                                <AllergensFilter
                                    selectedAllergens={selectedAllergens}
                                    setSelectedAllergens={setSelectedAllergens}
                                    disabled={!isExcludeAllergens}
                                />
                            </Flex>
                        </Box>
                    </VStack>
                    <HStack w='100%' wrap='wrap'>
                        {selectedCategories.map((category, index) => (
                            <FilterTag
                                key={index}
                                item={category}
                                onClick={() => toggleCategorySelection(category)}
                            />
                        ))}
                        {selectedAuthors.map((author, index) => (
                            <FilterTag
                                key={index}
                                item={author}
                                onClick={() => toggleAuthorSelection(author)}
                            />
                        ))}
                        {selectedMeats.map((meat, index) => (
                            <FilterTag
                                key={index}
                                item={meat}
                                onClick={() => toggleMeatSelection(meat)}
                            />
                        ))}
                        {selectedSides.map((side, index) => (
                            <FilterTag
                                key={index}
                                item={side}
                                onClick={() => toggleSideSelection(side)}
                            />
                        ))}
                    </HStack>
                </DrawerBody>
                <DrawerFooter display='flex' p='32px 14px 0 0' w='100%'>
                    <Button
                        variant='outline'
                        mr={2}
                        onClick={clearFilters}
                        px={6}
                        border={BORDERS.main}
                    >
                        Очистить фильтр
                    </Button>
                    <Button
                        isDisabled={
                            !selectedCategories.length &&
                            !selectedAuthors.length &&
                            !selectedMeats.length &&
                            !selectedSides.length
                        }
                        bg='#000'
                        color='#fff'
                        onClick={searchReciepts}
                        px={6}
                        _hover={{ bg: '#000' }}
                    >
                        Найти рецепты
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};
