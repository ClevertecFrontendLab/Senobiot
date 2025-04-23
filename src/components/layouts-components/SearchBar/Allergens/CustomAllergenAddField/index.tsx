import { Flex, Image, Input } from '@chakra-ui/react';
import { ChangeEventHandler, MouseEventHandler } from 'react';

const CustomAllergen: React.FC<{
    newAllergen: string;
    handleNewAllergenChange: ChangeEventHandler<HTMLInputElement>;
    addNewAllergen: MouseEventHandler<HTMLImageElement>;
}> = ({ newAllergen, handleNewAllergenChange, addNewAllergen }) => (
    <Flex pt={2} pb={3} pl={6} alignItems='center'>
        <Input
            placeholder='Добавьте аллерген'
            value={newAllergen}
            onChange={handleNewAllergenChange}
            mr={2}
        />
        <Image onClick={addNewAllergen} cursor='pointer' mx={3.5} src='/icons/allergen-plus.svg' />
    </Flex>
);

export default CustomAllergen;
