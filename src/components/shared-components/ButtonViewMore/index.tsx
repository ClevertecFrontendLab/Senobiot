import { Button, Image, ResponsiveValue } from '@chakra-ui/react';
import React from 'react';

type ButtonViewMoreProps = {
    title: string;
    noButtonIcon?: boolean;
    fz?: ResponsiveValue<string | number>;
    dataTestId?: string;
};

const ButtonViewMore: React.FC<ButtonViewMoreProps> = ({
    title,
    noButtonIcon = true,
    fz,
    dataTestId,
}) => (
    <Button
        bg='lime.300'
        color='black'
        borderRadius='6px'
        px={4}
        py={2}
        data-test-id={dataTestId}
        rightIcon={
            noButtonIcon ? undefined : (
                <Image src='/icons/arrow-right.svg' alt='arrow right' boxSize={4} mt={1} />
            )
        }
        _hover={{
            bg: 'lime.50',
        }}
        _active={{
            bg: 'lime.50',
        }}
        fontSize={fz}
    >
        {title}
    </Button>
);

export default ButtonViewMore;
