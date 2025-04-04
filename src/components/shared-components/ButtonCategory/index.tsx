import { Button, Image } from '@chakra-ui/react';
import React from 'react';

export type ButtonCategoryProps = {
    categoryText?: string;
    categoryIconUrl?: string;
    categoryColor?: string;
    categoryBg?: string;
    categoryBorderRadius?: string;
};

const ButtonCategory: React.FC<ButtonCategoryProps> = ({
    categoryText,
    categoryIconUrl,
    categoryColor = 'black',
    categoryBg = 'lime.300',
    categoryBorderRadius = '6px',
}) => (
    <Button
        bg={categoryBg}
        color={categoryColor}
        borderRadius={categoryBorderRadius}
        px={4}
        py={2}
        leftIcon={<Image src={categoryIconUrl} alt={`${categoryText} icon`} boxSize={4} mt={1} />}
        _hover={{
            bg: 'lime.50',
        }}
        _active={{
            bg: 'lime.50',
        }}
    >
        {categoryText}
    </Button>
);

export default ButtonCategory;
