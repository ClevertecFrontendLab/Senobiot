import { Box, Text } from '@chakra-ui/react';
import { MouseEventHandler } from 'react';

import { ExpandButton, ResetButton } from '../SelectActionButons';

export const SelectRegular: React.FC<{
    placeholder?: string;
    isOpen?: boolean;
    noResetButton?: boolean;
    toggleDropdown: MouseEventHandler<HTMLDivElement>;
    onReset?: React.MouseEventHandler<HTMLButtonElement>;
}> = ({
    isOpen = false,
    toggleDropdown,
    onReset,
    noResetButton = false,
    placeholder = 'Выберите из списка...',
}) => (
    <Box
        position='relative'
        w='100%'
        p={2}
        pr={10}
        border='1px solid'
        borderColor={isOpen || isOpen ? 'lime.400' : '#ccc'}
        borderRadius='md'
        cursor='pointer'
        _focus={{ borderColor: 'lime.400' }}
        _hover={{ borderColor: 'lime.400' }}
        onClick={toggleDropdown}
    >
        <Text color='blackAlpha.700'>{placeholder}</Text>
        {!noResetButton && <ResetButton onReset={onReset} />}
        <ExpandButton isOpen={isOpen} />
    </Box>
);
