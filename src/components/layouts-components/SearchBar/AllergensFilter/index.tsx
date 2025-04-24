import { Box, Flex, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CheckBoxLime, SelectLime, TextInputCustom } from '~/components/shared-components';
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

const AllergensFilter: React.FC<{ disabled: boolean }> = ({ disabled }) => {
    const dispatch = useDispatch();
    const allRecipes = useSelector(getAllReciepts);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedAllergens, setSelectedAllergens] = useState<string[]>([
        // 'Рыба',
        // 'Клубника (ягоды)',
    ]);
    const [newAllergen, setNewAllergen] = useState<string>('');

    const toggleDropdown = () => setIsOpen(!isOpen);

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

    return (
        <Box
            as='button'
            width='100%'
            position='relative'
            userSelect={disabled ? 'none' : 'unset'}
            pointerEvents={disabled ? 'none' : 'auto'}
            data-test-id='allergens-menu-button'
            aria-disabled={disabled}
            disabled={disabled}
            textAlign='left'
        >
            <SelectLime
                options={selectedAllergens}
                toggleDropdown={toggleDropdown}
                isOpen={isOpen}
                onReset={handleReset}
                noTagCloseButton={true}
            />
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

export default AllergensFilter;
