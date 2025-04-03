import { Button } from '@chakra-ui/react';

type ButtonOutlinedProps = {
    text: string;
    color?: string;
    borderColor?: string;
    bg?: string;
    border?: string;
    borderRadius?: string;
};

const ButtonOutlined: React.FC<ButtonOutlinedProps> = ({
    text,
    color = 'lime.600',
    borderColor = 'green.500',
    bg = 'white',
    border = '2px solid',
    borderRadius = 'md',
}) => (
    <Button
        bg={bg}
        color={color}
        borderRadius={borderRadius}
        border={border}
        borderColor={borderColor}
    >
        {text}
    </Button>
);

export default ButtonOutlined;
