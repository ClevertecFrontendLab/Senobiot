import { Box, Text } from '@chakra-ui/react';
import { MouseEventHandler } from 'react';

const SelectableBox: React.FC<{
    selectedAllergens: string[];
    toggleDropdown: MouseEventHandler<HTMLDivElement>;
    isOpen: boolean;
}> = ({ selectedAllergens, toggleDropdown, isOpen }) => (
    <Box
        p={2}
        border='1px solid'
        borderColor={isOpen ? 'lime.400' : '#ccc'}
        borderRadius='md'
        cursor='pointer'
        _focus={{ borderColor: 'lime.400' }}
        _hover={{ borderColor: 'lime.400' }}
        onClick={toggleDropdown}
    >
        <Text color='blackAlpha.700'>
            {selectedAllergens.length > 0 ? selectedAllergens.join(', ') : 'Выберите из списка...'}
        </Text>
    </Box>
);

export default SelectableBox;
