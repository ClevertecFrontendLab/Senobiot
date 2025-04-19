import { Button, Image, ResponsiveValue } from '@chakra-ui/react';
import React from 'react';

import { getCategoryByKey } from '~/configs/navigationConfig';

export type ButtonCategoryProps = {
    categoryKey?: string;
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
    categoryKey,
    categoryColor = 'black',
    categoryBg = 'lime.300',
    categoryBorderRadius = '4px',
    categoryPx = 4,
    categoryPy,
    categoryPb,
    categoryTextFz,
    categoryTextNoofLines,
}) => {
    if (!categoryKey) return;
    const categoryProps = getCategoryByKey(categoryKey);

    if (!categoryProps) return;
    const { icon, title } = categoryProps;

    return (
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
            leftIcon={<Image src={icon} alt={`${title} icon`} boxSize={4} />}
            _hover={{
                bg: categoryBg,
            }}
            _active={{
                bg: categoryBg,
            }}
        >
            {title}
        </Button>
    );
};
