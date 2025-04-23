import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Box, Icon } from '@chakra-ui/react';
import React, { MouseEventHandler } from 'react';

interface CloseButtonWithChevronProps {
    onReset: MouseEventHandler<HTMLDivElement>;
    isExpanded: boolean; // Показывает, открыто ли содержимое
}

const SelectableBoxActionButtons: React.FC<CloseButtonWithChevronProps> = ({
    onReset,
    isExpanded,
}) => (
    <Box display='flex' alignItems='center' gap={0} position='absolute' right={3}>
        <Box
            as='button'
            onClick={onReset}
            width='20px'
            height='20px'
            display='flex'
            alignItems='center'
            justifyContent='center'
            fontSize='12px'
            cursor='pointer'
        >
            ✕
        </Box>
        <Box
            as='button'
            width='20px'
            height='20px'
            display='flex'
            alignItems='center'
            justifyContent='center'
            cursor='pointer'
        >
            <Icon as={isExpanded ? ChevronUpIcon : ChevronDownIcon} />
        </Box>
    </Box>
);

export default SelectableBoxActionButtons;
