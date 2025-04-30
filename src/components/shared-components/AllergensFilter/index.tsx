import { Box, Flex, VStack } from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import {
    CheckBoxLime,
    SelectInnerTags,
    SelectOuterTags,
    TextInputCustom,
} from '~/components/shared-components';
import { SHADOWS } from '~/constants/styles';
import { filterByAllergens, resetRecieptsAllergens } from '~/redux/reducers';

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
    selectedAllergens: string[];
    setSelectedAllergens: CallableFunction;
    dataTestIdToggler?: string;
    dataTestCheckBoKeykey?: string;
    dataTestAllergenTag?: string;
}> = ({
    disabled,
    outerTags = false,
    selectedAllergens = [],
    setSelectedAllergens,
    dataTestIdToggler,
    dataTestCheckBoKeykey,
    dataTestAllergenTag,
}) => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const [newAllergen, setNewAllergen] = useState<string>('');
    const toggleDropdown = useCallback(() => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    }, []);

    const toggleAllergen = (allergen: string) => {
        const allergenValue = allergen.replace(/ .*/, '');
        let updatedSelectedAllergens: string[];

        if (selectedAllergens.includes(allergenValue)) {
            updatedSelectedAllergens = selectedAllergens.filter((item) => item !== allergenValue);
        } else {
            updatedSelectedAllergens = [...selectedAllergens, allergenValue];
        }

        setSelectedAllergens(updatedSelectedAllergens);
        dispatch(filterByAllergens(updatedSelectedAllergens));
    };

    const handleNewAllergenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewAllergen(e.target.value);
    };

    const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        dispatch(resetRecieptsAllergens());
        setSelectedAllergens([]);
    };

    const addNewAllergen = () => {
        const trimmed = newAllergen.trim();
        let updatedSelectedAllergens = selectedAllergens;

        if (trimmed && !selectedAllergens.includes(trimmed)) {
            updatedSelectedAllergens = [...selectedAllergens, trimmed];
            setSelectedAllergens(updatedSelectedAllergens);
            setNewAllergen('');
        }

        dispatch(filterByAllergens(updatedSelectedAllergens));
    };

    return (
        <Box
            as='button'
            width='100%'
            position='relative'
            userSelect={disabled ? 'none' : 'unset'}
            pointerEvents={disabled ? 'none' : 'auto'}
            data-test-id={dataTestIdToggler}
            aria-disabled={disabled}
            disabled={disabled}
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
                    dataTestAllergenTag={dataTestAllergenTag}
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
                                dataTestCheckBoKeykey={dataTestCheckBoKeykey}
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
