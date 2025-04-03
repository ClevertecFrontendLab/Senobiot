import { Button, Image } from '@chakra-ui/react';
import React from 'react';

type ButtonCategoryProps = {
    text: string;
    iconUrl?: string;
    color?: string;
    bg?: string;
};

const ButtonCategory: React.FC<ButtonCategoryProps> = ({
    text,
    iconUrl,
    color = 'black',
    bg = 'lime.300',
}) => (
    <Button
        bg={bg}
        color={color}
        borderRadius='6px'
        px={4}
        py={2}
        leftIcon={<Image src={iconUrl} alt={`${text} icon`} boxSize={4} mt={1} />}
        _hover={{
            bg: 'lime.50',
        }}
        _active={{
            bg: 'lime.50',
        }}
    >
        {text}
    </Button>
);

export default ButtonCategory;
