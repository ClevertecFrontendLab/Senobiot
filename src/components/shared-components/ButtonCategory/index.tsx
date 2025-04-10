import { Button, Image, ResponsiveValue, SystemStyleObject } from '@chakra-ui/react';
import React from 'react';

export type ButtonCategoryProps = {
    categoryText?: string;
    categoryIconUrl?: string;
    categoryColor?: string;
    categoryBg?: string;
    categoryBorderRadius?: string;
    categorySx?: SystemStyleObject;
    categoryPx?: ResponsiveValue<string | number>;
    categoryPb?: ResponsiveValue<string | number>;
    categoryPy?: ResponsiveValue<string | number>;
    categoryTextFz?: string | number;
    categoryTextNoofLines?: ResponsiveValue<number>;
};

const ButtonCategory: React.FC<ButtonCategoryProps> = ({
    categoryText,
    categoryIconUrl,
    categoryColor = 'black',
    categoryBg = 'lime.300',
    categoryBorderRadius = '4px',
    categorySx,
    categoryPx = 4,
    categoryPy,
    categoryPb,
    categoryTextFz,
    categoryTextNoofLines,
}) => (
    <Button
        pb={categoryPb}
        noOfLines={categoryTextNoofLines}
        sx={categorySx}
        size='xs'
        bg={categoryBg}
        color={categoryColor}
        borderRadius={categoryBorderRadius}
        px={categoryPx}
        py={categoryPy}
        fontWeight={400}
        fontSize={categoryTextFz}
        leftIcon={<Image src={categoryIconUrl} alt={`${categoryText} icon`} boxSize={4} />}
        _hover={{
            bg: categoryBg,
        }}
        _active={{
            bg: categoryBg,
        }}
    >
        {categoryText}
    </Button>
);

export default ButtonCategory;
