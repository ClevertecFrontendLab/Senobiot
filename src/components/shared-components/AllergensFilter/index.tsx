import { Box, Flex, VStack } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    CheckBoxLime,
    SelectInnerTags,
    SelectOuterTags,
    TextInputCustom,
} from '~/components/shared-components';
import { SHADOWS } from '~/constants/styles';
import { filtrateReciepts, resetRecieptFilters } from '~/reducers';
import { getAllReciepts } from '~/selectors';

const predefinedAllergens: string[] = [
    'Молочные продукты',
    'Яйцо',
    'Рыба',
    'Моллюски',
    'Орехи',
    'Томат (помидор)',
    'Цитрусовые',
    'Клубника (ягоды)',
    'Шоколад',
];

export const AllergensFilter: React.FC<{
    disabled: boolean;
    outerTags?: boolean;
}> = ({ disabled, outerTags = false }) => {
    const dispatch = useDispatch();
    const allRecipes = useSelector(getAllReciepts);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedAllergens, setSelectedAllergens] = useState<string[]>([]);
    const [newAllergen, setNewAllergen] = useState<string>('');

    const toggleDropdown = useCallback(() => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    }, []);

    const toggleAllergen = (allergen: string) => {
        const allergenValue = allergen.replace(/ .*/, '');
        if (selectedAllergens.includes(allergenValue)) {
            setSelectedAllergens(selectedAllergens.filter((item) => item !== allergenValue));
        } else {
            setSelectedAllergens([...selectedAllergens, allergenValue]);
        }
    };

    const handleNewAllergenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewAllergen(e.target.value);
    };

    const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        dispatch(resetRecieptFilters());
        setSelectedAllergens([]);
    };

    const addNewAllergen = () => {
        const trimmed = newAllergen.trim();
        if (trimmed && !selectedAllergens.includes(trimmed)) {
            setSelectedAllergens([...selectedAllergens, trimmed]);
            setNewAllergen('');
        }
    };

    useEffect(() => {
        const filteredRecipes = allRecipes.filter(
            (recipe) =>
                !recipe.ingredients.some((ingredient) =>
                    selectedAllergens.some((allergen) =>
                        ingredient.title.toLowerCase().includes(allergen.toLowerCase()),
                    ),
                ),
        );

        dispatch(filtrateReciepts(filteredRecipes));
    }, [selectedAllergens, allRecipes, dispatch]);

    useEffect(() => {
        if (disabled && selectedAllergens.length) {
            dispatch(resetRecieptFilters());
            setSelectedAllergens([]);
            if (isOpen) {
                toggleDropdown();
            }
        }
    }, [disabled, selectedAllergens.length, dispatch, isOpen, toggleDropdown]);

    return (
        <Box
            // as='button'
            width='100%'
            position='relative'
            userSelect={disabled ? 'none' : 'unset'}
            pointerEvents={disabled ? 'none' : 'auto'}
            data-test-id='allergens-menu-button'
            aria-disabled={disabled}
            // disabled={disabled}
            textAlign='left'
        >
            {outerTags ? (
                <SelectOuterTags
                    options={selectedAllergens}
                    toggleDropdown={toggleDropdown}
                    isOpen={isOpen}
                    onReset={handleReset}
                    noTagCloseButton={true}
                />
            ) : (
                <SelectInnerTags
                    options={selectedAllergens}
                    toggleDropdown={toggleDropdown}
                    isOpen={isOpen}
                    onReset={handleReset}
                    noTagCloseButton={true}
                />
            )}
            {isOpen && (
                <Box
                    data-test-id='allergens-menu'
                    mt={2}
                    borderRadius='4px'
                    bg='white'
                    boxShadow={SHADOWS.allergensMenu}
                    zIndex={10}
                    position='absolute'
                    width='100%'
                >
                    <VStack align='start'>
                        {predefinedAllergens.map((allergen, index) => (
                            <CheckBoxLime
                                key={index}
                                index={index}
                                item={allergen}
                                isChecked={selectedAllergens.includes(allergen.replace(/ .*/, ''))}
                                toggleItem={toggleAllergen}
                                dataTestIds={index}
                                dataTestkey='allergen-'
                            />
                        ))}
                    </VStack>
                    <Flex pt={2} pb={3} pl={6} alignItems='center'>
                        <TextInputCustom
                            item={newAllergen}
                            itemChange={handleNewAllergenChange}
                            addItem={addNewAllergen}
                            dataTestButtonId='add-allergen-button'
                            dataTestInputId='add-other-allergen'
                        />
                    </Flex>
                </Box>
            )}
        </Box>
    );
};
