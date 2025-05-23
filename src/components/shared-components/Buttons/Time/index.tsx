import { Button, Image, ResponsiveValue, Text } from '@chakra-ui/react';

import { BASE_URL } from '~/constants';

export type ButtonTimeBtnProps = {
    timeBtnText?: string;
    timeBtnIconsize?: string | number;
    timeBtnMarginBottom?: ResponsiveValue<string | number>;
};

export const ButtonTimeBtn: React.FC<ButtonTimeBtnProps> = ({
    timeBtnText = '0 минут',
    timeBtnIconsize = 4,
    timeBtnMarginBottom = 0,
}) => (
    <Button
        h={6}
        bg='blackAlpha.100'
        color='blackAlpha.800'
        borderRadius='md'
        fontSize='14px'
        fontWeight={400}
        w={104}
        py={1}
        mb={timeBtnMarginBottom}
        mt='auto'
        leftIcon={
            <Image
                src={`${BASE_URL}assets/images/icons/bookmarks/clock.svg`}
                alt='coocking time icon'
                boxSize={timeBtnIconsize}
            />
        }
        variant='link'
    >
        <Text>{timeBtnText} минут</Text>
    </Button>
);
