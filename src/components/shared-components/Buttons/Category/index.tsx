import { Button, Image, ResponsiveValue } from '@chakra-ui/react';
import React from 'react';

export type ButtonCategoryProps = {
    categoryTitle?: string;
    categoryIconUrl?: string;
    categoryColor?: string;
    categoryBg?: string;
    categoryBorderRadius?: string;
    categoryPx?: ResponsiveValue<string | number>;
    categoryPb?: ResponsiveValue<string | number>;
    categoryPy?: ResponsiveValue<string | number>;
    categoryTextFz?: string | number;
    categoryTextNoofLines?: ResponsiveValue<number>;
};

export const ButtonCategory: React.FC<ButtonCategoryProps> = ({
    categoryColor = 'black',
    categoryBg = 'lime.300',
    categoryBorderRadius = '4px',
    categoryPx = 4,
    categoryPy,
    categoryPb,
    categoryTextFz,
    categoryTextNoofLines,
    categoryIconUrl,
    categoryTitle,
}) => (
    <Button
        flexShrink={0}
        textAlign='left'
        pb={categoryPb}
        noOfLines={categoryTextNoofLines}
        size='xs'
        bg={categoryBg}
        color={categoryColor}
        borderRadius={categoryBorderRadius}
        px={categoryPx}
        py={categoryPy}
        fontWeight={400}
        fontSize={categoryTextFz}
        leftIcon={<Image src={categoryIconUrl} alt={`${categoryTitle} icon`} boxSize={4} />}
        _hover={{
            bg: categoryBg,
        }}
        _active={{
            bg: categoryBg,
        }}
    >
        {categoryTitle}
    </Button>
);
