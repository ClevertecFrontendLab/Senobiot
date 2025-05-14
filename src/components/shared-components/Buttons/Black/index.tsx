import { Button, ButtonProps } from '@chakra-ui/react';

type ButtonBlackProps = ButtonProps & { text?: string };

export const ButtonBlack: React.FC<ButtonBlackProps> = ({ text, onClick }) => (
    <Button
        onClick={onClick}
        fontWeight={600}
        fontSize='18px'
        lineHeight='28px'
        color='#fff'
        bg='#000'
        w='100%'
        h={12}
    >
        {text}
    </Button>
);
