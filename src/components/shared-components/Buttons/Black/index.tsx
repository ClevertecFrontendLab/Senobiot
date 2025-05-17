import { Button, ButtonProps } from '@chakra-ui/react';

type ButtonBlackProps = ButtonProps & { text?: string; dataTestId?: string };

export const ButtonBlack: React.FC<ButtonBlackProps> = ({ text, onClick, type, dataTestId }) => (
    <Button
        onClick={onClick}
        fontWeight={600}
        fontSize='18px'
        lineHeight='28px'
        color='#fff'
        bg='blackAlpha.900'
        w='100%'
        h={12}
        type={type}
        data-test-id={dataTestId}
    >
        {text}
    </Button>
);
