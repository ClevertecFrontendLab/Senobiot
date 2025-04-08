import { Button, Image, SystemStyleObject } from '@chakra-ui/react';
import React from 'react';

export type ButtonCategoryProps = {
    categoryText?: string;
    categoryIconUrl?: string;
    categoryColor?: string;
    categoryBg?: string;
    categoryBorderRadius?: string;
    categorySx?: SystemStyleObject;
};

const ButtonCategory: React.FC<ButtonCategoryProps> = ({
    categoryText,
    categoryIconUrl,
    categoryColor = 'black',
    categoryBg = 'lime.300',
    categoryBorderRadius = '4px',
    categorySx,
}) => (
    <Button
        sx={categorySx}
        size='xs'
        bg={categoryBg}
        color={categoryColor}
        borderRadius={categoryBorderRadius}
        px={4}
        py={2}
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
