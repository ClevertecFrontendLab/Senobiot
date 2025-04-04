import { Button, Image } from '@chakra-ui/react';
import React from 'react';

type ButtonViewMoreProps = {
    title: string;
};

const ButtonViewMore: React.FC<ButtonViewMoreProps> = ({ title }) => (
    <Button
        bg='lime.300'
        color='black'
        borderRadius='6px'
        px={4}
        py={2}
        rightIcon={<Image src='/icons/arrow-right.svg' alt='arrow right' boxSize={4} mt={1} />}
        _hover={{
            bg: 'lime.50',
        }}
        _active={{
            bg: 'lime.50',
        }}
    >
        {title}
    </Button>
);

export default ButtonViewMore;
