import { Box, Button, Flex, Tag, TagCloseButton, TagLabel } from '@chakra-ui/react';
import { MouseEventHandler } from 'react';

import { PLACEHOLDERS } from '~/constants';

import { ExpandButton, ResetButton } from '../SelectActionButons';
import { getWrapperStyles, inputStyles, tagStyles } from './InnerTags.styles';

type SelectInnerTagsProps = {
    toggleDropdown: MouseEventHandler<HTMLDivElement>;
    toggleTag?: MouseEventHandler<HTMLButtonElement>;
    onReset?: React.MouseEventHandler<HTMLButtonElement>;
    options?: string[];
    placeholder?: string;
    isOpen?: boolean;
    noResetButton?: boolean;
    noTagCloseButton?: boolean;
    dataTestAllergenTag?: string;
    dataTestIdToggler?: string;
    isDisabled?: boolean;
    dataTestId?: string;
};

export const SelectInnerTags: React.FC<SelectInnerTagsProps> = ({
    options = [],
    isOpen = false,
    toggleDropdown,
    toggleTag,
    onReset,
    noResetButton = false,
    noTagCloseButton = false,
    placeholder = PLACEHOLDERS.allergens,
    dataTestAllergenTag,
    dataTestIdToggler,
    dataTestId,
    isDisabled,
}) => (
    <Box
        data-test-id={dataTestId}
        sx={getWrapperStyles(isOpen, options, false)}
        onClick={toggleDropdown}
    >
        {options?.length > 0 ? (
            <Flex gap={2} wrap='wrap' data-test-id={dataTestIdToggler}>
                {options.map((option) => (
                    <Tag data-test-id={dataTestAllergenTag} key={option} sx={tagStyles}>
                        <TagLabel>{option}</TagLabel>
                        {!noTagCloseButton && <TagCloseButton onClick={toggleTag} />}
                    </Tag>
                ))}
                {!noResetButton && <ResetButton onReset={onReset} />}
            </Flex>
        ) : (
            <Button isDisabled={isDisabled} data-test-id={dataTestIdToggler} sx={inputStyles}>
                {placeholder}
            </Button>
        )}
        <ExpandButton isOpen={isOpen} />
    </Box>
);
