import { Button, Image, Text } from '@chakra-ui/react';

import { BORDERS } from '~/constants/styles';

export interface ButtonBookBtnProps {
    bookBtnText?: string;
    bookBtnTextcolor?: string;
    bookBtnBorderColor?: string;
    bookBtnBg?: string;
    bookBtnBorder?: string;
    bookBtnBorderRadius?: string;
    bookBtnVariant?: string;
    bookBtnIconUrl?: string;
    bookBtnIconAltText?: string;
    bookBtnIconsize?: string;
    bookBtnSize?: string;
}

export const ButtonbookBtn: React.FC<ButtonBookBtnProps> = ({
    bookBtnText = 'Сохранить',
    bookBtnTextcolor = 'blackAlpha.800',
    bookBtnBorderColor,
    bookBtnBg,
    bookBtnBorder = BORDERS.main,
    bookBtnBorderRadius = 'md',
    bookBtnVariant = 'outline',
    bookBtnIconUrl = '/icons/bookmarks/heart.svg',
    bookBtnIconAltText = 'Сохранить',
    bookBtnIconsize = { base: 3, xl: 3.5 },
    bookBtnSize = { base: 6, xl: 'initial' },
}) => (
    <Button
        size={{ base: 'xs', xl: 'sm' }}
        maxWidth={bookBtnSize}
        sx={{
            '& .chakra-button__icon': {
                marginInlineEnd: { base: 0, xl: 2.4375 },
            },
        }}
        bg={bookBtnBg}
        color={bookBtnTextcolor}
        borderRadius={bookBtnBorderRadius}
        border={bookBtnBorder}
        borderColor={bookBtnBorderColor}
        leftIcon={<Image src={bookBtnIconUrl} alt={bookBtnIconAltText} boxSize={bookBtnIconsize} />}
        variant={bookBtnVariant}
    >
        <Text display={{ base: 'none', xl: 'initial' }}>{bookBtnText}</Text>
    </Button>
);
