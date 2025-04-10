import { Button, ResponsiveValue } from '@chakra-ui/react';

export type ButtonOutlinedProps = {
    outlBtnText: string;
    outlBtnColor?: string;
    outlBtnBorderColor?: string;
    outlBtnBg?: string;
    outlBtnBorder?: string;
    outlBtnBorderBottom?: string;
    outlBtnBorderRadius?: string;
    size?: ResponsiveValue<string>;
    gap?: number;
    as?: React.ElementType;
};

export const ButtonOutlined: React.FC<ButtonOutlinedProps> = ({
    outlBtnText,
    outlBtnColor = 'lime.600',
    outlBtnBorderColor = 'green.500',
    outlBtnBg = 'white',
    outlBtnBorder = '2px solid',
    outlBtnBorderBottom,
    outlBtnBorderRadius = 'md',
    gap = 0,
    size,
    as,
}) => (
    <Button
        size={size}
        gap={gap}
        bg={outlBtnBg}
        color={outlBtnColor}
        borderRadius={outlBtnBorderRadius}
        border={outlBtnBorder}
        borderBottom={outlBtnBorderBottom}
        borderColor={outlBtnBorderColor}
        _hover={{
            bg: 0,
        }}
        as={as}
    >
        {outlBtnText}
    </Button>
);
