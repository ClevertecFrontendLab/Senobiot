import { Flex, Image, Input } from '@chakra-ui/react';
import { ChangeEventHandler } from 'react';

const CustomAllergen: React.FC<{
    newAllergen: string;
    handleNewAllergenChange: ChangeEventHandler<HTMLInputElement>;
    addNewAllergen: (
        e: React.MouseEvent<HTMLImageElement> | React.KeyboardEvent<HTMLInputElement>,
    ) => void;
}> = ({ newAllergen, handleNewAllergenChange, addNewAllergen }) => (
    <Flex pt={2} pb={3} pl={6} alignItems='center'>
        <Input
            data-test-id='add-other-allergen'
            placeholder='Другой аллерген'
            value={newAllergen}
            onChange={handleNewAllergenChange}
            onKeyDown={(e) => e.key === 'Enter' && addNewAllergen(e)}
            mr={2}
        />
        <Image
            data-test-id='add-allergen-button'
            onClick={addNewAllergen}
            cursor='pointer'
            mx={3.5}
            src='/icons/allergen-plus.svg'
        />
    </Flex>
);

export default CustomAllergen;
