import { Box, Flex, Tag, TagCloseButton, TagLabel, Text } from '@chakra-ui/react';
import { MouseEventHandler } from 'react';

import { BORDERS } from '~/constants/styles';

import { ExpandButton, ResetButton } from '../SelectActionButons';

type SelectOuterTagsProps = {
    options: string[];
    placeholder?: string;
    isOpen?: boolean;
    noResetButton?: boolean;
    noTagCloseButton?: boolean;
    toggleDropdown: MouseEventHandler<HTMLDivElement>;
    toggleTag?: MouseEventHandler<HTMLButtonElement>;
    onReset?: React.MouseEventHandler<HTMLButtonElement>;
};

export const SelectOuterTags: React.FC<SelectOuterTagsProps> = ({
    options,
    isOpen = false,
    toggleDropdown,
    toggleTag,
    onReset,
    noResetButton = false,
    noTagCloseButton = false,
    placeholder = 'Выберите из списка...',
}) => (
    <Flex h={42} wrap='wrap'>
        <Text h={42} color='blackAlpha.700'>
            {placeholder}
        </Text>
        {options.length > 0 && (
            <Box
                w='100%'
                p={2}
                pr={10}
                border='1px solid'
                borderColor={isOpen || options.length ? 'lime.400' : '#ccc'}
                borderRadius='md'
                cursor='pointer'
                _focus={{ borderColor: 'lime.400' }}
                _hover={{ borderColor: 'lime.400' }}
                onClick={toggleDropdown}
            >
                {!noResetButton && options.length > 0 && <ResetButton onReset={onReset} />}
                <ExpandButton isOpen={isOpen} />
            </Box>
        )}
        {options.length > 0 && (
            <Flex gap={2} wrap='wrap'>
                {options.map((option) => (
                    <Tag
                        key={option}
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
                        <TagLabel>{option}</TagLabel>
                        {!noTagCloseButton && <TagCloseButton onClick={toggleTag} />}
                    </Tag>
                ))}
            </Flex>
        )}
    </Flex>
);
