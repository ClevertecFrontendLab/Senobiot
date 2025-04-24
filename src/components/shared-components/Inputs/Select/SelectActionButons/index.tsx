import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Box, Icon } from '@chakra-ui/react';

export const ResetButton: React.FC<{
    onReset?: React.MouseEventHandler<HTMLButtonElement>;
}> = ({ onReset }) => (
    <Box
        top={3}
        right={10}
        position='absolute'
        as='button'
        onClick={onReset}
        fontSize='12px'
        cursor='pointer'
    >
        ✕
    </Box>
);

export const ExpandButton: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
    <Box
        zIndex={2}
        top={3}
        right={4}
        position='absolute'
        as='button'
        width='20px'
        height='20px'
        display='flex'
        alignItems='center'
        justifyContent='center'
        cursor='pointer'
    >
        <Icon as={isOpen ? ChevronUpIcon : ChevronDownIcon} />
    </Box>
);
