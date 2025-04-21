import { Button, Image, Text } from '@chakra-ui/react';

export interface ButtonTimeBtnProps {
    timeBtnText?: string;
    timeBtnIconsize?: string;
}

export const ButtonTimeBtn: React.FC<ButtonTimeBtnProps> = ({
    timeBtnText = '0 минут',
    timeBtnIconsize = { base: 3, xl: 3.5 },
}) => (
    <Button
        size={{ base: 'xs', xl: 'sm' }}
        bg='blackAlpha.100'
        color='blackAlpha.800'
        borderRadius='md'
        leftIcon={
            <Image
                src='/icons/bookmarks/clock.svg'
                alt='coocking time icon'
                boxSize={timeBtnIconsize}
            />
        }
        variant='link'
    >
        <Text>{timeBtnText}</Text>
    </Button>
);
