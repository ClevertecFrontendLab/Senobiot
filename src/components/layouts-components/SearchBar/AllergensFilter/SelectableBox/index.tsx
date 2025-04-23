import { Box, Flex, Tag, TagLabel, Text } from '@chakra-ui/react';
import { MouseEventHandler } from 'react';

import { BORDERS } from '~/constants/styles';

import SelectableBoxActionButtons from './SelectableBoxActionButtons';

const SelectableBox: React.FC<{
    selectedAllergens: string[];
    toggleDropdown: MouseEventHandler<HTMLDivElement>;
    onReset: MouseEventHandler<HTMLDivElement>;
    isOpen: boolean;
}> = ({ selectedAllergens, toggleDropdown, isOpen, onReset }) => (
    <Box
        p={2}
        pr={10}
        border='1px solid'
        borderColor={isOpen || selectedAllergens.length ? 'lime.400' : '#ccc'}
        borderRadius='md'
        cursor='pointer'
        _focus={{ borderColor: 'lime.400' }}
        _hover={{ borderColor: 'lime.400' }}
        onClick={toggleDropdown}
    >
        {selectedAllergens.length > 0 ? (
            <Flex gap={2} wrap='wrap'>
                {selectedAllergens.map((allergen) => (
                    <Tag
                        key={allergen}
                        variant='outline'
                        border={BORDERS.allergenTag}
                        color='lime.600'
                        fontSize='12px'
                        pt={0.5}
                        fontWeight={500}
                        fontFamily='Inter'
                        h='20px'
                        boxShadow={0}
                    >
                        <TagLabel>{allergen}</TagLabel>
                        {/* <TagCloseButton Если надо будет это крстик на теге потом включим
                        onClick={e => {
                            e.stopPropagation();
                            toggleAllergen(allergen);
                        }}
                        /> */}
                    </Tag>
                ))}
                <SelectableBoxActionButtons onReset={onReset} isExpanded={isOpen} />
            </Flex>
        ) : (
            <Text color='blackAlpha.700'>Выберите из списка...</Text>
        )}
    </Box>
);

export default SelectableBox;
