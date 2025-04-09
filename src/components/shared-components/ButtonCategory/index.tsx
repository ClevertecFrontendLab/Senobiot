import { Button, Image, SystemStyleObject } from '@chakra-ui/react';
import React from 'react';

export type ButtonCategoryProps = {
    categoryText?: string;
    categoryIconUrl?: string;
    categoryColor?: string;
    categoryBg?: string;
    categoryBorderRadius?: string;
    categorySx?: SystemStyleObject;
    categoryPx?: string | number;
    categoryPy?: string | number;
};

const ButtonCategory: React.FC<ButtonCategoryProps> = ({
    categoryText,
    categoryIconUrl,
    categoryColor = 'black',
    categoryBg = 'lime.300',
    categoryBorderRadius = '4px',
    categorySx,
    categoryPx = 4,
    categoryPy = 2,
}) => (
    <Button
        sx={categorySx}
        size='xs'
        bg={categoryBg}
        color={categoryColor}
        borderRadius={categoryBorderRadius}
        px={categoryPx}
        py={categoryPy}
        leftIcon={<Image src={categoryIconUrl} alt={`${categoryText} icon`} boxSize={4} mt={1} />}
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
