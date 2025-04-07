import { Box, Flex, Image } from '@chakra-ui/react';

import TextRegular, { TextRegularProps } from '../../Text/Regular';

export interface ButtonRoundedProps extends TextRegularProps {
    text: TextRegularProps['regText'];
    iconUrl: string;
    textColor?: string;
    activeTextColor?: string;
    fontWeight?: number;
    isActive?: boolean;
    gap?: number;
}

const ButtonRounded: React.FC<ButtonRoundedProps> = ({
    text,
    iconUrl,
    isActive = false,
    fontWeight,
    textColor,
    activeTextColor,
    gap = 1,
}) => (
    <Flex
        wrap='wrap'
        justifyContent='center'
        textAlign='center'
        alignContent='center'
        _hover={{ cursor: 'pointer', boxShadow: 'lime.300 0 0 15px' }} // так не работает - не надо будет - убрать
    >
        <Box
            justifyContent='center'
            display='flex'
            width='40px'
            height='40px'
            alignItems='center'
            borderRadius='50%'
            bg={isActive ? 'black' : 'none'}
            mb={gap}
            boxShadow={isActive ? '0 0 40px #C4FF61' : 'none'}
        >
            <Image
                src={iconUrl}
                alt={`${text} icon`}
                // filter={isActive ? "invert(1)" : "none" }// в макете не хватает картинки
            />
        </Box>
        <Box flexBasis='100%'>
            <TextRegular
                regText={text}
                regTextFz='12px'
                regTextLh='16px'
                regTextColor={isActive ? (activeTextColor ? activeTextColor : 'black') : textColor}
                regTextFw={!isActive ? 400 : fontWeight}
            />
        </Box>
    </Flex>
);

export default ButtonRounded;
