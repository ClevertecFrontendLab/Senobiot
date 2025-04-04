import { Button } from '@chakra-ui/react';

export type ButtonOutlinedProps = {
    outlBtnText: string;
    outlBtnColor?: string;
    outlBtnBorderColor?: string;
    outlBtnBg?: string;
    outlBtnBorder?: string;
    outlBtnBorderRadius?: string;
};

const ButtonOutlined: React.FC<ButtonOutlinedProps> = ({
    outlBtnText,
    outlBtnColor = 'lime.600',
    outlBtnBorderColor = 'green.500',
    outlBtnBg = 'white',
    outlBtnBorder = '2px solid',
    outlBtnBorderRadius = 'md',
}) => (
    <Button
        bg={outlBtnBg}
        color={outlBtnColor}
        borderRadius={outlBtnBorderRadius}
        border={outlBtnBorder}
        borderColor={outlBtnBorderColor}
    >
        {outlBtnText}
    </Button>
);

export default ButtonOutlined;
