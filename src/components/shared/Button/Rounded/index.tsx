import { Box, Flex, Image } from '@chakra-ui/react';

import TextRegular from '../../Text/Regular';

type ButtonRoundedProps = {
    text: string;
    iconUrl: string;
    color?: string;
    isActive?: boolean;
    fontWeight?: string;
};

const ButtonRounded: React.FC<ButtonRoundedProps> = ({
    text,
    color,
    iconUrl,
    isActive = false,
    fontWeight,
}) => (
    <Flex
        wrap='wrap'
        justifyContent='center'
        textAlign='center'
        alignContent='center'
        _hover={{ cursor: 'pointer', boxShadow: 'lime.300 0 0 15px' }}
    >
        <Box
            justifyContent='center'
            display='flex'
            width='40px'
            height='40px'
            alignItems='center'
            borderRadius='50%'
            bg={isActive ? 'black' : 'none'}
            mb={1}
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
                text={text}
                fontSize='12px'
                lineHeight='16px'
                color={isActive ? 'black' : color}
                fontWeight={!isActive ? '400' : fontWeight}
            />
        </Box>
    </Flex>
);

export default ButtonRounded;
