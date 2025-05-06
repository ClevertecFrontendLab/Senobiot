import { Box, Flex, VStack } from '@chakra-ui/react';
import { useCallback, useState } from 'react';

import {
    CheckBoxLime,
    SelectInnerTags,
    SelectOuterTags,
    TextInputCustom,
} from '~/components/shared-components';
import { TEST_IDS } from '~/constants';
import { SHADOWS } from '~/constants/styles';
import { useFilters } from '~/providers/Filters/useFilters';

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
    dataTestIdToggler?: string;
    dataTestCheckBoKeykey?: string;
    dataTestAllergenTag?: string;
}> = ({
    disabled,
    outerTags = false,
    dataTestIdToggler,
    dataTestCheckBoKeykey,
    dataTestAllergenTag,
}) => {
    const { filters, setFilters } = useFilters();
    const [isOpen, setIsOpen] = useState(false);
    const [newAllergen, setNewAllergen] = useState<string>('');
    const toggleDropdown = useCallback(() => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    }, []);

    const toggleAllergen = (allergen: string) => {
        const allergenValue = allergen.replace(/ .*/, '');
        let updatedSelectedAllergens: string[];

        if (filters.allergens && filters.allergens.includes(allergenValue)) {
            updatedSelectedAllergens = filters.allergens.filter((item) => item !== allergenValue);
        } else {
            updatedSelectedAllergens = [...(filters.allergens || []), allergenValue];
        }

        setFilters({ ...filters, allergens: updatedSelectedAllergens });
    };

    // const toggleAllergen = (allergen: string) => {
    //     const allergenValue = allergen.replace(/ .*/, '');
    //     let updatedSelectedAllergens: string[] = [];
    //     console.log(`allergenValue ${allergenValue}`);
    //     if (filters.allergens) {
    //         if (filters.allergens?.includes(allergenValue)) {
    //             updatedSelectedAllergens = filters.allergens?.filter(
    //                 (item) => item !== allergenValue,
    //             );
    //         }
    //     } else {
    //         updatedSelectedAllergens = [allergenValue];
    //     }

    //     setFilters({ ...filters, allergens: updatedSelectedAllergens });
    //     console.log(filters);
    // };

    const handleNewAllergenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewAllergen(e.target.value);
    };

    const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setFilters({ ...filters, allergens: [] });
    };

    const addNewAllergen = () => {
        const trimmed = newAllergen.trim();

        if (!trimmed) return;

        let updatedSelectedAllergens = filters.allergens;
        const currentAllergens = filters.allergens;
        if (currentAllergens) {
            if (!currentAllergens.includes(trimmed)) {
                updatedSelectedAllergens = [...currentAllergens, trimmed];
                setFilters({ ...filters, allergens: updatedSelectedAllergens });
                setNewAllergen('');
            }
        } else {
            setFilters({ ...filters, allergens: [trimmed] });
            setNewAllergen('');
        }
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
                    options={filters.allergens || []}
                    toggleDropdown={toggleDropdown}
                    isOpen={isOpen}
                    onReset={handleReset}
                    noTagCloseButton={true}
                />
            ) : (
                <SelectInnerTags
                    dataTestAllergenTag={dataTestAllergenTag}
                    options={filters.allergens}
                    toggleDropdown={toggleDropdown}
                    isOpen={isOpen}
                    onReset={handleReset}
                    noTagCloseButton={true}
                />
            )}
            {isOpen && !disabled && (
                <Box
                    data-test-id={TEST_IDS.allergens}
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
                                isChecked={
                                    filters.allergens?.includes(allergen.replace(/ .*/, '')) ||
                                    false
                                }
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
