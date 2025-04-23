import { Box, Flex, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SHADOWS } from '~/constants/styles';
import { filtrateReciepts, resetRecieptFilters } from '~/reducers';
import { getAllReciepts } from '~/selectors';

import AllergenCheckBox from './CheckBox';
import CustomAllergen from './CustomAllergenAddField';
import SelectableBox from './SelectableBox';

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
        if (selectedAllergens.includes(allergen)) {
            setSelectedAllergens(selectedAllergens.filter((item) => item !== allergen));
        } else {
            setSelectedAllergens([...selectedAllergens, allergen]);
        }
    };

    const handleNewAllergenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewAllergen(e.target.value);
    };

    const handleReset = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
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
            width='100%'
            position='relative'
            userSelect={disabled ? 'none' : 'unset'}
            pointerEvents={disabled ? 'none' : 'auto'}
        >
            <SelectableBox
                onReset={handleReset}
                selectedAllergens={selectedAllergens}
                toggleDropdown={toggleDropdown}
                isOpen={isOpen}
            />
            {isOpen && (
                <Box
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
                            <AllergenCheckBox
                                key={index}
                                index={index}
                                allergen={allergen}
                                isChecked={selectedAllergens.includes(allergen)}
                                toggleAllergen={toggleAllergen}
                            />
                        ))}
                    </VStack>
                    <Flex pt={2} pb={3} pl={6} alignItems='center'>
                        <CustomAllergen
                            newAllergen={newAllergen}
                            handleNewAllergenChange={handleNewAllergenChange}
                            addNewAllergen={addNewAllergen}
                        />
                    </Flex>
                </Box>
            )}
        </Box>
    );
};

export default AllergensFilter;
