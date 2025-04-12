import { Flex, Image } from '@chakra-ui/react';

import { TextRegular, TextRegularProps } from '../../Text/Regular';

export interface ButtonRoundedProps extends TextRegularProps {
    text: TextRegularProps['regText'];
    iconUrl: string;
    textColor?: string;
    activeTextColor?: string;
    fontWeight?: number;
    isActive?: boolean;
    gap?: number;
    minWidth?: string | number;
}

export const ButtonRounded: React.FC<ButtonRoundedProps> = ({
    text,
    iconUrl,
    isActive = false,
    fontWeight,
    textColor,
    activeTextColor,
    gap = 1,
    minWidth,
}) => (
    <Flex
        minWidth={minWidth}
        wrap='wrap'
        justifyContent='center'
        textAlign='center'
        alignContent='center'
        _hover={{ cursor: 'pointer', boxShadow: 'lime.300 0 0 15px' }} // так не работает - не надо будет - убрать
    >
        <Flex
            justifyContent='center'
            width='40px'
            height='40px'
            alignItems='center'
            borderRadius='50%'
            bg={isActive ? 'black' : 'none'}
            mb={gap}
            boxShadow={isActive ? '0 0 40px #C4FF61' : 'none'}
            position='relative'
            sx={{
                '&::before': {
                    content: '""',
                    borderRadius: '50%',
                    height: isActive ? '200%' : 0,
                    width: isActive ? '200%' : 0,
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    zIndex: -1,
                    background:
                        'radial-gradient(50% 50% at 50% 50%, rgba(196, 255, 97, 0.7) 0%, rgba(255, 255, 255, 0) 100%)',
                },
            }}
        >
            <Image
                src={iconUrl}
                alt={`${text} icon`}
                // filter={isActive ? "invert(1)" : "none" }// в макете не хватает картинки
            />
        </Flex>
        <Flex flexBasis='100%' justifyContent='center'>
            <TextRegular
                regText={text}
                regTextFz='12px'
                regTextLh='16px'
                regTextColor={isActive ? (activeTextColor ? activeTextColor : 'black') : textColor}
                regTextFw={!isActive ? 400 : fontWeight}
            />
        </Flex>
    </Flex>
);
